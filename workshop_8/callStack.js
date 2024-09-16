function baz() {
    console.log('Baz is executing');
    // throw new Error('Baz is throwing an error');
    console.log('Baz is done!');
}   

function bar() {
    console.log('Bar is executing');
    baz();
    console.log('Bar is done!');
}

function foo() {
    console.log('Foo is executing');
    bar();
    console.log('Foo is done!');
}

// foo();
setTimeout(() => {
    console.log('Timeout is executing');

    console.log('Timeout is done!');
}, 10);
setTimeout(() => {
    console.log('Timeout 2 is executing');

    console.log('Timeout 2 is done!');
}, 0);
foo();