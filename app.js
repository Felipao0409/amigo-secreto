// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


(function validaCampoAmigo(){
    let button = document.querySelector('.button-add');
    let amigo = document.getElementById("amigo");
       button.addEventListener("click", () => {

        if (amigo.value === ""){
            alert("Debe ingresar un amigo!");
            return false;
          }

        agregarAmigo();

       })
   
})();



function  agregarAmigo(){

   let amigoAnadido = document.getElementById('amigo').value;
   let listaAmigo = document.getElementById('listaAmigos')
   let amigo = document.getElementById("amigo");       
 

   amigos.push(amigoAnadido);

   listaAmigo.innerHTML = "";
   for (let i =0;i<amigos.length; i++){    
    listaAmigo.innerHTML += `<li>${amigos[i]}</li>`;
    
   } 
  
    amigo.value = "";   



    
}




let sortearAmigo = () => {

    let aleatorioAmigoSecreto = Math.floor(Math.random() * amigos.length);

    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML="";
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `😘💕El amigo secreto es: ${amigos[aleatorioAmigoSecreto]}`
    

}