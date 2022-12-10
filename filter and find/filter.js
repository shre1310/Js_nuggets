//filter returns a new array, can manipulate the same size of new array unlike the maps, returns based on condition
//Find - returns single instance(object), return first match, if no match - undefined

const people =[
    {
        name: 'Devi', occupation: 'data analyst', age: 21
    },
    {
            name: 'Kamala', occupation: 'biologist', age: 28  
    },
    {
        name: 'ben', occupation:'attorney', age:21
    },
    {
        name:'fabiola', occupation:'robotic engineer', age:21
    },
    {
        name: 'eleanor', occupation:'Actress', age:21
    }

];
const fruits =['orange', 'pear', 'lemon'];
//filter
const youngerPeople = people.filter((person)=>{
    // if(person.age < 25){
    //     return person;
    // }
    return person.age <25
});
  console.log(youngerPeople);

const dataAnalyts = people.filter((person)=> person.occupation==='data analyst');
console.log(dataAnalyts);
//no match
const seniorDev = people.filter((item)=> item.occupation==='senior dev' );
console.log(seniorDev);
//find
const ben = people.find((person)=> person.name==='ben')
console.log(ben);

// const fruit = fruits.find((items)=> fruit ==='lemon')
// console.log(fruit);

//no match
const oldPerson = people.find((person)=> { return person.age > 28});
console.log(oldPerson);
//multiple matches
const randomPerson = people.find((person)=> person.age < 28);
console.log(randomPerson);

const fabiola = people.filter((item)=> item.name==='fabiola')
console.log(ben.occupation);
console.log(fabiola[0].occupation);

