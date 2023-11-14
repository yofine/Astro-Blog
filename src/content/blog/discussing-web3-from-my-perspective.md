---
author: Yofine liu
pubDatetime: 2022-04-19T12:32:00Z
title: 聊聊我眼中的 Web3
postSlug: discussing-web3-from-my-perspective
featured: false
draft: false
tags:
  - web3
description: 其实我在年前才接触到这个概念，在朋友圈偶然瞥到这个词，好奇心驱使我去调研了一下，像大部分新手一样，安装 MetaMask 钱包，试用 Mirror，注册 ENS，加入了大量了 Discord 频道，还在 BuildSpace 上完成了几个 Tutorial，总算是形成了一些初步的认知，我觉得是时候把我理解的关于 Web3 的事情写出来了。
---

其实我在年前才接触到这个概念，在朋友圈偶然瞥到这个词，好奇心驱使我去调研了一下，像大部分新手一样，安装 MetaMask 钱包，试用 Mirror，注册 ENS，加入了大量了 Discord 频道，还在 BuildSpace 上完成了几个 Tutorial，总算是形成了一些初步的认知，我觉得是时候把我理解的关于 Web3 的事情写出来了。

## 什么是 Web3？

一开始，我觉得这是一个非常抽象的概念，什么叫做数据资产所有权？Web3 会什么会跟加密货币有联系？去中心化？与 NFT 的关系是什么？，看到 Mirror 之后，我突然有点理解了：

- 全网通用账号：你不需要注册一个 Mirror 账号，通过加密钱包 Connect 即可使用;
- 数据资产归用户所有：你生产的内容存储在区块链上，不归属于平台方;
- 去中心化的盈利模式：你可以通过将文章 Mint 成 NFT，读者或粉丝可以通过 Collect 这个 NFT 的方式进行打赏，并且打赏不需要和平台方进行分成。

通用账号与 Google 账号登录或者手机注册不同，后者是通过 OAuth 等授权机制或者手机这种唯一 ID 在某个平台进行注册，记录你的用户数据，而通用账号是你注册一次（加密钱包），然后在所有 Dapp （去中心化应用）上通用，而不再有注册过程，所有的登录鉴权和交易都是通过钱包地址验证

![Mirror](https://imgs.zhubai.love/2c7a275bda5e43db950e4ee3cddd74f4.png)

数据资产，我在微信账号中的数据、在 Bilibili 上传的整活视频、在原神里抽的角色，虽然我直接或间接的为这份数据付出的成本，但所有权是属于平台的，本质上我们是在租用；在 Web3 的世界，你获取的数据资产，一直都是归你所有（当然被钓鱼除外，比如最近周杰伦的猴子就被偷了）

![Jay](https://imgs.zhubai.love/4dc986c4aff241d291e243d697f37955.png)

去中心化的盈利模式，创作者在 Mirror 上写的文章，以 NFT 的形式供读者 Mint，直接或者创作收益，同时可以自己维护粉丝社群，而不再依赖平台，同时粉丝也不是一味的付出，有机会随着偶像的成长获得实质回报，偶像名气逐渐增长，他发行的 NFT 的价格可能也会水涨船高，跟我们通过买股票投资公司类似。

![Guoyu](https://imgs.zhubai.love/10ca14a8bf6c4b009b0cf5430ecec15e.png)

当然，Web3 的定义和用途远不止于此，感兴趣的话可以读一下 [WEB2 VS WEB3](https://ethereum.org/en/developers/docs/web2-vs-web3/) 和 [What Is Web3](https://yofine.zhubai.love/posts/oursera.org/specializations/english-interview-resume)，这两篇文章对 Web3 有更详实的定义。

## 技术视角的Web3

作为 Web 开发者，我想大家对 Web1 和 Web2 的区别了如指掌，Gmail 与 AJAX 的故事也都耳熟能详，那 Web3 从技术角度又有那些变化呢？

令人稍有意外的是，Web3 的变化其实与 Web 技术自身无关，更像是由加密行业的发展，推动了 Web 领域在概念层面的一次的升级，原本我们设想的 Web3，可能像 AJAX 一样，是 Web 技术自身的一次进化，比如将互联网转化为数据库、向人工智能进化、向 3D 和全影像网络的进化等等，乍看之下是否有种鸠占鹊巢的感觉，但其实这并不重要，不管是 Web2 还是 Web3 都是由现实世界的需要，催生出来的概念，就像我们现在并不关心 H5 指代的是 Web App 还是 HTML5 一样，不过是一个名字，我个人一直信奉的观点：技术不是变革的原点，而是变革的产物。

[The Architecture of a Web 3.0 application](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) 这篇文章中的两张图对比了 Web2 与 Web3 在架构上的区别：

![Web2 Arch](https://imgs.zhubai.love/00f1ff6a7432430c99d57a3be655062b.png)

![Web3 Arch](https://imgs.zhubai.love/6519fd1c4ff54b069cd5e2fdf8238464.png)

与 Web2 应用不同，Web3 的应用也就是 [Dapp](https://ethereum.org/en/developers/docs/evm/#top)（decentralized application），运行在一个由全球运行以太坊客户端的计算机共同维护的分布式状态机（[EVM](https://ethereum.org/en/developers/docs/evm/#top)）上，开发者通过编写 [Smart Contract](https://ethereum.org/en/developers/docs/smart-contracts/) 来实现业务逻辑，简单类比的话，有点像使用 FaaS 的感觉，开发过程就是编写合约、部署合约、调用合约，从概念上来看，这更接近我最开始理解的云计算，而不是现在这样，在云厂商的机房里租用一台 虚拟机。

关于这个部分，其实有很多东西可以讲，包括智能合约、生态工具、前端调用等等，上边那张架构图也是便于理解的最简版本，鉴于本文是个开篇就不展开了，具体内容我会在后续文章深入介绍。

## 在 Web3 世界开发一款产品

拿 [Thirdweb](https://thirdweb.com) 举例，它是一个 Web3 App 开发平台，提供各种 SDK，同时也采用了比较 Web3 的方式在运营，在内测阶段通过免费 Mint 的 Early Access NFT 来吸引用户，除了象征意义以外，也作为使用该产品的凭证，在其站点上连接钱包，判断用户是否持有该 NFT 来开放试用，之后将用户导流到 Discord 进行试用反馈和交流，根据试用的时间和反馈的共享等条件，进一步发放更高等级的 NFT，甚至吸收一些人进入核心团队，后期也可能会发布代币，通过参与者的贡献度进行空投，为早期用户带来直接收益。

![Thirdweb NFT](https://imgs.zhubai.love/7ab23abe4d874e969901cc40e534f3f2.png)

这种机制对于开发团队和用户都是一件好事，开发团队可以通过类似期权的方式，在产品更早期收到试用反馈，同时节省一笔推广费用，对于用户来讲，试用产品付出的劳动可能会带来直接收益，通过这种方式，开发团队和用户多了一层合作伙伴的关系。

还有些产品直接采用了 [DAO(Decentralized Autonomous Organization)](https://ethereum.org/en/dao/#main-content)的模式，比如 Mirror，我们可以在 [Dework](https://app.dework.xyz/) 看到很多 DAO 在运作。

## 对 Web3 的质疑

Web3 作为一个新生事物，不可避免的遭到了各种各样的挑战，讨论度比较高的主要有这么两点：

- 对基础设施的质疑，以这篇 [The Web3 Fraud](https://www.usenix.org/publications/loginonline/web3-fraud) 为例，我在读文笔记中表达了个人的理解
- 对 Web3 去中心化理念的质疑，主要来自 [My first impressions of web3](https://moxie.org/2022/01/07/web3-first-impressions.html?continueFlag=bfad8aef2f2b537615f634a87deb0d67)，作者通过一个小实验，证明全球最大的 NFT 交易市场 OpenSea 并不是去中心化的，OpenSea 可以下架你拥有的 NFT，虽然它还存储在区块链上，但这与去中心化的思想是相悖的，同时引出了一些论述，主要表达 Web3 并不能普及到普通用用户，具体的可以直接看[这篇博文](https://m.weibo.cn/status/L9Qq7qGfn?jumpfrom=weibocom)。

我从第二点引申出了另外两个问题：

- Web2.5 的状态会持续多久？
- 去中心化的服务是否最终会滑向中心化？

恰好前段时间在一场 Twitter Space 上讨论了这两个问题，综合讨论的结论谈下我目前的观点。

Web2.5 可能会持续相当长的时间，或者说 Web3 本来就不是为了取代 Web2 存在的，就像现在已经 2022 年，依然有大量的可以定义为 Web1 的站点存在，除了新技术本身需要的传播时间以外，主要还是因为面向不同的用户和场景需要合适的技术手段，一个 Web3 应用也不是意味着方方面面都要去中心化，而是去解决它擅长的问题，最终可能会是以一个连续的过渡光谱存在。

关于去中心化服务向中心化滑落，主要原因在于目前 Web3 基础设施问题，比如性能和成本，一方面可以随着技术的不断成熟解决，另一方面是意识和取舍的问题，类似个人隐私，在一些时期和地区，普通用户是不在乎自己隐私的，甚至会为了效率主动放弃隐私，但随着发展，人们逐渐意识到一些东西比效率更重要，就开始出台法律法规限制隐私收集。

总的来说，Web3 并不是一个挑战者，要取代 Web2，而是提出了一种为了解决某种特定问题的方案，或许是某些过度的宣传营销导致的误会。

## 我的观点

对我而言，Web3 是一项新的技术或者理念，它是由某些切实需求孕育出来，但并不能解决所有问题，同时存在一些早期技术都需要面对的问题，我唯一要说的是，对新生事物保持敬畏与好奇，Stay Hungry Stay Foolish。

本文是我现阶段对 Web3 的理解，可能存在一些认知错误或者主观看法，欢迎看到这篇文章的人纠正与讨论。

参考文章:

- [The Architecture of a Web 3.0 application](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application)
- [My first impressions of web3](https://moxie.org/2022/01/07/web3-first-impressions.html?continueFlag=bfad8aef2f2b537615f634a87deb0d67)
- [What Is Web3?](https://www.gartner.com/en/articles/what-is-web3)
- [WEB2 VS WEB3](https://ethereum.org/en/developers/docs/web2-vs-web3/)
- [走进 Web3](https://www.bmpi.dev/dev/glimpse-of-web3/)
- [web3数据市场展望](https://mirror.xyz/jojonas1.eth/C1XwiABsyQ5-AKUCJVa4PyuEOwPe8hX-hsVXAqZfSJ4)
