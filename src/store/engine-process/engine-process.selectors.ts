import { City } from '@appTypes/city';
import { State } from '@appTypes/state';
import { NameSpace } from '@const';

export const getCity = (state: State): City => state[NameSpace.Engine].city;
export const getError = (state: State): string | null => state[NameSpace.Engine].error;
