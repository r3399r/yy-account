import { Transaction } from 'src/app/model/Transaction';

export interface Book {
  id: string;
  name: string;
  transactions?: Transaction[];
}
