const promise = new Promise((res, rej) => {
    // Producer
    setTimeout(() => {
        rej('Error code 23');
        res(25);
    }, 2000);
});

// Consumer
promise
    .then((data) => {
        console.log(data, 'Data received!');
    })
    .catch((error) => {
        console.log(error);
        console.log('Something terrible has happened!');
    })
