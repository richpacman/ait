import { MsgExecute } from '@initia/initia.js'
import { key } from '../config/initia'
import { MSG_EXECUTE_TYPE, SWAP_CONSTANT } from '../constants/msg'
import { attemptTransaction } from './attemptTransaction'

export async function executeTx(
  order: string[][],
  orderLength: number,
  msgExecuteArgs: MSG_EXECUTE_TYPE
) {
  for (let i = 0; i < orderLength; i++) {
    const args = order[i]

    const { MODULE_ADDRESS, MODULE_NAME, FUNCTION_NAME, TYPE_ARGS } =
      msgExecuteArgs

    const msg = new MsgExecute(
      key.accAddress,
      MODULE_ADDRESS,
      MODULE_NAME,
      FUNCTION_NAME,
      TYPE_ARGS,
      args
    )

    try {
      await attemptTransaction(i, msg, orderLength)
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
