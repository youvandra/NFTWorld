import { prisma } from "../../utils/prisma";

<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler({ params }, res) {
    const { address } = params;
    const user = await prisma.user.findFirst({ where: { address } });
    if (user) return res.status(200).json(user);
    res.status(500).send();
}
=======
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
export default async function handler({ query }, res) {
  const { address } = query;
  console.log(address);
  const user = await prisma.user.findFirst({ where: { address } });
  return res.json(user);
}
<<<<<<< HEAD
>>>>>>> origin/anas-dev
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
