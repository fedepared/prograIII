function formatPrice(amount, currency='ARS'){
    console.log(`${amount} ${currency}`);
}

function sumAll(...numbers){
    console.log(numbers.reduce((acc,p)=> acc+p))
}

const prices = [100,250,80];


formatPrice(1000); // 1000 ARS

sumAll(...prices);