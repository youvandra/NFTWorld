import { prisma } from "../../utils/prisma";

export default async function handler({ query }, res) {
<<<<<<< HEAD
    const { address } = query;
    await prisma.user
        .create({
            data: { address, name: "unnamed user" },
        })
        .finally(() => {
            res.status(200).send();
        });
}
=======
  const { address } = query;
  await prisma.user
    .create({
      data: { address, name: "unnamed user" },
    })
    .finally(() => {
      res.status(200).send();
    });
}
>>>>>>> origin/anas-dev
