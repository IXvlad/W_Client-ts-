import { IRecord } from '../record';
import { IResWeldMaterials } from '../resWeldMaterials';

export interface IResWeldWithRecDTO {
  records: IRecord[];
  materials: IResWeldMaterials;
}
