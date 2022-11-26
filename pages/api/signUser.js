import { prisma } from "../../utils/prisma";

export default async function handler({ query }, res) {
<<<<<<< HEAD
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
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
  const { address } = query;
  await prisma.user
    .create({
      data: { address, name: "unnamed user" },
    })
    .finally(() => {
      res.status(200).send();
    });
}
<<<<<<< HEAD
>>>>>>> origin/anas-dev
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
