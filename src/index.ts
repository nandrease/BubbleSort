import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([ 10, 3, -5, 0 ]);
console.log('Initial', numbersCollection.data);
numbersCollection.sort();
console.log('Sorted', numbersCollection.data);

const charactersCollection = new CharactersCollection('Suzuki GSX-R 750');
console.log('Unsorted', charactersCollection.data);
charactersCollection.sort();
console.log('Sorted', charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);
linkedList.add(99);
console.log('Before');
linkedList.print();
linkedList.sort();
console.log('After');
linkedList.print();
