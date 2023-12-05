type UDLID = string & { length: 43 };
type txnID = UDLID
type Addresses = UDLID;
type NFTAddress = UDLID;

interface UDLParams {
  currency: string | null
  paymentAddress: string | null
  Expiry: string | null
  LicenseFee: `Monthly-${string}`| `One-Time-${string}`| null
  CommercialUse: 'Allowed'|'Allowed-With-Credit' | `Before-${string}-Years-Commercial-Use` | `After-${string}-Years-Commercial-Use`| null
  Derivation: 'Allowed-With-Credit' | 'Allowed-With-Indication' | 'Allowed-With-License-Passthrough'| `Allowed-With-RevenueShare-${string}%`| `Before-${string}-Years-Derivation` |`After-${string}-Years-Derivation`| null
}

interface AssetRights {
  AssetId: UDLID;
  expiry: string;
  licensedOn: Date;
}

export interface PLState {
  listedUDLAssets: UDLID[];
  assetToParams: {
    [asset: UDLID]: UDLParams
  };
  // userToAcquiredRights: {
  //   [userAddress: Addresses]: NFTAddress;
  // };
  mintedNFTs: {
    [userAddress: Addresses]: AssetRights[];
  }
}

//rem
export interface PLAction {
  input: ArditInput;
  caller: string;
}

export interface PLListInput {
  input: UDLID;
  caller: string;
}

export interface PLGetRights {
  input: {
    asset: NFTAddress;
    paymentTxn: txnID;
  };
  caller: string;
}

export interface PLListMultipleInput {
  input: UDLID[];
  caller: string;
}

export interface ArditInput {
  function: ArditFunction;
  id: number;
  content: string;
}

export type ArditFunction = 'list' | 'listMultiple';

export type ContractResult = { state: PLState } | { result: PLResult };
