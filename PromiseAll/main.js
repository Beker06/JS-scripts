

async function processData(){
    const promise1 = Promise.resolve(3);
    const promise2 = 69;
    const promise3 = new Promise((resolve) => {
        setTimeout(resolve, 100, 'beker')
    });

    Promise.all(
        [promise1, promise2, promise3]
    ).then((values) => {
        console.log(values); // [ 3, 69, 'beker' ]
    })
}

processData()