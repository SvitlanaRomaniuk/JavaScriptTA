// 1.
const getPromise = (message, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(message), delay));

getPromise("test promise", 2000).then((msg) => console.log(msg));

// 2.
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i]=== 'number'){
            result *= arr[i]; 
    } else {
      reject("Error! Incorrect array!");
    }
  }
  resolve(result);
  });
}

calcArrProduct([3, 4, 5])
  .then((product) => console.log(product))
  .catch((err) => console.log(err));

calcArrProduct([5, "user2", 7, 12])
  .then((product) => console.log(product))
  .catch((err) => console.log(err));

// 3.
const showNumbers = () => {
  let accumulatedDelay = 0;

  for (let i = 0; i < 10; i++) {
    const time = Math.floor(Math.random() * 4000);
    getPromise(i, accumulatedDelay + time).then((num) => console.log(num));
    accumulatedDelay += time;
  }
};

showNumbers();

// 4.
const showNumbersAsync = async () => {
  for (let i = 0; i < 10; i++) {
    const time = Math.floor(Math.random() * 4000);
    const n = await getPromise(i, time);
    console.log(n);
  }
};

showNumbersAsync();
