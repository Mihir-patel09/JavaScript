// Immediately Invoked Function Expressions (IIFE)


(function Mighty(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Mihir')
