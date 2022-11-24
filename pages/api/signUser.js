import { prisma } from "../../utils/prisma";

export default async function handler({ query }, res) {
    const { address } = query;
    await prisma.user
        .create({
            data: { address, name: "unnamed user" },
        })
        .finally(() => {
            res.status(200).send();
        });
}