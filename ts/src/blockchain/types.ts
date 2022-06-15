import { SignatureProvider } from "eosjs/dist/eosjs-api-interfaces";

export type BalancingMode = 'round-robin' | 'random-once' | 'random'

export interface RpcEndpoint {
  protocol: string
  host: string
  port: number
}

export interface TableCodeConfig {
  core?: string
  staker?: string
  p2p?: string
  reg?: string
  part?: string
}

export interface TableCodeConfigStrict {
  core: string
  staker: string
  p2p: string
  reg: string
  part: string
}

export type AuthKeyType = 'plain-auth-key' | 'auth-key-search-callback'

export interface ChainConfig {
  name: string
  rpcEndpoints: RpcEndpoint[]
  balancingMode?: BalancingMode
  explorerApiUrl: string
  tableCodeConfigOverride?: TableCodeConfig
  authKeyType?: AuthKeyType
}

export interface UalConfig {
  rootChain: string
}

export interface RegistratorConfig {
  api: string
  appName: string
}

export interface Config {
  chains: ChainConfig[]
  ual: UalConfig
  tableCodeConfig: TableCodeConfigStrict
  registrator?: RegistratorConfig
}

export type AuthKeySearchCallback = (authKeyQuery: string) => Promise<string | null>

export type SignatureProviderMaker = (authKey: string) => Promise<SignatureProvider>

export interface ChainCrypt {
  encrypt(authKey: string, publicKey: string, message: string, memo?: string): Promise<string>
  decrypt(authKey: string, publicKey: string, message: string, memo?: string): Promise<string>
}