/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyObject =Record<string, any>

export type OptionalKeys<T, K = keyof T> = K extends keyof T?
    T extends Required<Pick<T, K>>?never:K
    :never

export type AllOptional<T> = (keyof T) extends OptionalKeys<T>?true:false
