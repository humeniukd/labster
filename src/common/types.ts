export enum Cipher {
  AES = 'AES',
  TDES = 'TDES',
}

export enum CipherMode {
  ECB = 'ECB',
  CBC = 'CBC',
}

export enum PaddingMode {
  NoPadding = 'NO_PADDING',
  ZeroBytePadding = 'ZERO_BYTE_PADDING',
  PKCS7Padding = 'PKCS7_PADDING',
}

export enum KeyState {
  Active = 'ACTIVE',
  Rotated = 'ROTATED',
}

export type ResourceList<T> = {
  collection: T[]
  count: number
}

export type Params = Record<string, any>

export enum SortDirection {
  ASC,
  DESC,
  None,
}
