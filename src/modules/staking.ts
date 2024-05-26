import { STAKING_CONSTANT } from '../constants/msg'
import {
  initEthSingleStaking,
  initTiaSingleStaking,
  initUsdcSingleStaking,
} from '../constants/stakingArgs'
import { executeTx } from '../lib/executeTx'

export async function staking(
  UINIT_STAKING_AMOUNT: number,
  targetValidator: string,
  isStaking: boolean
) {
  if (isStaking) {
    const singleInitStaking = [
      initUsdcSingleStaking(UINIT_STAKING_AMOUNT, targetValidator),
      initEthSingleStaking(UINIT_STAKING_AMOUNT, targetValidator),
      initTiaSingleStaking(UINIT_STAKING_AMOUNT, targetValidator),
    ]

    console.log('Staking Started. Initiating')

    try {
      await executeTx(
        singleInitStaking,
        singleInitStaking.length,
        STAKING_CONSTANT
      )
    } catch (error) {
      throw new Error(error as string)
    }

    isStaking = false
    console.log('STAKING IS COMPLETE!')
  }
}
