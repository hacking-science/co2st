---
title: "Why I’m betting on Blockstack to save the decentralized internet"
image: "img/home/slow-down.jpg"
author: "Author"
summary: "Which platform will prevail? Well, remember the last time you had to buy a new phone and had to choose between Apple or Android?"
---

In my [previous post](mainstream-dapps), I argued that for cryptocurrencies to acquire real, unquestionable value, the crypto space needs entrepreneurs with novel dApp ideas (not just copycat dApp ideas) to incentivize the mainstream usage of these digital currencies. I ended by saying that the technology that makes it easier for developers with fresh ideas to enter the space and start experimenting with dApps, will have the biggest impact moving forward. What I didn’t say (because the topic deserved a post of its own), is that the general technology that is going to make this happen is already evident: the same way MacOS and Android facilitated the creation and usage of native applications, there will be dominant platforms that facilitate the creation and usage of dApps and make them native to the existing internet.
In fact, the competition between these decentralized platforms has already begun. Toshi and Status, for example, both released a mobile application enabling users to connect to the Ethereum ecosystem; and Blockstack released a cryptocurrency-independent web application enabling users to connect to the Blockstack ecosystem.

!['hello'](/img/articles/0118/coin-trick.jpg)
*photo*

Which platform will prevail? Well, remember the last time you had to buy a new phone and had to choose between Apple or Android? As you can gather from your experience, the app ecosystem plays a big factor. The same will be true for dApp platforms. And since these platforms are still in their early stages, their success depends on developers. From their perspective, based on the choice of platforms listed above, the crux of the decision is between building an Ethereum dApp or a Blockstack dApp. So for the rest of this post, first, I’ll explain the technical differences between these two options and then tell you why I’m betting on Blockstack.

## Ethereum dApp versus Blockstack dApp

First, we have to understand the general design differences between Ethereum and Blockstack. Ethereum is both a digital currency (like Bitcoin) and an application platform — its blockchain implementation allows you to store both transaction data and application logic, or “smart contracts,” in the blockchain. Blockstack, on the other hand, is an application platform, but not a digital currency–its blockchain implementation is an overlayer, or “virtualchain,” of existing cryptocurrency blockchains. Thus, while both Ethereum and Blockstack can run application level logic, Ethereum runs it inside its underlying blockchain via smart contracts, whereas Blockstack runs it outside of its underlying blockchain via a set of predefined operations in its virtualchain.

Next, we can analyze the implication these design differences have for dApps. We’ll touch upon three concerns: the security risks of running untrusted code, the scalability bottlenecks of decentralized blockchain networks, and the level of resilience inherent in the application platform.

**Concern #1: running untrusted code**

The ultimate goal of blockchains is to allow the exchange of valuable, scarce data — i.e. digital property — without the need for a third party to oversee each transaction. This only works, however, if you can effectively prevent malicious parties or accidental bugs from tampering with the system. And the main way this vulnerability is exploited is via untrusted, third party code.

There are two main factors that determine the risk of running untrusted code: first, the completeness of the scripting language, second, the location where code is executed.

Ethereum allows for a turing-complete language, which means its developers are able to write contracts with a language capable of expressing all tasks accomplishable by computers (compare that to Bitcoin whose scripting language is more adequately compared with the capabilities of a spreadsheet); furthermore, Ethereum executes this code within its blockchain. In essence: untrusted third parties are equipped with an expressive language they could use to directly manipulate the underlying blockchain. Ethereum guards against this security concern via other measures, such as transaction fees that limit the execution time of contracts, but the inherent, possibly uncaught vulnerabilities exposed by its design still remain.

Blockstack, on the other hand, humbly takes a less ambitious approach: it only exposes a predefined set of operations that are vetted and executed by its virtualchain. Only after being safely executed is the resulting transaction data stored in the underlying blockchain.

**Concern #2: scaling decentralized blockchain networks**

Blockchain protocols have a challenging limitation: every fully participating member in the network must process every transaction. Due to this, as a blockchain grows, it becomes more expensive, both in terms of time and money, to handle more transactions. So if you want your dApp’s transactions to remain fast and cheap, the scalability of the platform has to be a top concern.

There are two main ways to think about the blockchain scalability: on-chain scalability (inside of the blockchain) and off-chain scalability (outside of the blockchain). In a traditional, centralized database system, this difference would be trivial — as transactions increase, you can just invest in more servers for more computing power. But in a decentralized blockchain, you have little control over the computing power of fully-participating peers in the network, yet you still need to ensure a diverse majority of them can process each block to prevent the centralization of power. The seemingly unavoidable trade-off between low transaction throughput and a high degree of centralization is what makes on-chain scalability difficult for blockchain systems.

The safe bet is to circumvent the problem by making minimal usage of the blockchain. This is the path Blockstack takes–the only data stored inside its underlying blockchain are critical data bindings. This provides a shared source of truth, i.e. to verify who owns what, while allowing all other computation and storage to be handled by already proven internet infrastructure. For example, for application storage, Blockstack allows users to configure multiple storage providers, such as Dropbox and IPFS, where data is encrypted and backed up.
Ethereum, on the other hand, makes heavy usage of the blockchain — all transaction data and smart contracts are stored inside its blockchain. Due to this, scalability issues need to be handled there as well, which makes scalability extremely challenging. In order to scale, Ethereum developers are going to have to overcome on-chain scaling difficulties that distributed systems researches have been wrestling with for decades.

**Concern #3: the resilience of the application platform**

Since the outcome of any single cryptocurrencies is still largely uncertain, you ideally want to pick the application platform that will be the most resilient to any blockchain failure. For example, if a hard-fork or 51% attack is performed on the dApp platform’s underlying blockchain — how quickly will it be able to recover, if at all?
Ethereum developers are betting on the resilience of the Ethereum blockchain. As explained above, due to Ethereum’s ambitious design decisions, it has a larger surface area for attacks. This is especially alarming because blockchains by design are intrinsically irreversible. If a hacker discovers a flaw in Ethereum or in a deployed smart contract, they are free to attack it as long and hard as they can. Past attacks have demonstrated how limited defenses are: perform a community-splitting fork to freeze the funds (as done in the DAO attack) or, if the theft can’t be reversed, hack the remaining vulnerable contracts before the attacker does (as done in the $31M Parity multisig wallet hack). And, since protocol changes require the majority agreement of all miners, any fixes post-attack happen slowly and end up being disruptive to the ecosystem.

Meanwhile, Blockstack developers are betting on the resilience of Blockstack’s virtualchain which can operate on any blockchain — if the blockchain of their chosen digital currency becomes unsafe, they can migrate. In fact, Blockstack has already proven their ability to outlive their underlying blockchain: it successfully migrated from Namecoin to Bitcoin, when they discovered a single miner had more than 65% computing power. Since then, Blockstack has resolved to always operate on the most stable and safe digital currency, which so far has continued to be Bitcoin. (In the future, Blockstack plans to support multiple digital currencies and enable operations across them, but we’ll leave that aside for now.) Furthermore, as a layer 2 protocol, Blockstack can deploy changes to their platform independently of the underlying blockchain. So if any vulnerabilities are discovered, Blockstack can react faster to patch things up.

## Why I’m betting on Blockstack

DApp platforms are in their early stages. The advantages Ethereum dApps have right now are Ethereum’s market value and dApp ecosystem. But both Ethereum and Blockstack dApps are yet to be truly tested at large scale. Only time will tell what will happen but what’s evident right now is that their implementations stand in stark contrast to each other.
Here’s why I’m betting on Blockstack: they have an incredibly talented and visionary team that is willing to go against the grain to make smart, future-oriented technical decisions. On top of that, their stack single handedly handles core blockchain services — authentication, storage, and payments — for developers. So while Ethereum devs must learn how to properly program smart contracts, all Blockstack devs have to do is query the right API methods. As an application platform that is blockchain-agnostic, off-chain scalable, and dev-friendly, Blockstack is the long-term winner in my eyes.
