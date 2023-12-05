import { listAsset, listMultipleAsset,  } from './actions/write/listAsset';
import { ContractResult, PLAction, PLResult, PLState } from './types/types';
declare const ContractError;

export function handle(state: PLState, action): ContractResult {
  const input = action.input;

  switch (input.function) {
    case 'list':
     listAsset(state, action);
     break;
    case 'listMultiple':
     listMultipleAsset(state, action);
     break;
    case 'buyAsset':
      return buyAsset(state, action);
    case 'fetchAllMyRentedAssets':
      return fetchAllMyRentedAssets(state, action);
    default:
      throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
  }
}
