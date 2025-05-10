function increment(n: number) {
  return n + 1;
}

// le type de valeur que cette fonction retourne
type T = ReturnType<typeof increment>; // number

// ---------------------------------------------------

// voici un type recursive
type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONValue };


// fonction recursive
function addUpTo(n: number): number {
  if (n === 0) {
    return n;
  }

  return n + addUpTo(n - 1);
}


// exemple d'utilisation de type recursive
const person = {
  name: 'Alice',
  age: 25,
  friends: {
    0: {
      name: 'Bob',
      age: 23,
      friends: {
        // ...
      }
    },
    1: {
      name: 'Carol',
      age: 28,
      friends: {
        // ...
      }
    },
    // ...
  }
};

// le type de cette person
type Person = {
  name: string;
  age: number;
  friends: {
    [key: number]: Person;
  };
};





