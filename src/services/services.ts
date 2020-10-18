import {DropDownData} from '../common';
import {reshapeDropdownData} from '../utils';
import client from './client';

export async function getCountryCities(
  value: DropDownData,
): Promise<DropDownData[] | undefined> {
  try {
    const response = await (await client()).get(`/country/${value.value}/city`);
    if (response) {
      return reshapeDropdownData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}
