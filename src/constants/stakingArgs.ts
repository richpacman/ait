import { bcs } from '@initia/initia.js'

const OPTIONAL_U64 = 'AA=='

export function initUsdcSingleStaking(amount: number, targetValidator: string) {
  const args = [
    '2/BsSK85hOxtmuipqn27C7HnhKqbjEpWga9mDPhVjX0=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
    bcs.string().serialize(targetValidator).toBase64(),
  ]

  return args
}

export function initEthSingleStaking(amount: number, targetValidator: string) {
  const args = [
    'orDTyOU+N57eMfOjYf8CcW1Q7FPGtluMSKgdWwZUggA=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
    bcs.string().serialize(targetValidator).toBase64(),
  ]

  return args
}

export function initTiaSingleStaking(amount: number, targetValidator: string) {
  const args = [
    'sTSuZ4bxDvdClOYn0lGbY7fHQqZzX5hoKSn+qahHRNI=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
    bcs.string().serialize(targetValidator).toBase64(),
  ]

  return args
}
