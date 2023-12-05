import { ContractResult, PLGetRights, PLListInput, PLListMultipleInput, PLState } from '../../types/types';

declare const ContractError;

export const getRights = (
    state: PLState,
    { input, caller} : PLGetRights
) => {

    if(!input) {
        throw new ContractError(`Creator must provide a message content.`);
    }

    const { asset, paymentTxn } = input;

    // proove txn

    //store the data onchain

    const secondsInAYear = 31536000;
    const dateNow = new Date()
    const expiryTime = new Date(dateNow.getTime() + ((Number(state.assetToParams[asset].Expiry)) * secondsInAYear * 1000))

    state.mintedNFTs[caller].append({
        AssetId: asset,
        expiry: expiryTime,
        licensedOn: dateNow
      })
    
}

//fetch which one to buy rights for
//verify payment ( how? )
//mint NFT ( offchain process lul )
//mutate state

export const renewRights = (
    state: PLState,
    { input, caller} : PLListInput
) => {

    if(!input) {
        throw new ContractError(`Creator must provide a message content.`);
    }

    state.listedUDLAssets.push(input);
}
