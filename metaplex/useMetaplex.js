import { keypairIdentity, Metaplex } from "@metaplex-foundation/js";
import { createContext, useContext } from "react";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const wallet = Keypair.generate();
const DEFAULT_CONTEXT = {
  metaplex: Metaplex.make(connection).use(keypairIdentity(wallet)),
};

export const MetaplexContext = createContext(DEFAULT_CONTEXT);

export function useMetaplex() {
  return useContext(MetaplexContext);
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/anas-dev
=======
}
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
