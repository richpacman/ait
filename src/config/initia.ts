import { LCDClient, Wallet } from '@initia/initia.js'
import { MnemonicKey } from '@initia/initia.js'
import dotenv from 'dotenv'

dotenv.config()

const MNEMONIC = process.env.MNEMONIC

const lcd = new LCDClient('https://lcd.initiation-1.initia.xyz', {
  chainId: 'initiation-1',
  gasPrices:
    '0.15move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff',
  gasAdjustment: '2.0',
})

const key = new MnemonicKey({
  mnemonic: MNEMONIC,
  coinType: 60, // 60 if your wallet from evm like network, otherwise make it 118
})

const wallet = new Wallet(lcd, key)

export { lcd, key, wallet }
