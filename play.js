async function asyncLoop() {
    for (let i = 0; i < 10; i++) {
      asyncOperation(i);
    }
  }
  
  async function asyncOperation(index) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation, such as fetching data from a server
      setTimeout(() => {
        console.log("Async operation", index);
        resolve();
      }, 1000);
    });
  }
  
  asyncLoop();