suite('loadModel', function() {
  var invalidFile = '404file';
  var validFile = 'unit/assets/teapot.obj';
  var validObjFileforMtl='unit/assets/octa-color.obj';
  var validSTLfile = 'unit/assets/ascii.stl';
  const missingMtltoObjFile= 'unit/assets/plant.obj';
  var validSTLfileWithoutExtension = 'unit/assets/ascii';

  test('_friendlyFileLoadError is called', async function() {
    const _friendlyFileLoadErrorStub = sinon.stub(p5, '_friendlyFileLoadError');
    try {
      await promisedSketch(function(sketch, resolve, reject) {
        sketch.preload = function() {
          sketch.loadModel(invalidFile, reject, resolve);
        };
      });
      expect(
        _friendlyFileLoadErrorStub.calledOnce,
        'p5._friendlyFileLoadError was not called'
      ).to.be.true;
    } finally {
      _friendlyFileLoadErrorStub.restore();
    }
  });

  testSketchWithPromise('error prevents sketch continuing', function(
    sketch,
    resolve,
    reject
  ) {
    sketch.preload = function() {
      sketch.loadModel(invalidFile);
      setTimeout(resolve, 50);
    };

    sketch.setup = function() {
      reject(new Error('Setup called'));
    };

    sketch.draw = function() {
      reject(new Error('Draw called'));
    };
  });

  testSketchWithPromise('error callback is called', function(
    sketch,
    resolve,
    reject
  ) {
    sketch.preload = function() {
      sketch.loadModel(
        invalidFile,
        function() {
          reject(new Error('Success callback executed.'));
        },
        function() {
          // Wait a bit so that if both callbacks are executed we will get an error.
          setTimeout(resolve, 50);
        }
      );
    };
  });

  testSketchWithPromise('loading correctly triggers setup', function(
    sketch,
    resolve,
    reject
  ) {
    sketch.preload = function() {
      sketch.loadModel(validFile);
    };

    sketch.setup = function() {
      resolve();
    };
  });

  testSketchWithPromise('success callback is called', function(
    sketch,
    done
  ) {
    var hasBeenCalled = false;
    sketch.preload = function() {
      sketch.loadModel(
        validFile,
        function() {
          hasBeenCalled = true;
          done();
        },
        function(err) {
          done(new Error('Error callback was entered: ' + err));
        }
      );
    };

    sketch.setup = function() {
      if (!hasBeenCalled) {
        done(new Error('Setup called prior to success callback'));
      }
    };
  });

  test('loads OBJ file with associated MTL file correctly', async function(){
    const model = await promisedSketch(function (sketch,resolve,reject){
      sketch.preload=function(){
        sketch.loadModel(validObjFileforMtl,resolve,reject);
      };
    });
    const expectedColors=[[0, 0, 0.5],
      [0, 0, 0.942654],
      [0, 0.815632, 1],
      [0, 0.965177, 1],
      [0.848654, 1, 0.151346],
      [1, 0.888635, 0],
      [1, 0.77791, 0],
      [0.5, 0, 0]];
    assert.deepEqual(model.vertexColors,expectedColors);
  });
  test.only('throws an error for missing MTL file specified in OBJ file', async function() {
    try {
      await promisedSketch(function (sketch, resolve, reject) {
        sketch.preload = function () {
          sketch.loadModel(missingMtltoObjFile, resolve, reject);
        };
      });
      // If the promise resolves without throwing an error, fail the test
      assert.fail('Expected an error for missing MTL file, but the promise resolved successfully');
    } catch (error) {
      // Check if the error message indicates a missing MTL file
      console.log(error);
      assert.include(error.message, 'MTL file not found', 'Unexpected error message');
    }
  });
  test('returns an object with correct data', async function() {
    const model = await promisedSketch(function(sketch, resolve, reject) {
      var _model;
      sketch.preload = function() {
        _model = sketch.loadModel(validFile, function() {}, reject);
      };

      sketch.setup = function() {
        resolve(_model);
      };
    });
    assert.instanceOf(model, p5.Geometry);
  });

  test('passes an object with correct data to callback', async function() {
    const model = await promisedSketch(function(sketch, resolve, reject) {
      sketch.preload = function() {
        sketch.loadModel(validFile, resolve, reject);
      };
    });
    assert.instanceOf(model, p5.Geometry);
  });

  test('resolves STL file correctly', async function() {
    const model = await promisedSketch(function(sketch, resolve, reject) {
      sketch.preload = function() {
        sketch.loadModel(validSTLfile, resolve, reject);
      };
    });
    assert.instanceOf(model, p5.Geometry);
  });

  test('resolves STL file correctly with explicit extension', async function() {
    const model = await promisedSketch(function(sketch, resolve, reject) {
      sketch.preload = function() {
        sketch.loadModel(validSTLfileWithoutExtension, resolve, reject, '.stl');
      };
    });
    assert.instanceOf(model, p5.Geometry);
  });

  test('resolves STL file correctly with case insensitive extension', async function() {
    const model = await promisedSketch(function(sketch, resolve, reject) {
      sketch.preload = function() {
        sketch.loadModel(validSTLfileWithoutExtension, resolve, reject, '.STL');
      };
    });
    assert.instanceOf(model, p5.Geometry);
  });
});
