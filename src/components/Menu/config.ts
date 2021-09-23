import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://exchange.pancakeswap.finance/swap?outputCurrency=0x3c168c8e0bb11b0a6deeba6c0c6be100e82451bb',
  //       target: true,
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://exchange.pancakeswap.finance/add/BNB/0x3c168c8e0bb11b0a6deeba6c0c6be100e82451bb',
  //       target: true,
  //     },
  //   ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x3c168c8e0bb11b0a6deeba6c0c6be100e82451bb',
        target: true,
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/shrew',
        target: true,
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/shrew/',
        target: true,
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x3c168c8e0bb11b0a6deeba6c0c6be100e82451bb-bsc',
        target: true,
      },
      {
        label: 'Bogged',
        href: 'https://charts.bogged.finance/?token=0x3c168c8e0bb11b0a6deeba6c0c6be100e82451bb',
        target: true,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'How to use',
        href: 'https://www.youtube.com/watch?v=ghTFp2rtAo8',
        target: true,
      },
      {
        label: 'Roadmap',
        href: 'https://www.shrew.com/vision',
        target: true,
      },
      {
        label: 'Whitepaper',
        href: 'https://www.shrew.com/whitepaper',
        target: true,
      },
      {
        label: 'Blog',
        href: 'https://www.shrew.com/blog',
        target: true,
      },
    ],
  },
  {
    label: 'Contact Us',
    icon: 'IfoIcon',
    href: 'https://www.shrew.com/contact-us',
  },
]

export default config
