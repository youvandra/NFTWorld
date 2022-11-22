import axios from "axios";

export async function returnNFTwithMetadata(rawNFTs = []) {
  return await Promise.all(
    rawNFTs.map(async (rawNFT) => {
      const { data } = await axios.get(rawNFT.uri);
      return { ...rawNFT, metadata: data };
    })
  );
}
