import { ContractResult, PLListInput, PLListMultipleInput, PLState } from '../../types/types';

declare const ContractError;

export const listAsset = (
    state: PLState,
    { input, caller} : PLListInput
) => {

    if(!input) {
        throw new ContractError(`Creator must provide a message content.`);
    }

    state.listedUDLAssets.push(input);
}

export const listMultipleAsset = (
    state: PLState,
    { input, caller} : PLListMultipleInput
) => {

    if(!input) {
        throw new ContractError(`Creator must provide a message content.`);
    }

    state.listedUDLAssets.concat(input);
}