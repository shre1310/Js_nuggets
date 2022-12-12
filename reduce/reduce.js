//Reduce
//iterates, callback function
//reduces to a single value - number, array, objects
//1st parameter ('acc') - total of all  calculations
//2nd parameter ('curr') - current iteration/value

const staff =[
    {
        name: 'Devi', occupation: 'data analyst', age: 21, salary:100
    },
    {
            name: 'Kamala', occupation: 'biologist', age: 28, salary:200
    },
    {
        name: 'ben', occupation:'attorney', age:21, salary:400
    },
    {
        name:'fabiola', occupation:'robotic engineer', age:21, salary:500
    },
    {
        name: 'eleanor', occupation:'Actress', age:21, salary:800
    }

];

const dailyTotal = staff.reduce((total,person)=>{
    console.log(total);
    console.log(person.salary);
        total += salary;
    return total;
},1000);
console.log(dailyTotal);