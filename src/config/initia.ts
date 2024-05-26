import { LCDClient, Wallet } from '@initia/initia.js'
import { MnemonicKey } from '@initia/initia.js'
import dotenv from 'dotenv'

dotenv.config()

const MNEMONIC = process.env.MNEMONIC

const lcd = new LCDClient('https://lcd.initiation-1.initia.xyz', {
  chainId: 'initiation-1',
  gasPrices: '0.15uinit',
  gasAdjustment: '2.0',
})

const key = new MnemonicKey({
  mnemonic: MNEMONIC,
  coinType: 60,
})

const wallet = new Wallet(lcd, key)

export { lcd, key, wallet }
