//Modules in Nodejs use Common.js to export its functions to other js programs. They use a concept called IIFE(Immediately Invoked Function Expressions)
(function test(){
     console.log("Testing code")
})()

module.exports =(function(){
    let cart = [];

    function addItem(item){
        cart.push(item)
    }

    function getAll(){
        return cart;
    }

    function bill(){
        let amount =0;
        for(const item of cart){
            amount += item.price * item.count
        }
        return amount
    }

    return {
        addItem, getAll
    }
})();

//IIFE: Global polution is reduced. scope based, module in structure. 


