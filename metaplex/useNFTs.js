import { PublicKey } from "@metaplex-foundation/js";
import { useMetaplex } from "./useMetaplex";

import { returnNFTsWithMetadata } from "../utils/returnNFTsWithMetadata";

export function useNFTs() {
  const { metaplex } = useMetaplex();

  async function getNFTsByOwner(address) {
    const owner = new PublicKey(address);
    const rawNFTs = await metaplex.nfts().findAllByOwner({ owner });
    const formatedNFTs = await returnNFTsWithMetadata(rawNFTs);
    return formatedNFTs;
  }

  async function getNFTsByCreator(address) {
    const creator = new PublicKey(address);
    const rawNFTs = await metaplex.nfts().findAllByCreator({ creator });
    const formatedNFTs = await returnNFTsWithMetadata(rawNFTs);
    return formatedNFTs;
  }

  return { getNFTsByOwner, getNFTsByCreator };
}
