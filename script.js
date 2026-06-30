const uhrElement=document.getElementById('uhr');
 function zeigezeit () { 
     let  jetzt = new Date();
     let zeitText = jetzt.toLocaleTimeString();
     uhrElement.innerText = zeitText;
 }
setInterval(zeigezeit  , 1000);
