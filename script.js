//syncrons 
function addSync(a, b) {
  return a + b;
}
const resultSync = addSync(5, 3);
console.log(resultSync);

//asyncrons
function addAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 4000); 
  });
}
addAsync(5, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(errorrr);
  });
