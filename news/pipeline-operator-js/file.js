['USA', 'Mada', 'Suise', 'Russie']
  |> (arr => arr.map((name) => name.toLowerCase()))
  |> (arr => capitalize(arr))
  |> (arr => arr.join('-'))
  |> (arr => `Names: ${arr}`)
  |> (arr => console.log(arr));

function capitalize(strArray) {
    if (!strArray) return;
    const array = [];
    strArray.forEach(element => {
        const c = element.charAt(0).toUpperCase() + element.slice(1)
        array.push(c);
    });
    return array;
}