let click=document.querySelector('.Pop-up')
// let clickClose=document.querySelector('span')
function showPopup(){
    click.classList.toggle('Pop-up-hidden')
}
let button1=document.querySelector('.header_button')
button1.onclick=()=>{
    showPopup()
}
// clickClose.onclick=()=>{
//     showPopup() 
// }
let mainQuestion=document.getElementsByClassName('Main-question')
for (let index = 0; index < mainQuestion.length ; index++) {
    mainQuestion[index].onclick=()=>{
        let answer=mainQuestion[index].querySelector('.answer')
        answer.classList.toggle('answer-hidden')
    }
}
function entry(id){
 let inputValue=document.querySelector(`#${id}`).value
 document.querySelector(`#${id}_pet`).innerHTML=inputValue
}