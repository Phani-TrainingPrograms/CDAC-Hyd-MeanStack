console.log("Testing code in Nodeje")

const addFunc = (f, s) => f + s;

console.log(addFunc(123,23));

const data = [
    {
        id : 123, name : "Animal", director : "S R. Vanga"
    },
    {
        id : 124, name : "Kumar", director : "Srivalli"
    },
    {
        id : 124, name : "Fighter", director : "S. Anandh"
    },
    {
        id : 125, name : "RRR", director : "SS Mouli"
    },
]

console.log(data);
for(const rec of data) console.log(rec);
