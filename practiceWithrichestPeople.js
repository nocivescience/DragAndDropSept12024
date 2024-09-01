const richestPeople = [
    'Jeff Bezos',
    'Elon Musk',
    'Bernard Arnault & family',
    'Bill Gates',
    'Mark Zuckerberg',
    'Warren Buffet',
    'Larry Ellison',
    'Larry Page',
    'Sergey Brin',
    'Mukesh Ambani'
];

const richestPeopleWithTheirNetWorth = [...richestPeople];
const newArray=richestPeopleWithTheirNetWorth.map(a => ({value: a, sort: Math.floor(Math.random() * 1000)}));
newArray.sort((a, b) => a.sort - b.sort);
console.log(newArray); // Output: ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault & family', 'Bill Gates', 'Mark Zuckerberg', 'Warren Buffet', 'Larry Ellison', 'Larry Page', 'Sergey Brin', 'Mukesh Ambani']
