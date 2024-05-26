import { bcs } from '@initia/initia.js'

/*
  swap_script args:
  1. liquidity address base64 format
  2. offered coin metadata address base64 format
  3. amount to swap base64 format
  4. idgaf (optional)
*/

const OPTIONAL_U64 = 'AA=='

export function initToUsdcArgs(amount: number) {
  const args = [
    '2/BsSK85hOxtmuipqn27C7HnhKqbjEpWga9mDPhVjX0=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function usdcToInitArgs(amount: number) {
  const args = [
    '2/BsSK85hOxtmuipqn27C7HnhKqbjEpWga9mDPhVjX0=',
    'KYJNlS4DVJD651Z97qXxW1BKaPpzYQBjwWCrH6h91gk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function initToTiaArgs(amount: number) {
  const args = [
    'sTSuZ4bxDvdClOYn0lGbY7fHQqZzX5hoKSn+qahHRNI=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function tiaToInitArgs(amount: number) {
  const args = [
    'sTSuZ4bxDvdClOYn0lGbY7fHQqZzX5hoKSn+qahHRNI=',
    'rM6zskU5Kv4INGt5TPXE/4Xn6ajIL8r1ESrp1kulfMs=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function initToEthArgs(amount: number) {
  const args = [
    'orDTyOU+N57eMfOjYf8CcW1Q7FPGtluMSKgdWwZUggA=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function ethToInitArgs(amount: number) {
  const args = [
    'orDTyOU+N57eMfOjYf8CcW1Q7FPGtluMSKgdWwZUggA=',
    'vg74SeQlyomDDB/w+YT1sLUStwyralrilMYlXD7kzQw=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function initToTucArgs(amount: number) {
  const args = [
    'Y5b/Gik45yaswQG5xUFLgF2aYFwDyOCDJPXAyIB/fLw=',
    'jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}

export function tucToInitArgs(amount: number) {
  const args = [
    'Y5b/Gik45yaswQG5xUFLgF2aYFwDyOCDJPXAyIB/fLw=',
    'KxToiwb36zAB/GsetggCNYVVpN+xpO02UHMJotdmzk0=',
    bcs.u64().serialize(amount).toBase64(),
    OPTIONAL_U64,
  ]

  return args
}
