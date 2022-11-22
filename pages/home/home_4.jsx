import React, { useState } from "react";
import {
  Auctions_categories,
  Feature_collections,
  NewseLatter,
  Partners,
  Top_collection,
} from "../../components/component";
import Meta from "../../components/Meta";
import Hero_4 from "../../components/hero/hero_4";
import CoverflowCarousel from "../../components/carousel/coverflowCarousel";
import { useMetaplex } from "../../metaplex/useMetaplex";
import { PublicKey } from "@solana/web3.js";
import { useEffect } from "react";
import { useMemo } from "react";
import axios from "axios";
import { AUCTION_HOUSE_ADDRESS } from "../../utils/consts";
import { returnNFTwithMetadata } from "../../utils/returnNFTwithMetadata";

const Home_4 = () => {
  const { metaplex } = useMetaplex();
  const [nfts, setNfts] = useState([]);

  async function getNfts() {
    if (!metaplex) return;
    const auctionHouse = await metaplex.auctionHouse().findByAddress({
      address: new PublicKey(AUCTION_HOUSE_ADDRESS),
    });
    const listings = await metaplex
      .auctionHouse()
      .findListings({ auctionHouse });
    const addresses = listings.map(({ metadataAddress }) => metadataAddress);

    const rawNFTs = await Promise.all(
      addresses.map(
        async (metadata) => await metaplex.nfts().findByMetadata({ metadata })
      )
    );

    const res = await returnNFTwithMetadata(rawNFTs);
    setNfts(res);
  }

  useEffect(() => {
    getNfts();
  }, []);

  return (
    <>
      <Meta title="NFT WORLD" />
      <Hero_4 />
      <CoverflowCarousel />
      <Top_collection />
      <Auctions_categories />
      <NewseLatter bgWhite={true} />
      <Feature_collections />
      <Partners />
    </>
  );
};

export default Home_4;
