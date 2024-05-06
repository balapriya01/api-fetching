const URL = "https://dogapi.dog/api/v2/breeds";

const content = document.getElementsByClassName("content");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Async-await
// const getFacts = async () => {
//   let promise = await fetch(URL);
//   console.log(promise);
//   let data = await promise.json();

//   content[0].innerHTML = data.data[getRandomInt(10)].attributes.description;

//   console.log(data.data[getRandomInt(10)].attributes.description);
// };


//Promises
const getFacts = () => {
  let promise = fetch(URL);

  promise
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // let data = res;
      content[0].innerHTML = res.data[getRandomInt(10)].attributes.description;
      // console.log(data.data);
    });
};
