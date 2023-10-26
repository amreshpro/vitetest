import './style.css'

const body = document.getElementById('body')
const btn = document.getElementById('btn')



const onBGChangeHandler = ()=>{
body.style.backgroundColor="#565656";
console.log("change background")
}


btn.addEventListener('click', onBGChangeHandler);