import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([ 10, 3, -5, 0 ]);
console.log('Initial', numbersCollection.data);
const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log('Sorted', numbersCollection.data);
