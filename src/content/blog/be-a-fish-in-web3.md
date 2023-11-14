---
author: Yofine liu
pubDatetime: 2022-01-12T10:25:54.547Z
title: Web3 被钓鱼初体验
postSlug: be-a-fish-in-web3
featured: true
tags:
  - web3
description: "分享 Web3 萌新首次步入钓鱼陷阱的故事"
---

事情发生在前几天的一个晚上，吃完晚饭刷刷推，偶然看到有人转发 09 成为 XRC OG 的事，然后最近确实频繁看到冷兔 NFT 的消息，于是就好奇点推文 discord 地址加入了进去，刚进去的时候突然有个显示为 X Rabbits Club 的账号 DM 我，而且当时显示同在 XRC 服务器。

![](https://res.craft.do/user/full/ac8d21f0-9df9-6dbc-c2a7-1b29d885fc1a/doc/4DF44A88-77AB-48B9-A5A2-6D874F81C55C/EC5E75E4-9BA6-48CC-A164-5903AE3D996E_2/GCU7MeuRT6XLdJ592AVWgorVaAyEBx243tuW5jCSVxwz/Image.png)

![](https://res.craft.do/user/full/ac8d21f0-9df9-6dbc-c2a7-1b29d885fc1a/doc/4DF44A88-77AB-48B9-A5A2-6D874F81C55C/313B85C6-4417-490F-9570-D657CB6C1CD3_2/CavrkqyYZxsqbkPOWWxx0cmaI0dPLwRyUkvuBv6BD9oz/Image.png)

同时发来的还有了 Mint 链接之类的，当时大脑宕机没细想就点了进去，发现 Mint 价格还可以，完全没意识到自己正在一步步走入陷阱。

![](https://res.craft.do/user/full/ac8d21f0-9df9-6dbc-c2a7-1b29d885fc1a/doc/4DF44A88-77AB-48B9-A5A2-6D874F81C55C/86F586E9-761A-445A-A5F3-8CCAA7DFDD0B_2/d1LwevUEjgKtzby6lWC5e8EVREy1VyQ99VWybyXwMpoz/Image.png)

而且当时的 gas 也比较便宜，而且便宜的有些异常，不过当时的我有些上头直接就 Mint 了一个，也为后来受骗埋下了伏笔。Mint 之后下意识去 MetaMask 和 OpenSea 查看发现没有收到 NFT，然后就去了 XRC 的推特 Profile ，结果发现置顶的一条就是 Scammer Alert。

![](https://res.craft.do/user/full/ac8d21f0-9df9-6dbc-c2a7-1b29d885fc1a/doc/4DF44A88-77AB-48B9-A5A2-6D874F81C55C/D5B5B902-B8FD-4E93-9C75-C4C35C0E5A30_2/SVYd4sPNkn2cNoyOxSjVs2BMIfj8ptJxr346QjsxrRQz/Image.png)

这才猛然发现自己中招了，突然开始意识到刚才的异常，这么火的项目为什么这么简单就能 Mint，极低的 gas 费等等，而且当时用的手机，Mint 页的很多细节也发现不了，翻了下那条推发现也有其他人中招，有人甚至 mint 了 8 个 。

之后我开始反思，为什么被这么简单地钓鱼给骗到了，大概有这么几点：

- 首先是贪婪心态作祟，看最近 NFT 涨势凶猛，也幻想着赚一笔，然后突然看到一个机会 Mint 一个比较火的项目，同时价格还挺便宜，大脑放弃了思考。
- 没有事先去了解冷兔，哪怕之前打开过一次冷兔主页，可能也就看到了那条 Scammer Alert。
- 骗子 DM 的时间非常精准，正好是在我刚加入 XRC 频道但还没 verify 的时候。
- 刚进到这个行业，经验和见识非常少，缺乏基本的安全意识。

反思过后心中也释然了，毕竟是自己贪心加粗心，花了 0.08 eth 买个教训吧，然后就对那个钓鱼站点好奇了起来，回到家开始端详起那个地址 https://xrabbitsclub.sale，一个极其简陋的页面，在我看的时候甚至连核心代码都没压缩过，然后发现了资金的目标地址

![](https://res.craft.do/user/full/ac8d21f0-9df9-6dbc-c2a7-1b29d885fc1a/doc/4DF44A88-77AB-48B9-A5A2-6D874F81C55C/AA7BDE69-8A6D-435F-AB87-43969FD14E53_2/wydrGUYhWZUuvWkluvnMlTf8xm2MkOx5l5vLe6o0H6kz/Image.png)

从转入的 eth 数额来看，都是来自那个钓鱼页面，到写这篇文章的时间这个地址已经收到了 15 eth，同时现在钓鱼站点换了另一个地址。

![](https://res.craft.do/user/full/ac8d21f0-9df9-6dbc-c2a7-1b29d885fc1a/doc/4DF44A88-77AB-48B9-A5A2-6D874F81C55C/E5F6DD13-1210-475A-9E7E-21B723816580_2/1Wdf0fwgE76IGMFvRKTdQaF91eXGmWqjjSDx1rbn4rwz/Image.png)

也有了 12 eth 的收入，而且两小时前还在有人受骗，令人不禁感叹，币圈赚钱确实太容易了，几天的时间用一个简陋的页面就能赚到几十万的收入，而且貌似拿它没有什么办法。

总的来说，吃一堑长一智吧，下次交易的时候是不是要 review 下页面代码了。
