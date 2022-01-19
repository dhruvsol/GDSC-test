import axios from "https://cdn.skypack.dev/axios";

const first = await axios({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/photos",
});

const second = await axios({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
});

let count = 0;
const id = document.querySelector(".identifier");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const street = document.querySelector(".street");
const suite = document.querySelector(".suite");
const city = document.querySelector(".city");
const zipcode = document.querySelector(".zipcode");
const Phone_no = document.querySelector(".Phone_no");
const website = document.querySelector(".website");
const companyName = document.querySelector(".company-name");
const catchPhrase = document.querySelector(".catch-phrase");
const bs1 = document.querySelector(".bs");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const shuffle = document.querySelector(".shuff");

forward.addEventListener("click", () => {
  if (count == 9) {
    count = 0;
  } else {
    count += 1;
  }
  changeValue();
});
backward.addEventListener("click", () => {
  if (count == 0) {
    count = 9;
  } else {
    count -= 1;
  }
  changeValue();
});
shuffle.addEventListener("click", () => {
  count = Math.floor(Math.random() * 10);

  changeValue();
});
const changeValue = () => {
  id.innerHTML = second.data[count].id;
  name.innerHTML = second.data[count].name;
  email.innerHTML = second.data[count].email;
  street.innerHTML = second.data[count].address.street;
  suite.innerHTML = second.data[count].address.suite;
  city.innerHTML = second.data[count].address.city;
  zipcode.innerHTML = second.data[count].address.zipcode;
  Phone_no.innerHTML = second.data[count].phone;
  website.innerHTML = second.data[count].website;
  companyName.innerHTML = second.data[count].company.name;
  catchPhrase.innerHTML = second.data[count].company.catchPhrase;
  bs1.innerHTML = second.data[count].company.bs;
};
changeValue();
