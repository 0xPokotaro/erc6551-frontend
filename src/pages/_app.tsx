import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig, configureChains, mainnet, sepolia } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

export default function App({ Component, pageProps }: AppProps) {
  const { publicClient, webSocketPublicClient } = configureChains(
    [mainnet, sepolia],
    [publicProvider()],
  )

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  })

  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
