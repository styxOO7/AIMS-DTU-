function fun(){
    let n = document.getElementById('name').value;
    let e = document.getElementById('mail').value;
    let s = document.getElementById('sub').value;
    let m = document.getElementById('msg').value;
    if(m.length && n.length && e.length && s.length) setTimeout( clearAll, 1000);
}
// setTimeout( fun(), 1000);
function clearAll(){
 
    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('sub').value='';
    document.getElementById('msg').value='';
}

// var load = 0;

// document.getElementById('goForm').onload = function(){
//     /*Execute on every reload on iFrame*/
//     load++;
//     if(load >= 1){
//         /*Second reload is a submit*/
//         document.location = "https://www.google.com/";
//     }
// }
