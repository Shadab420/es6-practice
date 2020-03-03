const siblingsAges = [13,14,15];
const cousinsAges = [25,26];
const mamaAges = [45, 48];

//normal way
let allAges = siblingsAges.concat(cousinsAges).concat(mamaAges);

//spread operator way
allAges = [...siblingsAges, ...cousinsAges, 40, ...mamaAges];

console.log(`All ages = ${allAges}
max age = ${Math.max(...allAges)}`);