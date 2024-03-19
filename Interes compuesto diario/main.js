const mount = 50000;
const porcent = 0.15
const days = 365;

const getDailyProfit = (mount, porcent, days) => {
    return (mount*(porcent))/days
}

const getTotal = (mount, porcent, days) => {
    let total = mount
    let  profitDay;

    for(let i = 1; i<days;i++){
        profitDay = getDailyProfit(total, porcent, days);
        total+=(profitDay);
    }

    return total;
}

const total = getTotal(mount, porcent, days);

console.log("Your Total  is: $"+ total.toFixed(2));
console.log("Your profit will be: " + (total-mount).toFixed(2));