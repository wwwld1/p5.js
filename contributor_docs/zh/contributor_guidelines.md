# 贡献者指南
欢迎来到贡献者指南！本文档适用于希望向 p5.js 贡献代码的新贡献者，希望在一些技术步骤上进行刷新的贡献者，或者与 p5.js 的代码贡献相关的其他任何事情。

如果您希望在 p5.js 存储库之外做出贡献（编写教程，计划课程，组织活动），请查看其他相关页面。管理员或维护人员可能会发现[管理员指南](./steward_guidelines.md)在审查问题和拉取请求方面更有帮助。

本文档内容较长而全面，但我们将尽量清晰地说明所有步骤和要点。请利用目录，浏览器的搜索功能（`Ctrl + F`或`Cmd + F`）来查找与您相关的部分。如果某些部分与您计划的贡献无关，可以跳过它们。

# 目录
- [关于Issue](#关于issue)
	- [Issue是什么？](#issue是什么)
	- [问题模板](#问题模板)
		- ["发现了一个错误"](#发现了一个错误)
		- ["现有功能增强"](#现有功能增强)
		- ["新功能请求"](#新功能请求)
		- ["讨论"](#讨论)
- [在p5.js代码库上工作](#在p5js代码库上工作)
	- [使用Github的编辑功能](#使用github的编辑功能)
	- [Fork p5.js并从您的Fork上工作](#fork-p5js并从您的fork上工作)
	- [代码库拆分](#代码库拆分)
	- [构建设置](#构建设置)
	- [Git工作流程](#git工作流程)
		- [源代码](#源代码)
		- [单元测试](#单元测试)
		- [内联文档](#内联文档)
		- [国际化](#国际化)
		- [可访问性](#可访问性)
	- [代码规范](#代码规范)
	- [设计原则](#设计原则)
- [拉取请求](#拉取请求)
	- [创建拉取请求](#创建拉取请求)
		- [拉取请求信息](#拉取请求信息)
		- [变基和解决冲突](#变基和解决冲突)
	- [讨论和修改](#讨论和修改)

---
# 关于Issue
p5.js 的 Github 存储库（repo）上的大部分活动都发生在问题上，Issue 很可能也是您开始贡献过程的地方。

## Issue是什么？
Issue 是Github 上描述 Issue 的帖子的通用名称。这个"Issue"可以是一个错误报告，一个添加新功能的请求，一个讨论，一个问题，一个公告，或者任何可以作为帖子的内容。任何具有Github账号的人，包括机器人，都可以在每个问题下方添加评论！这是贡献者讨论与项目开发相关主题的地方。

尽管问题可以因各种原因而被提出，但对于p5.js的仓库，我们通常只使用问题来讨论与p5.js源代码开发相关的主题。像调试你自己的代码、邀请合作者加入你的项目或其他不相关的主题应该在[论坛](https://discourse.processing.com)或其他平台上进行讨论。

我们创建了易于使用的问题模板，以帮助您决定一个主题是否应该是Github的问题，还是应该在其他地方发布！

## 问题模板
p5.js 的问题模板不仅使管理员和维护者更容易理解和审查问题，还使您更容易提交相关问题并更快地获得答复。尽管它们被称为模板，但从您的角度来看，就像填写一个简单的表格，其中表格的不同字段是问题审查者需要正确诊断您的问题所需的重要信息。

要提交新的问题，请转到p5.js存储库的“Issues”选项卡，然后点击“New issue”按钮（通常为绿色且位于右侧）。点击后，将显示几个不同的选项，每个选项对应一个相关的问题模板，或者将您重定向到适当的地方提交您的问题。请从所呈现的所有选项中选择最相关的选项，以确保您的问题能够迅速得到正确的关注。以下将介绍适用于p5.js的问题模板，对于其他存储库，请查阅它们各自的贡献者文档。

### "发现了一个错误"
当你在使用p5.js时遇到可能的错误行为或某些行为与文档描述不符时，请使用以下模板。请注意，如果你尝试调试自己的代码或弄清楚为什么你的草图的行为与你预期的不同，并且你认为可能是你的代码的问题，你应该在[论坛](https://discourse.processing.org)上提问。如果后来确定你的问题确实源自p5.js，你可以随时打开一个问题并使用这个模板。

这个模板有几个需要填写的字段：
1. "p5.js 中最相关的子领域是什么？" - 这有助于相关的管理者识别和回应你的问题。这将自动使用相关的[标签](./issue_labels.md)给问题打上标签。
2. "p5.js 版本" - 你可以在`<script>`标签的链接中或者在p5.js/p5.min.js文件的第一行找到p5.js的版本号。它的格式类似于`1.4.2`（由三个点分隔的数字）。
3. "Web浏览器及版本" - 在Chrome中，在地址栏中输入"chrome://version"；在Firefox中输入"about:support"；在Safari中，在顶部栏"Safari"菜单项下选择"关于Safari"。这有助于我们区分不同浏览器之间的行为差异。
4. "操作系统" - 如果可能，请提供操作系统的版本号，例如`macOS 12.5`。有些错误可能也源自操作系统的行为。
5. "重现步骤" - 这可能是最重要的信息。你应该列出详细的步骤来重现你所遇到的错误。分享一个能够演示问题的基本示例代码可以让其他人更容易重现你面临的错误并开始制定解决方案。

正如上面提到的，模板中的许多不同字段旨在重现错误。你提供的关于草图环境以及其他人如何重现你所看到的问题的更多信息，将更容易让任何人理解你的问题并开始寻找解决方案。**请尽可能提供详细的信息，避免使用泛泛的陈述**，例如不要说"image()函数不起作用"，而是要更具体地描述，例如"image()函数无法以正确的尺寸显示加载的GIF图像"。描述你所面临的错误的一种有用方式是描述两个方面：1. 你期望你分享的示例代码执行什么样的行为（预期行为）；2. 示例代码实际上做了什么（实际行为）。

如果您希望为您刚刚报告的错误贡献修复代码，您可以在描述中说明。如果您可以提供一个简单的建议来修复您所描述的错误，那对于问题评审者来说将非常有帮助，因为他们需要知道您需要多少支持来贡献修复代码。在开始处理拉取请求之前，至少需要一个领域监督人或维护者批准修复该错误。在问题获得修复批准之前，任何在此之前提交的拉取请求都将被关闭。**您不应该在没有相应问题或在问题获得实施批准之前提交拉取请求（或开始进行代码更改）**，这是因为无法保证您的建议将被接受，而您所做的工作最终可能不会被合并。

### "现有功能增强"
如果您希望修改或添加p5.js的现有功能（函数、常量、渲染等），应使用此模板。例如，如果您想为`color()`函数和其他接受颜色的函数添加一种新的定义颜色的方式，这就是要使用的模板。

该模板有几个字段需要填写：
1. "提高可访问性" - 这是一个非可选字段，您需要在此处说明添加建议的功能增强将如何帮助p5.js [提高可访问性](./access.md)，使在创意艺术或技术领域中历史上被边缘化的人能够更好地使用。**如果没有提供此项内容，将不会接受任何提案**，尽管您可以填写"不确定"并邀请社区的其他成员提供关于如何提高p5.js可访问性的论点。
2. "p5.js中最适合的子领域是什么？" - 这将帮助相关的管理员确定并回应您的问题。这将自动使用相关的[标签](./issue_labels.md)标记该问题。
3. "功能增强详情" - 在这里描述您对功能增强的建议。一个好的功能增强建议通常包括清晰的用例：这个功能增强是什么、何时使用、如何使用以及为什么需要这个功能增强。

要使功能增强建议被接受，必须经过至少1个领域管理员或维护人员的批准，然后才能开始处理拉取请求。在批准提案之前提交的任何拉取请求都将被关闭，直到批准为止。**在没有相应的问题或在问题获得批准之前，您不应提交拉取请求（或开始编写代码更改）**，因为无法保证提案将被接受，并且您不会进行不会被合并的工作。

### "新功能请求"
该模板用于向p5.js提出新功能建议。例如，添加对使用新的`createTable`函数绘制原生HTML `<table>` 元素的支持。有些建议可能与现有的功能增强建议重叠，在这种情况下，您只需选择您认为最合适的模板即可。

因此，模板表单字段与“现有功能增强”部分的字段几乎相同。有关如何填写每个字段的详细信息，请参阅[上一节](#existing-feature-enchancement)。

要使新功能请求建议获得接受，必须由至少2个领域负责人或维护人员批准，才能开始处理拉取请求。在提案获得批准之前，所有已提交的拉取请求将被关闭，直到获得批准为止。**在没有相应问题或在问题获得实施批准之前，您不应提交拉取请求（或开始进行代码更改）**，因为无法保证提案将被接受，而您不会为不会合并的工作付出努力。

### "讨论"
该模板用于当您提交的问题与上述任何内容都不匹配时使用。在实际情况中，这种情况应该相对较少见。例如，关于是否在p5.js中采用特定的Web API功能的讨论应该作为一个[新功能请求](#new-feature-request)来提交；关于在各种颜色函数中添加额外颜色模式的讨论应该作为一个[功能增强](#existing-feature-enchancement)来提交；关于您组织的本地创意编码活动的公告应该在论坛上发布，或者如果您正在寻求支持或宣传，可以联系Processing Foundation等等。

在开启讨论问题时，您可以使用侧面板上的"Labels"（标签）选项来添加相关的附加标签，以便将您的问题引导到相关领域。模板本身只是一个最基本的文本字段，所以您可以在此处发布您想要讨论的任何主题。

---
# 在p5.js代码库上工作
现在问题已经讨论过，经过管理员批准的实现方案已确定，并且您愿意进行代码更改，您已经可以开始处理代码库了。

同样地，如果您遇到了一个问题，或者参与了一个问题的讨论，管理员已经批准了一个实现方案，但原始问题的作者或其他社区成员都没有表示他们愿意处理该问题，您可以自愿提交一份贡献，然后管理员会将该问题分配给您。

您不应该通过提交拉取请求来"插队"解决一个已经有其他人愿意提交贡献或已经分配给其他人的问题。我们总是优先考虑"先分配先服务"的原则，如果您为一个问题提交了拉取请求，而同时还有其他人在处理同一个问题，您的拉取请求将会被关闭。如果您发现一个已分配给个人的问题在几个月内没有活动，您可以在问题上留下礼貌的评论，询问进展情况以及他们是否需要帮助实现。我们通常允许相当长的时间框架供人们处理他们的贡献，因为我们理解大多数人通常是志愿工作，或者他们处理某个功能需要更多的时间；同样地，您应该按照自己的节奏工作，并确信在处理某个问题上没有严格的时间限制。话虽如此，如果您在代码贡献的任何方面遇到困难，请毫不犹豫地在问题中寻求帮助，管理员、维护人员以及我们社区的成员将尽力指导您！

## 使用Github的编辑功能
当在Github网页界面上查看文件时，在您正在查看的文件内容的顶部附近会有一个铅笔图标按钮。这个按钮是Github提供的一个方便的编辑功能，可以简化下面我们将要介绍的许多过程，您可以使用它来快速和简单地编辑您正在查看的文件。

然而，除非只进行非常简单的更改，否则不建议使用此功能。其中一个主要原因是，对于源代码的更复杂的更改，应该在提交PR之前在本地构建和测试。对于大多数人来说，使用本地开发环境通常比这个编辑功能提供的基本编辑环境更流畅。

## Fork p5.js并从您的Fork上工作
第一步是Fork p5.js 存储库。在开源中，Fork具有特定的含义，但对于我们的目的，它意味着创建存储库的副本并将其存储在您自己的 Github 帐户中。要Fork一个存储库，只需点击页面顶部附近的"Fork"按钮，Github 将在您的帐户中创建存储库的副本。

从你的 p5.js 存储库Fork进行工作是必要的，因为你可能没有直接写入官方 p5.js 存储库的权限，而在Fork上工作可以让你进行更改，然后将其提交回官方存储库。

此时，你应该对使用命令行、git、node.js 进行工作，并已经设置好本地开发环境有一定的了解。

Fork创建后，转到你的Fork页面，并通过点击绿色的"Code"按钮复制 git URL。它应该类似于 `https://github.com/limzykenneth/p5.js.git`。

接下来，在本地环境的命令行中进入这个 git 存储库。"克隆"的意思是将存储库的副本下载到本地机器上。在你想要存储 p5.js 源代码文件夹的文件夹中运行以下命令：

```
git clone [git_url]
```

将 `[git_url]` 替换为刚刚复制的 URL。这可能需要几分钟，具体取决于你的网络连接速度，这是一个冲杯咖啡的好时机！一旦过程完成，你可以在你喜欢的文本编辑器中打开下载的名为 `p5.js` 的文件夹，并开始浏览。

## 代码库拆分
在 p5.js 文件夹中，您将会遇到一些关键的文件和文件夹，具体如下：

* `src` - 这是最终生成 p5.js 和 p5.min.js 文件的所有代码所在的位置
* [`test`](../unit_testing.md) - 这是单元测试和测试所有文档示例的代码所在的位置
* `tasks` - 这是详细和自定义构建代码所在的位置
* `Gruntfile.js` - 这是主要的构建配置文件
* `contributor_docs` - 这是文档和其他贡献者文档所在的位置

其他的文件和文件夹要么是配置文件，要么是其他类型的支持文件，在大多数情况下，您不需要对它们进行任何修改。

## 构建设置
在开始之前，您需要设置本地项目文件夹，以便能够构建和运行 p5.js 的测试。假设您已经安装了 Node.js（带有 `npm`），

```
npm ci
```

这可能需要一些时间，因为 npm 会下载所有所需的依赖项，但一旦完成，那就是全部设置好了，非常简单，对吧？

## Git工作流程
现在，您准备进行所需的更改。有关存储库的不同部分以及如何进行相关更改的详细信息，请参阅下面的子章节。首先，运行 `npm test` 以尝试从头构建p5.js并运行所有单元测试，这应该会顺利完成，没有错误。

接下来，建议您在开始工作之前从 `main` 分支创建一个分支。在 `main` 分支上运行 `git checkout -b [branch_name]`，将 `[branch_name]` 替换为具有描述性的内容，然后您将处于一个单独的分支中。在git中，分支就像其名称所示，是存储库的分支版本，您可以在其中添加提交，而不会影响 `main` 或其他分支。使用分支可以同时处理多个功能（通过使用多个隔离的分支），并确信如果您弄乱了一个分支，它不会影响 `main` 分支。

在进行更改时，建议经常运行 `npm test`，特别是如果您正在处理源代码。运行这个命令需要一些时间，但它可以确保您所做的更改不会破坏现有行为。在继续提交下面描述的更改之前，应该先运行 `npm test`。

一旦您对代码库进行了更改，就需要将其提交到git。提交是保存在git存储库中的一组更改，它本质上记录了提交时存储库中文件的当前状态。可能会有一个问题是，您应该多久提交一次到git？一般而言，建议您尽量经常提交，而不是将多个大的更改合并为一个提交。一个好的指导原则是，每当完成一个可以用一句话描述的子任务时就提交一次。

要提交所有当前更改，请按照以下步骤进行操作：

1. 运行 `git status` 并检查它只列出您已更改的文件。如果列出了您未更改的文件，您需要将它们恢复到原始状态，或确保它们是有意的更改。运行 `git diff` 还可以显示每个文件的更详细的更改。您不应该提交任何您不打算更改的文件。
2. 运行 `git add .` 将所有更改添加到git的暂存区。
3. 运行 `git commit -m [your_commit_message]` 将更改提交到git。`[your_commit_message]` 应替换为描述更改的相关提交信息，避免使用泛泛的陈述。例如，不要说 `Documentation fix 1`，而是说 `为 circle() 函数添加文档示例`。

在进行所有提交时重复上述步骤，同时确保定期运行 `npm test` 来确保一切正常工作。

### 源代码
如果您打算处理源代码，一个好的起点是访问文档。在p5.js文档中，每个记录功能的底部都有一个指向其源代码的链接。

### 单元测试
如果您打算处理单元测试，请参阅[这里](./unit_testing.md)。请注意，对于任何功能增强、新功能和某些错误修复，Pull Request（PR）中应包含覆盖新实现的单元测试。

### 内联文档
如果您打算处理内联文档，请参阅[这里](./inline_documentation.md)。

### 国际化
如果您打算处理p5.js的国际化，请参阅[这里](./internationalization.md)。请注意，这不涉及网站的国际化/翻译，请参阅[网站存储库](https://github.com/processing/p5.js-website)。

### 可访问性
如果您打算处理可访问性功能，请参阅[这里](./web_accessibility.md)。对于友好的错误系统，请参阅[这里](./friendly_error_system.md)。

## 代码规范
p5.js的代码规范由eslint执行。在接受之前，任何git提交和Pull Request都必须通过代码检查。遵循正确的编码规范的最简单方法是在您的文本编辑器中使用可用的eslint插件，并进行代码检查错误的突出显示（大多数常见的文本编辑器都提供此功能）。

## 设计原则
在处理p5.js的任何功能时，牢记p5.js的[设计原则](../design_principles.md)是非常重要的。我们的优先级可能与其他项目的优先级不同，所以如果您来自其他项目，建议您熟悉p5.js的设计原则。

---
# 拉取请求
现在您已经完成了所需的更改，`npm test`没有出现错误，并且您已经提交了更改，您可以开始准备一个拉取请求，将您的新提交合并到官方p5.js存储库中。拉取请求更正式地是一个请求，要求将另一个存储库（在本例中为您的派生p5.js存储库）中的更改拉取或合并到目标存储库（在本例中为官方p5.js存储库）的提交历史中。

## 创建拉取请求
首先，将您的新提交推送到p5.js的派生版本中，将其视为将更改上传到您的派生版本。

```
git push -u origin [分支名称]
```

推送完成后，您可能会在终端中看到一个链接，可以用来打开拉取请求，如果没有，您可以在Web浏览器中导航到您的派生版本，使用文件列表上方的下拉按钮切换到您正在使用的分支，然后点击"Contribute"，然后选择"Open pull request"。

### 拉取请求信息
在提交拉取请求之前，您需要填写拉取请求模板。首先，拉取请求标题应简要描述更改的内容，避免使用泛泛的陈述。

接下来，在模板中有这样一行`解决 #[在这里添加问题编号]`，您应将`[在这里添加问题编号]`替换为您正在解决/修复的问题的问题编号[上面](#关于Issue的一切)（例如`解决 #1234`）。这将确保在合并此拉取请求后自动关闭该问题。如果您不希望在合并此拉取请求后自动关闭问题（可能因为有更多的更改在单独的拉取请求中），将`解决`改为`处理`。

对于“更改”，您应提供对您在此拉取请求中进行的更改的清晰描述。在这里包括任何与审查此拉取请求的人相关的实现细节和决策。

“更改的屏幕截图”根据情况是可选的，当进行与p5.js在画布上呈现可视化内容相关的更改时，应包括此项。请注意，这不是文本编辑器的屏幕截图，而是您在更改后的示例草图的行为的屏幕截图。

“拉取请求清单”包含一些相关的清单项目，您应该用 `[x]` 替换 `[ ]`，以适用于您的更改。

完成后，点击“创建拉取请求”。

### 变基和解决冲突
现在你应该检查已打开的拉取请求，并注意以下几点：

1. 提交的数量应该与你在这个拉取请求上所做的提交次数相匹配，也就是说，如果你在这个拉取请求上提交了两次，"Commits"选项卡中应该只显示两个提交。
2. "Files changed"选项卡应该显示你与 p5.js 仓库的差异，不多不少。
3. 在底部附近，应该显示"This branch has no conflicts with the base branch"而不是"This branch has conflicts that must be resolved"。

如果以上任何一项不正确（提交数量多于预期或存在冲突），你可能需要进行变基或帮助解决冲突。这里的冲突指的是你对文件进行了更改，而这些文件最近也进行了更改，Git 不确定要保留哪组更改或排除哪组更改。如果你不确定如何解决这些问题，请告知管理员，我们将指导你完成这个过程。基本指令如下所示：

1. 运行 `git remote add upstream https://github.com/processing/p5.js`
2. 运行 `git fetch upstream`
3. 运行 `git rebase upstream/main`
4. 你可能会遇到一些冲突！如果只涉及到 `lib/p5.js` 和 `lib/p5.min.js`，很容易解决，只需重新构建项目。如果其他文件存在冲突，且你不确定如何解决...寻求帮助！
```
    npm test
    git add -u
    git rebase --continue
```
5. 运行 `git push`

上述步骤完成后，上面的检查列表可能会清除，如果没有清除，我们将指导你完成任何必要的修复。

## 讨论和修改
现在你的拉取请求已经打开，一个管理员或维护者将会审核你的拉取请求。可能需要几天时间管理员才能回复你的拉取请求，请耐心等待，在此期间你可以看看其他开放的问题！

当管理员审核你的拉取请求后，可能会有两种情况：1. 你的拉取请求被批准并合并，太棒了！2. 管理员可能会就拉取请求提出一些问题或要求做出一些修改。如果是后者，不要惊慌，这是完全正常的，管理员们总是在这里帮助你完成你的贡献！

如果有人要求对您的 PR 进行更改，并且您能够进行这些更改，请按照之前的[相同流程](#git-workflow)继续操作，但是从您本地的存储库和相关分支继续进行。进行所需的更改，将它们提交到 Git 中，并将它们推送到您派生的远程存储库。一旦您将额外的提交推送到派生的远程存储库，您将看到新的提交自动显示在 PR 中。在 PR 中留下评论，让评审人员知道您已经进行了所要求的更改，如果不需要进行其他更改，您的 PR 将被合并！

---