import { MsgDelegate, MsgExecute } from '@initia/initia.js'
import { executeMsg } from './executeMsg'
import { delay } from '../utils/utils'

export async function attemptTx(
  msg: MsgExecute | MsgDelegate,
  orderLength?: number,
  iteration?: number
) {
  let txResult

  while (!txResult) {
    console.log('Executing, please wait :)')

    try {
      txResult = await executeMsg(msg)

      if (txResult.txhash && !txResult.raw_log) {
        console.log('Transaction successful!', txResult)
        break
      } else {
        console.log(
          'Transaction error, retrying in 1 minute.',
          txResult?.raw_log
        )
        txResult = null

        await delay(60000)
      }
    } catch (error) {
      console.log('Transaction failed, terminating!')
      throw new Error(error as string)
    }
  }

  if (orderLength && iteration) {
    if (iteration !== orderLength - 1) {
      console.log('Waiting 10 seconds for next transaction')
      await delay(10000)
    }
  }
}
