export type NETWOKS = {
  currencySymbol: string;
  blockExplorer?: string;
  blockExplorerUrl?: string;
  chainId?: number;
  chainName?: string;
  rpcUrl?: string;
  currencyName?: string;
  wrapped?: string;
};

export const networkConfigs: Record<string | number, NETWOKS> = {
  1: {
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://etherscan.io/',
    wrapped: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  3: {
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://ropsten.etherscan.io/',
  },
  5: {
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://kovan.etherscan.io/',
  },
  4: {
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://rinkeby.etherscan.io/',
  },
  42: {
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://goerli.etherscan.io/',
  },
  '0x539': {
    chainName: 'Local Chain',
    currencyName: 'ETH',
    currencySymbol: 'ETH',
    rpcUrl: 'http://127.0.0.1:7545',
  },
  '0xa86a': {
    chainId: 43114,
    chainName: 'Avalanche Mainnet',
    currencyName: 'AVAX',
    currencySymbol: 'AVAX',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    blockExplorerUrl: 'https://cchain.explorer.avax.network/',
  },
  '0x38': {
    chainId: 56,
    chainName: 'Smart Chain',
    currencyName: 'BNB',
    currencySymbol: 'BNB',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    blockExplorerUrl: 'https://bscscan.com/',
    wrapped: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  '0x61': {
    chainId: 97,
    chainName: 'Smart Chain - Testnet',
    currencyName: 'BNB',
    currencySymbol: 'BNB',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    blockExplorerUrl: 'https://testnet.bscscan.com/',
  },
  137: {
    chainId: 137,
    chainName: 'Polygon Mainnet',
    currencyName: 'MATIC',
    currencySymbol: 'MATIC',
    rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
    blockExplorerUrl: 'https://explorer-mainnet.maticvigil.com/',
    wrapped: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  },
  80001: {
    chainId: 80001,
    chainName: 'Mumbai',
    currencyName: 'MATIC',
    currencySymbol: 'MATIC',
    rpcUrl: 'https://rpc-mumbai.matic.today/',
    blockExplorerUrl: 'https://mumbai.polygonscan.com/',
  },
  250: {
    chainId: 250,
    chainName: 'Fantom Opera',
    currencyName: 'FTM',
    currencySymbol: 'FTM',
    rpcUrl: 'https://rpc.fantom.network/',
    blockExplorerUrl: 'https://ftmscan.com/',
  },
};

export const getNativeByChain = (chain: string) =>
  networkConfigs[chain]?.currencySymbol || 'NATIVE';

export const getChainById = (chain: number) =>
  networkConfigs[chain]?.chainId || null;

export const getExplorer = (chain: string | number) =>
  networkConfigs[chain]?.blockExplorerUrl;

export const getWrappedNative = (chain: string) =>
  networkConfigs[chain]?.wrapped || null;
