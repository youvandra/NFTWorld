import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext";
import { useEffect, useRef } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
<<<<<<< HEAD
<<<<<<< HEAD
import { ConnectionProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import MetaplexProvider from '../metaplex/MetaPlexProvider';
=======
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import MetaplexProvider from "../metaplex/MetaPlexProvider";
>>>>>>> origin/anas-dev
=======
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import MetaplexProvider from "../metaplex/MetaPlexProvider";
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
require("@solana/wallet-adapter-react-ui/styles.css");
// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
const desiredNetwork = "devnet";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });
  const wallet = useWallet();

  useEffect(() => {
    // if (pid === '/home/home_8') {
    // 	const html = document.querySelector('html');
    // 	html.classList.remove('light');
    // 	html.classList.add('dark');
    // }
  }, []);

  return (
    <>
      <Meta title="NFT WORLD" />

<<<<<<< HEAD
<<<<<<< HEAD
			<Provider store={store}>
				<ThirdwebProvider
					autoConnect={true}
					network={desiredNetwork}
					wallet={wallet}
				>
					<ConnectionProvider endpoint="https://api.devnet.solana.com">
						<ThemeProvider enableSystem={true} attribute="class">
							<MetaMaskProvider>
								<MetaplexProvider>
									<UserContext.Provider value={{ scrollRef: scrollRef }}>
										{pid === "/login" ? (
											<Component {...pageProps} />
										) : (
											<Layout>
												<Component {...pageProps} />
											</Layout>
										)}
									</UserContext.Provider>
								</MetaplexProvider>
							</MetaMaskProvider>
						</ThemeProvider>	
					</ConnectionProvider>
				</ThirdwebProvider>
			</Provider>
		</>
	);
=======
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
      <Provider store={store}>
        <ThirdwebProvider
          autoConnect={true}
          network={desiredNetwork}
          wallet={wallet}
        >
          <ConnectionProvider endpoint="https://api.devnet.solana.com">
            <ThemeProvider enableSystem={true} attribute="class">
              <MetaMaskProvider>
                <MetaplexProvider>
                  <UserContext.Provider value={{ scrollRef: scrollRef }}>
                    {pid === "/login" ? (
                      <Component {...pageProps} />
                    ) : (
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>
                    )}
                  </UserContext.Provider>
                </MetaplexProvider>
              </MetaMaskProvider>
            </ThemeProvider>
          </ConnectionProvider>
        </ThirdwebProvider>
      </Provider>
    </>
  );
<<<<<<< HEAD
>>>>>>> origin/anas-dev
=======
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
}

export default MyApp;
