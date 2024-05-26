import { MsgDelegate } from '@initia/initia.js'
import { STAKING_CONSTANT } from '../constants/msg'
import {
  initEthSingleStaking,
  initTiaSingleStaking,
  initUsdcSingleStaking,
} from '../constants/stakingArgs'
import { executeOrder } from '../lib/executeOrder'
import { key } from '../config/initia'
import { attemptTx } from '../lib/attemptTx'

async function delegate(
  UINIT_DELEGATE_AMOUNT: string,
  targetValidator: string
) {
  const msg = new MsgDelegate(
    key.accAddress,
    targetValidator,
    UINIT_DELEGATE_AMOUNT
  )

  await attemptTx(msg)
}

export async function staking(
  executeState: { isSwapping: boolean; isStaking: boolean },
  UINIT_DELEGATE_AMOUNT: string,
  UINIT_STAKING_AMOUNT: number,
  targetValidator: string
) {
  if (executeState.isStaking) {
    const singleInitStaking = [
      initUsdcSingleStaking(UINIT_STAKING_AMOUNT, targetValidator),
      initEthSingleStaking(UINIT_STAKING_AMOUNT, targetValidator),
      initTiaSingleStaking(UINIT_STAKING_AMOUNT, targetValidator),
    ]

    console.log('Staking Started. Initiating')

    try {
      console.log('Delegating INIT')

      await delegate(UINIT_DELEGATE_AMOUNT, targetValidator)

      console.log('Two pair staking')

      await executeOrder(
        singleInitStaking,
        singleInitStaking.length,
        STAKING_CONSTANT
      )
    } catch (error) {
      throw new Error(error as string)
    }

    executeState.isStaking = false
    console.log('STAKING IS COMPLETE!')
  }
}
