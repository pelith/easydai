import React, { createContext, useContext } from 'react'

import { useWeb3ReadOnly } from './Web3ReadOnly'
import { safeAccess } from '../utils'
import CTOKEN_ABI from '../constants/abis/cToken.json'
import ITOKEN_ABI from '../constants/abis/iToken.json'
import CHAI_ABI from '../constants/abis/chai.json'

const NAME = 'name'
const SYMBOL = 'symbol'
const DECIMALS = 'decimals'
const ADDRESS = 'address'
const ABI = 'abi'
const ASSET = 'asset'
const ASSET_DECIMALS = 'assetDecimals'
const PLATFORM = 'platform'

const INITIAL_BONDS_CONTEXT = {
  1: {
    '0xf5dce57282a584d2746faf1593d3121fcac444dc': {
      [NAME]: 'Compound Sai',
      [SYMBOL]: 'cSAI',
      [DECIMALS]: 8,
      [ADDRESS]: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
      [ABI]: CTOKEN_ABI,
      [ASSET]: 'SAI',
      [ASSET_DECIMALS]: 18,
      [PLATFORM]: 'Compound',
    },
    '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643': {
      [NAME]: 'Compound Dai',
      [SYMBOL]: 'cDAI',
      [DECIMALS]: 8,
      [ADDRESS]: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
      [ABI]: CTOKEN_ABI,
      [ASSET]: 'DAI',
      [ASSET_DECIMALS]: 18,
      [PLATFORM]: 'Compound',
    },
    '0x39aa39c021dfbae8fac545936693ac917d5e7563': {
      [NAME]: 'Compound USDC',
      [SYMBOL]: 'cUSDC',
      [DECIMALS]: 8,
      [ADDRESS]: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
      [ABI]: CTOKEN_ABI,
      [ASSET]: 'USDC',
      [ASSET_DECIMALS]: 6,
      [PLATFORM]: 'Compound',
    },
    '0x14094949152eddbfcd073717200da82fed8dc960': {
      [NAME]: 'Fulcrum Sai',
      [SYMBOL]: 'iSAI',
      [DECIMALS]: 18,
      [ADDRESS]: '0x14094949152eddbfcd073717200da82fed8dc960',
      [ABI]: ITOKEN_ABI,
      [ASSET]: 'SAI',
      [ASSET_DECIMALS]: 18,
      [PLATFORM]: 'Fulcrum',
    },
    '0x06AF07097C9Eeb7fD685c692751D5C66dB49c215': {
      [NAME]: 'Chai',
      [SYMBOL]: 'CHAI',
      [DECIMALS]: 18,
      [ADDRESS]: '0x06AF07097C9Eeb7fD685c692751D5C66dB49c215',
      [ABI]: CHAI_ABI,
      [ASSET]: 'DAI',
      [ASSET_DECIMALS]: 18,
      [PLATFORM]: 'MakerDAO',
    },
  },
}

const BondsContext = createContext()

export function useBondsContext() {
  return useContext(BondsContext)
}

export default function Provider({ children }) {
  return (
    <BondsContext.Provider value={INITIAL_BONDS_CONTEXT}>
      {children}
    </BondsContext.Provider>
  )
}

export function useAllBondDetails() {
  const { chainId } = useWeb3ReadOnly()
  const bondsContext = useBondsContext()
  return safeAccess(bondsContext, [chainId])
}

export function useBondDetails(tokenAddress) {
  const { chainId } = useWeb3ReadOnly()
  const bondsContext = useBondsContext()
  return safeAccess(bondsContext, [chainId, tokenAddress])
}

export function useBondByAssetAndPlatform(asset, platform) {
  const { chainId } = useWeb3ReadOnly()
  const bondsContext = useBondsContext()
  const bonds = safeAccess(bondsContext, [chainId])
  const filteredBonds = Object.keys(bonds)
    .map(tokenAddress => ({
      address: tokenAddress,
      ...bonds[tokenAddress],
    }))
    .filter(bond => {
      return (
        bond.asset.toUpperCase() === asset.toUpperCase() &&
        bond.platform.toUpperCase() === platform.toUpperCase()
      )
    })

  return filteredBonds[0]
}
