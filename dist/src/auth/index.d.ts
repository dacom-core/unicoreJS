/// <reference types="hdkey" />
export declare const makeHdNodeByMnemonic: (mnemonic: string) => Promise<import("hdkey")>;
export declare const makePublicKeyByMnemonic: (mnemonic: string) => Promise<any>;
export interface AccountData {
    name: string;
    mnemonic: string;
    wif: string;
    pub: string;
}
export declare const makeAccount: (username: string, mnemonic: string, wif: string, pub: string) => AccountData;
export declare const makeAccountByMnemonic: (username: string, mnemonic: string) => Promise<AccountData>;
export declare const makeAccountByWif: (username: string, wif: string) => Promise<AccountData>;
export declare const generateAccount: () => Promise<AccountData>;
