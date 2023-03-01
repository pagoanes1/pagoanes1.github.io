
var clic = 1;

function funcExperiencia(){ 

   if(clic==1){

   document.getElementById("cajaExperiencia").style.display = 'none';

   clic = clic + 1;

   } else{

       document.getElementById("cajaExperiencia").style.display = 'block';      

    clic = 1;

   }   

}

function funcHabilidades(){ 

   if(clic==1){
      
      document.getElementById("cajaHabilidades").style.display = 'none';
      
   clic = clic + 1;

   } else{

       document.getElementById("cajaHabilidades").style.display = 'block';      

    clic = 1;

   }   
}