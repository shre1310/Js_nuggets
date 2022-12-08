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
console.log(app);

const state ={
    loading:true,
    job: '',
    name: ''
}
function updateState(key, value){
    state[key]=value
}
updateState('job', 'developer');
updateState('name', 'fuji');
updateState('loading', false );

updateState('name', 'cash');
updateState('job', 'data analyst');
console.log(state);