//map
const people = [
    {
        name:'John',
        age: 26,
        position: 'devOps'
    },
    {
        name:'Jen',
        age: 26,
        position: 'UX/UI designer'
    },
    {
        name:'micah',
        age: 27,
        position: 'seo'
    }
]
//returns a new array
//does not change the size of original array
//uses values from original array when making one
const getAges = person => person.age *2;

const ages = people.map(getAges)
console.log(ages);
//construct the object instead of a single data; below
const newPeople = people.map((item)=>{
    return{
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 10
    };
    console.log(newPeople);
})

const names = people.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');