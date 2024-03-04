//race

const promisee1 = new Promise(resolve => setTimeout(resolve, 1000, 'one'));
const promisee2 = new Promise(resolve => setTimeout(resolve, 2000, 'two'));

Promise.race([promisee1, promisee2]).then(value => {
  console.log(value); 
});

//resolved

const resolvedPromise = Promise.resolve('Resolved value');

resolvedPromise.then(value => {
  console.log(value); 
});

//reject
const rejectedPromise = Promise.reject('Error: Something went wrong');

rejectedPromise.catch(error => {
  console.log(error); 
});


//all
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // Output: [1, 2, 3]
});

//finally

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved');
    }, 1000);
  });
  
  myPromise
    .then(value => {
      console.log(value); 
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log('Finally!'); 
    });
  
