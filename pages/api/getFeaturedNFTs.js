import { prisma } from "../../utils/prisma";

export default async function handler(_req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
    const nfts = await prisma.featuredNFT.findMany({
        include: { creator: true },
    });
    if (nfts) return res.status(200).json(nfts);

    return res.status(500);
}
=======
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
  const nfts = await prisma.featuredNFT.findMany({
    include: { creator: true },
  });
  if (nfts) return res.status(200).json(nfts);

  return res.status(500);
}
<<<<<<< HEAD
>>>>>>> origin/anas-dev
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
