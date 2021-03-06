import referral from '../config/referrerWhiteList.json'
export const ReferralWhiteList = referral

export const NetworkContextName = 'network'

export const ETH_DECIMALS = 18

export const SAI_ADDRESS = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'
export const SAI_DECIMALS = 18

export const USDC_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
export const USDC_DECIMALS = 6

export const POT_ADDRESS = '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7' // DAI Saving Rate address

export const LENDING_POOL_ADDRESS = '0x398eC7346DcD622eDc5ae82352F02bE94C62d119' // AAVE lending pool
export const AAVE_DAI_RESERVE_ADDRESS =
  '0x6B175474E89094C44Da98b954EedeAC495271d0F' // AAVE DAI reserve

export const COMPTROLLER_ADDRESS = '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B'
export const CBAT_ADDRESS = '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E'
export const CDAI_ADDRESS = '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643'
export const CETH_ADDRESS = '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5'
export const CREP_ADDRESS = '0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1'
export const CUSDC_ADDRESS = '0x39AA39c021dfbaE8faC545936693aC917d5E7563'
export const CUSDT_ADDRESS = '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9'
export const CWBTC_ADDRESS = '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4'
export const CZRX_ADDRESS = '0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407'

export const BLOCKS_PER_YEAR = '2102400' // (365 * 24 * 60 * 60) seconds per year / 15 seconds per block
export const CSAI_CREATION_BLOCK_NUMBER = 7710752
export const CDAI_CREATION_BLOCK_NUMBER = 8983575
export const CUSDC_CREATION_BLOCK_NUMBER = 7710760
export const CUSDT_CREATION_BLOCK_NUMBER = 9879363
export const ISAI_CREATION_BLOCK_NUMBER = 7867896
export const CHAI_CREATION_BLOCK_NUMBER = 8928160
export const ADAI_CREATION_BLOCK_NUMBER = 9241063
export const AUSDT_CREATION_BLOCK_NUMBER = 9241076

export const CTOKEN_GAS = {
  mint: 240000,
  redeem: 240000,
  redeemIfBorrowing: 400000,
  transfer: 240000,
  transferIfBorrowing: 400000,
  borrow: 450000,
  repayBorrow: 240000,
  liquidateBorrow: 550000,
}
