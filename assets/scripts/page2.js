import axios from "https://cdn.skypack.dev/axios";

const first = await axios({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/photos",
});

let x =0;
const id1 = document.querySelector('.id-page2');
const title  = document.querySelector('.title');
const src = document.querySelector('.img');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const shuffle = document.querySelector('.shuffle');

const changeValue = ()=> {
    id1.innerHTML=first.data[x].id
    title.innerHTML=first.data[x].title
    src.src=first.data[x].thumbnailUrl
}
forward.addEventListener('click',()=>{
    x+=1;
    changeValue();
})
backward.addEventListener('click',()=>{
    if(x==0){
        x=5000;
    }else {
        x-=1
    }
    changeValue();
})
shuffle.addEventListener('click',()=>{
   x= Math.floor(Math.random()*5000)
   changeValue();
})

changeValue();