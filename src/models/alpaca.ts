import {PathString} from '@angular/compiler-cli/src/ngtsc/file_system';
import {Species} from './species';
import {Owner} from './owner';

export class Alpaca {
  id: number;
  name: string;
  age: number;
  gender: number;
  src: PathString;
  species?: Species;
  owner?: Owner;

}
