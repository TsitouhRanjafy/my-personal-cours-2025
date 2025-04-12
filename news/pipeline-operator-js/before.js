/************* BEFORE PIPE************/

const names = ['USA','Mada','Suise','Russie']

const lowerCasedNames = names.map((name) => name.toLowerCase());
console.log(lowerCasedNames);

const capitalized = capitalize(lowerCasedNames);
console.log(capitalized);

const hyphenJoinedNames = capitalized.join('-');
console.log(hyphenJoinedNames);

const prefixedNames = `Names: ${hyphenJoinedNames}`;
console.log(prefixedNames);

function capitalize(strArray) {
    if (!strArray) return;
    const array = [];
    strArray.forEach(element => {
        const c = element.charAt(0).toUpperCase() + element.slice(1)
        array.push(c);
    });
    return array;
}

const a = (capitalize((['USA','Mada','Suise','Russie']).map((names) => name.toLowerCase()))).join('-')


