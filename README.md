# 🐬 Dolphin: Attestation marketplace built on the Polkadot ecosystem
Introducing Dolphin, a marketplace for attestations, flourishing within the vibrant Polkadot ecosystem. At its core, attestations are essentially claims about something or someone, typically verified by another party. This concept isn't new; it dates back to ancient times, from the cylinder seals on Mesopotamian buildings to the driver's license you flash at a bar. They've always been a cornerstone of trust in society. Take the "Fair Trade Certified" label on coffee beans, for instance. It reassures you, sitting in the UK, about the ethical treatment of workers and environmental practices of coffee bean farmers in Brazil, without you needing to meet them. This is possible thanks to a network of reliable organizations, like Fairtrade International, vouching for these claims.

In the world of blockchain, attestations breathe life into digital identities by attaching verified claims to digital addresses. This is crucial because the strength and reliability of these attestations can significantly influence our interactions and trust in digital and physical products alike.

## We now have a good attestation standard, but there is no attestation marketplace
Despite having a solid standard for attestations, there's a gaping hole in the market. Blockchain's ecosystem has been crawling in terms of growth, mainly due to the lack of a comprehensive marketplace for attestations. Even with platforms like KILT and AlphaWallet pioneering the use of attestations for crafting digital identities, the full potential of attestations in the blockchain realm remains untapped. 

## Creating a trustless digital twin of reality
The current state of RWA tokenization is binary—either something is tokenized or it's not. What's more, the process is plagued with centralization issues, not to mention being slow, costly, and bound by vendor restrictions
But, there's light at the end of the tunnel. We've engineered an alternative path that's entirely permissionless, offering unmatched detail and flexibility. Imagine starting from scratch, claiming an NFT symbolizes a real-world asset, and gradually (or quickly) gathering support by linking various attestations to this NFT. The credibility of these attestations isn't just taken at face value; it's meticulously assessed through a sophisticated social graph that leverages Pagerank and individual biases.

## What we have built
Here's the scoop on what we've meticulously crafted:
* A bespoke attestation service within the Polkadot ecosystem, hosted on Moonbeam. Users can now craft schemas for different types of attestations and make these claims on-chain about any subject across all appchains. Moreover, users can create what we call "Attestation Recipes" to paint a fuller picture of any subject.
* A permissionless marketplace for attestations. Here, you can peruse attestations on any subject, like an NFT collection, without any barriers. Whether you're looking to request or offer attestations, the marketplace is your oyster.
* A social graph, representing the network of attestation, (nodes => attestors, edges => attestations), with a PageRank algorithm to calculate aggregate reputation of attestors. The graph is also seeded with data from Harpie.io as reputation anchors.
* A graph server that can be used to update graph/recalculate score and API to retrieve scores.
