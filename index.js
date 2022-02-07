function spy() {
    console.log(`chai`)
}
function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("Named Function");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}