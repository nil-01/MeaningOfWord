 $("#search").click(function () {  
    const ele= document.getElementById("Meaning"); 
    const ele2= document.getElementById("MeaningNotFound");
    ele.innerHTML="";
    ele2.innerHTML=""; 

const word=  $("#meaningtxt").val(); 
console.log(word);
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
.then(response => response.json()).then(Meaning =>{
    const answer= Meaning[0].meanings[0].definitions[0].definition
    if(answer!=null)
    {
       
        ele.innerHTML=answer + "&#128515" ;
    }
    
})
.catch(error => {
    
     ele2.innerHTML="Error &#128528 ! No such word Found"
});
 });



