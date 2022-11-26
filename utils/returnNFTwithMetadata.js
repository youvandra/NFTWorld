import axios from "axios";

export async function returnNFTwithMetadata(rawNFT) {
<<<<<<< HEAD
    const { data } = await axios.get(rawNFT.uri);
    return { ...rawNFT, metadata: data };
}
=======
  const { data } = await axios.get(rawNFT.uri);
  return { ...rawNFT, metadata: data };
}
>>>>>>> origin/anas-dev
