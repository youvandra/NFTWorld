import { prisma } from "../../utils/prisma";

export default async function handler({ params }, res) {
  const { address } = params;
  const user = await prisma.user.findFirst({ where: { address } });
  if (user) return res.status(200).json(user);
  res.status(500).send();
}
