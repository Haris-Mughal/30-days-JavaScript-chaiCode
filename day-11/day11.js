// Activity 1: Understanding Promises
// Task 1:
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds.");
  }, 2000);
});

promise1.then((msg) => {
  console.log(msg);
});

// Task 2:
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});

promise2.catch((err) => {
  console.log(err.message);
});

// Activity 2: Chaining Promises
// Task 3:
const dataServer1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
};

const dataServer2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 1000);
  });
};

const dataServer3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 1000);
  });
};

dataServer1()
  .then((data1) => {
    console.log(data1);

    return dataServer2();
  })
  .then((data2) => {
    console.log(data2);

    return dataServer3();
  })
  .then((data3) => {
    console.log(data3);
  });

// Activity 3: Using Async/Await
// Task 4:
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async/ await resolved values");
  }, 2000);
});

async function function1() {
  const result = await promise3;

  console.log(result);
}

function1();

// Task 5:
const promise4 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Async/await rejected value"));
  }, 2000);
});

async function function2() {
  try {
    const result = await promise4;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

function2();

// Activity 4: Fetching Data from an API
// Task 6:
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });

// Task 7:
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// Activity 5: Concurrent Promises
// Task 8:
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise A resolved");
  }, 1000);
});

const promiseB = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise B resolved");
  }, 2000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise C resolved");
  }, 3000);
});

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log(values);
});

// Task 9:
const promiseX = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise X resolved");
  }, 1000);
});

const promiseY = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Y resolved");
  }, 2000);
});

const promiseZ = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Z resolved");
  }, 3000);
});

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
  console.log(value);
});
