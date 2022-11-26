import axios from "axios";

export async function returnNFTwithMetadata(rawNFT) {
<<<<<<< HEAD
<<<<<<< HEAD
    const { data } = await axios.get(rawNFT.uri);
    return { ...rawNFT, metadata: data };
}
=======
  const { data } = await axios.get(rawNFT.uri);
  return { ...rawNFT, metadata: data };
}
>>>>>>> origin/anas-dev
=======
  const { data } = await axios.get(rawNFT.uri);
  return { ...rawNFT, metadata: data };
}
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
