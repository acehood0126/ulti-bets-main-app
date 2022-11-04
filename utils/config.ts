import Metamask from '/public/images/svgs/metamask.svg';
import WalletConnect from '/public/images/svgs/wallet-connect.svg';
import Coinbase from '/public/images/svgs/coinbase-wallet.svg';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export type CONNECTORS = {
  title: string;
  icon: string;
  provider: WalletConnectConnector | InjectedConnector | WalletLinkConnector;
  priority?: number;
};

const RPC_URLS: Record<number, string> = {
  1: 'https://mainnet.infura.io/v3/a2bffde9baac4c9689fe2ce9ef2a9da1',
  4: 'https://rinkeby.infura.io/v3/a2bffde9baac4c9689fe2ce9ef2a9da1',
  80001: 'https://polygon-mumbai.infura.io/v3/cb69790f7bcf4870bed74530bdf4c7aa',
  137: 'https://polygon-mainnet.infura.io/v3/cb69790f7bcf4870bed74530bdf4c7aa',
};

const SUPPORTED_CHAIN_IDS: Array<number> = [
  1, 4, 3, 42, 5, 56, 97, 137, 80001, 56, 97, 1337, 250,
];

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    4: RPC_URLS[4],
    80001: RPC_URLS[80001],
    137: RPC_URLS[137],
  },
  qrcode: true,
  pollingInterval: 15000,
});

export function resetWalletConnector(connector: WalletConnectConnector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}
//coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[137],
  appName: 'ultibets-merch-store',
  supportedChainIds: [1, 4, 80001, 250],
});

export const connectors: Array<CONNECTORS> = [
  {
    title: 'Metamask',
    icon: Metamask,
    provider: injected,
  },
  {
    title: 'WalletConnect',
    icon: WalletConnect,
    provider: walletconnect,
    priority: 2,
  },
  {
    title: 'CoinBase',
    icon: Coinbase,
    provider: walletlink,
    priority: 3,
  },
];
