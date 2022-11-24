import { PublicKey } from "@metaplex-foundation/js";
import { useMetaplex } from "./useMetaplex";
import { AUCTION_HOUSE_ADDRESS } from "../utils/consts";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { returnNFTwithMetadata } from "../utils/returnNFTwithMetadata";

export function useAuctionHouse() {
  const { metaplex } = useMetaplex();

  async function getAuctionHouse() {
    return await metaplex
      .auctionHouse()
      .findByAddress({ address: new PublicKey(AUCTION_HOUSE_ADDRESS) });
  }

  async function getListings({ seller } = { seller: undefined }) {
    const auctionHouse = await getAuctionHouse();
    const rawListings = await metaplex
      .auctionHouse()
      .findListings({ auctionHouse, seller });

    const formatedRawListings = rawListings.map(
      ({ sellerAddress, price, metadataAddress }) => ({
        price: price.basisPoints.toNumber() / LAMPORTS_PER_SOL,
        sellerAddress,
        metadataAddress,
      })
    );

    const listing = await Promise.all(
      formatedRawListings.map(async ({ metadataAddress, ...data }) => {
        const rawNFTS = await metaplex
          .nfts()
          .findByMetadata({ metadata: metadataAddress });
        const nfts = await returnNFTwithMetadata(rawNFTS);
        return { ...nfts, ...data };
      })
    );

    console.log(listing);
    return listing;
  }

  return { getAuctionHouse, getListings };
}