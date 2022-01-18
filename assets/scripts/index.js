import axios from 'https://cdn.skypack.dev/axios';

const first  = await axios({
    method : "GET",
    url:"https://jsonplaceholder.typicode.com/photos"

})
// data.length=4;
// console.log(first.data);

const second =  await axios({
    method:"GET",
    url:"https://jsonplaceholder.typicode.com/users"
})
// data2=second.data
let count = 0;
const id = document.querySelector('.id')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const street = document.querySelector('.street')
const suite = document.querySelector('.suite')
const city = document.querySelector('.city')
const zipcode = document.querySelector('.zipcode')
const Phone_no = document.querySelector('.Phone_no')
const website = document.querySelector('.website')
const companyName = document.querySelector('.Company-name')
const catchPhrase = document.querySelector('.catchPhrase')
const bs = document.querySelector('bs')
const forward = document.querySelector('.fa-forward')
const backward = document.querySelector('.fa-backward')
const shuffle = document.querySelector('.fa-random')



forward.addEventListener('click',()=>{
   console.log(count);
if(count==9){
    count=0;

}
    count+=1;
    changeValue();
    


})
const changeValue=()=>{

    id.innerHTML=second.data[count].id
    name.innerHTML=second.data[count].name
    email.innerHTML=second.data[count].email
    street.innerHTML=second.data[count].address.street
    suite.innerHTML=second.data[count].address.suite
    city.innerHTML=second.data[count].address.city
    zipcode.innerHTML=second.data[count].address.zipcode
    Phone_no.innerHTML=second.data[count].phone
    website.innerHTML=second.data[count].website
    companyName.innerHTML=second.data[count].company.name
    catchPhrase.innerHTML=second.data[count].company.catchPhrase
    bs.innerHTML=second.data[count].company.bs
}
changeValue();