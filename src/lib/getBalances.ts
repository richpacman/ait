import { key, lcd } from '../config/initia'
import { UTUC_IBC } from '../constants/addresses'

export async function getBalances() {
  const allBalances = await lcd.bank.spendableBalances(key.accAddress)

  // @ts-ignore
  const coin = allBalances[0]._coins

  const uinit = coin.uinit ? coin.uinit.amount : 0
  const uusdc = coin.uusdc ? coin.uusdc.amount : 0
  const utia = coin.utia ? coin.utia.amount : 0
  const ueth = coin.ueth ? coin.ueth.amount : 0
  const utuc = coin[UTUC_IBC] ? coin[UTUC_IBC].amount : 0

  return { uusdc, uinit, utia, ueth, utuc }
}

getBalances()
