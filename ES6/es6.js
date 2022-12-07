const netflix =[
    {
        name:'Never have I ever',
        category: 'Series'
    },
    {
        name: 'Wednesday',
        category: 'Series'
    },
    {
        name: 'Enola Holmes',
        category: 'Movie'
    },
    {
        name: 'free solo',
        category: 'Documentary'
    },
    {
        name:'The school for good and evil',
        category: 'Movie'
    }

]
//another way
// const getCategory = items=> items.category;

// const categories = netflix.map(getCategory)
//     console.log(categories);

const categories = ['all',...new Set(netflix.map((item)=> item.category))];
    console.log(categories);
//map - get all instances
//new set - narrow down
//['all',...] - turn it back to array 
const result = document.querySelector('.result');
result.innerHTML = categories.map((category)=>{
    return `<button>${category}</button>`
})
.join('');



