import { ArditAction, ArditState, ContractResult } from '../../types/types';

declare const ContractError;

export const fetchAllMyRentedAssets = (state: ArditState, { input: { fetchForUser } }: ArditAction): ContractResult => {
    if (!fetchForUser) {
        throw new ContractError(`You've to supply a user to fetch for`);
    }

    return { result: message };
};
