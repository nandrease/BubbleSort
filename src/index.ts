import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([ 10, 3, -5, 0 ]);
// console.log('Initial', numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log('Sorted', numbersCollection.data);

const charactersCollection = new CharactersCollection('Suzuki GSX-R 750');
console.log('Unsorted', charactersCollection.data);
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log('Sorted', charactersCollection.data);
