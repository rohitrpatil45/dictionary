const meaning = document.querySelector('.word-meaning');
const inputTag = document.querySelector(".input-tag");
const btn = document.querySelector(".meaning-btn");
const containerBody = document.querySelector('.container')
const MyWord = document.querySelector(".your-word")



let InputValue = ""

inputTag.addEventListener('input', (e)=>{
  InputValue = e.target.value ;
   // console.log(e.target.value);
})


async function distionary(){
   try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${InputValue}`);
    const data = await res.json();
    const Wordmeaning = data[0].meanings[0].definitions[0].definition
    meaning.innerHTML = Wordmeaning;
   //  console.log(data);
    
   } catch (error) {
    console.log("OO bhai Error"), error;
    meaning.innerHTML = "this word has no meaning "
    
   }

};

btn.addEventListener('click',()=>{
MyWord.innerHTML = InputValue ;
   inputTag.value = ''
   distionary()
})

containerBody.addEventListener('keydown' , (e)=>{
  if (e.key === 'Enter') {
   MyWord.innerHTML = InputValue ;
  
   inputTag.value = ""
   distionary();
  }
})


