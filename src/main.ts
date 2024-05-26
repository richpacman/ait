import { NODES_GURU } from './constants/addresses'
import { staking } from './modules/staking'
import { swap } from './modules/swap'

async function main() {
  const swapState = {
    UINIT_SWAP_AMOUNT: 3e6,
    MAX_SWAP_ITERATION: 2,
    isSwap: true,
    swapOrder: 1,
    swapIteration: 1,
  }

  const stakingState = {
    UINIT_STAKING_AMOUNT: 1e6,
    targetValidator: NODES_GURU,
    isStaking: false,
  }

  const executeState = {
    isSwapping: swapState.isSwap,
    isStaking: stakingState.isStaking,
  }

  await swap(
    swapState.UINIT_SWAP_AMOUNT,
    swapState.MAX_SWAP_ITERATION,
    executeState.isSwapping,
    swapState.swapOrder,
    swapState.swapIteration,
    executeState
  )

  await staking(
    stakingState.UINIT_STAKING_AMOUNT,
    stakingState.targetValidator,
    executeState.isStaking
  )
}

main()
