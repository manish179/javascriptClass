let img_array=['ash.jpg','anime.jpg','vegeta.JPG','pikachu.JPG','luffy.JPG']
let array_length=img_array.length
let i=0
let set= setInterval (slider,3000);
//slider -> user define function
// 5000 -> 5seconds

function slider(){
    i++
    i=i%array_length
    //i=0%5=0
    document.getElementById('image').src="images/" + img_array[i]
    
}

function next(){
    i++
    i=i%array_length
    document.getElementById('image').src="images/" + img_array[i]
    
}

function prev(){
    i--
    if (i<0){
        // i=img_array.length
        i=array_length-1
    }
    
    document.getElementById('image').src="images/" + img_array[i]
    
}
function stops(){
    clearInterval(set)

}

    function starts(){
   set= setInterval (slider,3000);
}






