//dot notation
const person = {
    name: 'Kashyup'
    
}
console.log(person.name);
person.age = 25;
console.log(person);

//square bracket notation
const items = {
    'feature-items':['items1','items2']
}
console.log(items['feature-items']);
console.log(person['name'])

let appState = 'loading';
appState = 'error';
keyName = 'mouse';

const app = {

[appState]: true
}
app[keyName]='computers';
console.log(app)

