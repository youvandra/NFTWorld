import { prisma } from "../../utils/prisma";

export default async function handler({ query }, res) {
  const { address } = query;
  console.log(address);
  const user = await prisma.user
    .create({
      create: { address, name: address },
      update: {},
      where: { address },
    })
    .finally(() => {
      res.status(200).send();
    });
}
