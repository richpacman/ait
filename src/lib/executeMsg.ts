import { MsgDelegate, MsgExecute } from '@initia/initia.js'
import { lcd, wallet } from '../config/initia'

const DEFAULT_TIMEOUT = 86400000 // 1 day XD

export async function executeMsg(msg: MsgExecute | MsgDelegate) {
  const signedTx = await wallet.createAndSignTx({
    msgs: [msg],
  })

  const txResult = await lcd.tx.broadcast(signedTx, DEFAULT_TIMEOUT)

  return txResult
}
