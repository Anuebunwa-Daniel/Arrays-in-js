
const aList =[ 'lawrence', 'svekis', true, 35, null, undefined, [ 'one', 'two'] ];
// console.log (aList)

 aList.pop ();

aList.shift();
console.log(aList);

aList.unshift ('FIRST');
aList[3] = 'hello world';
aList[2] = 'middle';
console.log (aList)
aList.pop ();
aList.pop ();
aList.push ('LAST');
console.log (aList);



const total =aList.concat('boniface')
console.log (total)



let household =[ 'mummy', 'daddy', 'son', 'daughter', 'cousin', ['nice', 'nephew']];

household.pop();
    console.log (household);
household.unshift ('grand dad');
    console.log (household);
household.unshift ('grand mum');
    console.log (household);
household [6]= 'grand child';
    console.log (household);
household.push ('great grand child');
    console.log (household);


