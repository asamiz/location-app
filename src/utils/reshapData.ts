import {DropDownData} from '../common';

export function reshapeDropdownData(data: any): DropDownData[] {
  let reshapedData: DropDownData[] = [];
  data.map((item: any) => {
    let reshapedObject: DropDownData = {
      label: item.attributes.name,
      value: item.id,
    };
    reshapedData.push(reshapedObject);
  });
  return reshapedData;
}
