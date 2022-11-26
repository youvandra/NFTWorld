import {
<<<<<<< HEAD
<<<<<<< HEAD
    Metaplex,
    walletAdapterIdentity,
    mockStorage,
  } from "@metaplex-foundation/js";
  import { MetaplexContext } from "./useMetaplex";
  import { useConnection, useWallet } from "@solana/wallet-adapter-react";
  import { useMemo } from "react";
  
  export default function MetaplexProvider({ children }) {
    const { connection } = useConnection();
    const wallet = useWallet();
  
    const metaplex = useMemo(
      () =>
        connection && wallet
          ? Metaplex.make(connection)
              .use(walletAdapterIdentity(wallet))
              .use(mockStorage())
          : null,
      [(connection, wallet)]
    );
  
    return (
      <MetaplexContext.Provider value={{ metaplex }}>
        {children}
      </MetaplexContext.Provider>
    );
  }
=======
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
  Metaplex,
  walletAdapterIdentity,
  mockStorage,
} from "@metaplex-foundation/js";
import { MetaplexContext } from "./useMetaplex";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";

export default function MetaplexProvider({ children }) {
  const { connection } = useConnection();
  const wallet = useWallet();

  const metaplex = useMemo(
    () =>
      connection && wallet
        ? Metaplex.make(connection)
            .use(walletAdapterIdentity(wallet))
            .use(mockStorage())
        : null,
    [(connection, wallet)]
  );

  return (
    <MetaplexContext.Provider value={{ metaplex }}>
      {children}
    </MetaplexContext.Provider>
  );
}
<<<<<<< HEAD
>>>>>>> origin/anas-dev
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
