<div align="center">
  <h1>前端自动化测试</h1>
  <p>前端自动化测试的实践相关概念的理解，以及测试框架 Jest学习，vue项目，react项目，node应用，e2
  e测试的实践，形成自己的一套的测试代码 </p>
</div>

## 目录

1. [简介](#简介)
2. [学习目标](#学习目标)
2. [相关概念](#相关概念)

## 简介

应用程序测试包括手动测试和自动化测试
- 手动测试：通过测试人员与应用程序的交互来检查其是否正常工作。
- 自动化测试：编写应用程序来替代人工检验。

相关的优缺点一目了然

> 除了代码测试时的编写，还要注意一下的问题：
>
>- 如何进行前端应用测试？
>- 应用程序中哪些部分应该被优先测试？
>- 这些部分应该使用什么方法进行测试？
>- 一些特殊场景下的测试问题该怎么解决？
>- 我们如何从一开始就整合不同的测试技巧，编制一个高效的测试套件？

### 测试分类

前端开发最常见的测试主要是以下几种：

- 单元测试：验证独立的单元是否正常工作

  单元测试是对应用程序最小的部分（单元）运行测试的过程。通常，测试的单元是**函数**，但在前端应用中，**组件也是被测单元**

  > 一方面单元测试可以减少调试的时间，快速调试，便利于代码重构模块化设计，提高代码测试覆盖率
  >
  > 但是另一方面每一个模块的单元都是独立于整体的，一个单元是正确的，结合起来或许无法保证是否正确

  **常见的js单元测试框架**
  - Jest
  - Mocha
  - Jasmine
  - Karma
  - ava
  - Tape

  其实Mocha和Jest是目前使用受众最好的，基本上前端单元测试都是从两者选其一，两者的关系大致可以理解为，Mocha是Jest的子集

  `Jest === Mocha + Chai + Sinon + mockserver + istanbul`
---

- 集成测试：验证多个单元协同工作

  人们定义集成测试的方式并不相同，尤其是对于前端。有些人认为在浏览器环境上运行的测试是集成测试；有些人认为对具有模块依赖性的单元进行的任何测试都是集成测试；也有些人认为任何完全渲染的组件测试都是集成测试。

  > 一方面是从用户使用的角度出发，更能获得软件使用过程中的正确性，其相对是一个软件的说明文档，更快的可以重构，开发速度更快
  >
  > 但是测试失败无法快速定位到位置，覆盖率比较低，比单元测试要慢

---

- 端到端测试：从用户角度以机器的方式在真实浏览器环境验证应用交互

  端到端测试可以从用户的视角通过浏览器自动检查应用程序是否正常工作

  比如，你想测试一个计算器功能，就使用相应的测试，在真实的环境中触发相应的事件

  编写完一个端到端测试后，可以根据自己的需求随时运行它。想象一下，相比执行数百次同样的手动测试，这样一套测试代码可以节省多少时间！

  但是，端到端测试的运行时间不够快，调试起来比较困难

  一些流行的端到端测试框架：
  - Cypress
  - Nightwatch
  - WebdriverIO
  - playwright
---

- 快照测试：验证程序的 UI 变化

  快照测试类似于“找不同”游戏。快照测试会给运行中的应用程序拍一张图片，并将其与以前保存的图片进行比较。如果图像不同，则测试失败。这种测试方法对确保应用程序代码变更后是否仍然可以正确渲染很有帮助。

我到底该写哪种测试？都写，根据情况灵活分配，测试是需要分层的

从应用的开始到结束单元测试、集成测试、UI 测试（测试过程中单元测试占据大多数，UI测试写的数量最少，因为单元测试成本比较小，UI测试成本比较高）

x

## 学习目标

[ ] 代码测试相关概念的了解

[ ] jest基础api的使用

[ ] vue项目应用自动化测试

[ ] react项目应用自动化测试

[ ] node项目应用自动化测试

[ ] E2E应用自动化测试

## 相关概念

### 奖杯模型

奖杯模型中自下而上分为静态测试、单元测试、集成测试、e2e 测试

**测试职责**
- 静态测试：在**编写代码逻辑阶段时进行报错提示**。(代表库: ESLint、Flow、TypeScript)
- 单元测试：在奖杯模型中, 单元测试的职责是**对一些边界情况或者特定的算法进行测试**。(代表库: Jest、Mocha)
- 集成测试：模**拟用户的行为进行测试，对网络请求、获取数据库的数据等依赖第三方环境的行为进行 Mock**。（代表库: Jest、react-testing-library、Vue Testing Library 等）
- e2e 测试：**模拟用户在真实环境上操作**行为（包括网络请求、获取数据库数据等）的测试。（代表库: Cypress）

为了维持奖杯模型的形状，一个健康、快速、可维护的测试组合应该是这样的：

- **在底层为应用配置静态测试**，比如使用 ESLint 约束代码规范、使用 TypeScript 增强类型定义
- 为**应用中的特定算法或是工具函数编写小而快的单元测试**
- 写许多模拟真实用户行为的集成测试，增强应用构建信心
- **为稳定的组件编写快照测试**
- 为应用**核心业务**流程编写少量的高层次端到端测试


**测试建议：**

- 开发纯函数库，建议写更多的单元测试 + 少量的集成测试
- 开发组件库，建议写更多的单元测试、为每个组件编写快照测试、写少量的集成测试 + 端到端测试
- 开发业务系统，建议写更多的集成测试、为工具类库、算法写单元测试、写少量的端到端测试

### 代码覆盖率



## 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `build` 对构建系统或者外部依赖项进行了修改
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中


**参考链接**

[语雀-前端测试](https://www.yuque.com/lipengzhou/frontend-testing)