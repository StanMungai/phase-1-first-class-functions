function receivesAFunction (callback) {
  callback()
}

function returnsANamedFunction () {
  return function func() {
    console.log('Hello')
  }
}

function returnsAnAnonymousFunction() {
  return () => console.log('Hello')
}