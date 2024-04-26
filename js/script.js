const find = (selector) => {
    return document.querySelector(selector);
}


// const vladBtn = find("#vlad");
const andreeaBtn = find('.andreea')

//
// vladBtn.addEventListener("click", ()=>{
//     alert("Hello vlad!");
// })

andreeaBtn.addEventListener('click',()=>{
    alert('Hello,Andreea!')
    console.log(1)
})