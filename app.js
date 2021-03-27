const myColors = ["green","blue","Red","royalblue",'white','#fc5c65','#2bcbba'];

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const text = document.querySelector('h2');

btn.addEventListener('click',()=>{
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor=myColors[randomNumber];
    color.textContent = myColors[randomNumber];     
})


function getRandomNumber(){
    let randomNumber = Math.round(Math.random()*(myColors.length-1));
    return randomNumber;
}





text.addEventListener('click',()=>{
    copyTextToClipboard(color.textContent)
})

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      document.querySelector(".popup").style.display='block'

      setTimeout(()=>{
          document.querySelector('.popup').style.display='none'
      },2000)
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }