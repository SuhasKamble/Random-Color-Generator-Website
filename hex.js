const myColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const text = document.querySelector("h2")


btn.addEventListener("click",()=>{
    let hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += myColors[getRandomNumber()];
    }
console.log(hexColor)
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
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