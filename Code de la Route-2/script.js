function numeroQuestion(){

    q = Math.floor((Math.random() * 30) +1);  //fonction de nombre aléatoire entre 1 et 30 pour var q
    console.log(q)

    document.getElementById('image').src = "images/" + q +  ".jpg" // L'image affichée est q.jpg
}

let passe = [] // déclaration du tableau qui va être utilisé afin de trier les images déjà passées ou non

let reponses = [] // déclaration du tableau qui va servir à stocker les réponses choisies par l'utilisateur

let flagA = false // Créations des flags, qui permettent de définir si oui ou non un bouton a déjà été cliqué
let flagB = false
let flagC = false
let flagD = false

function ajoutReponseA(){
    if (flagA == false){ // Si le bouton A n'a jamais été clique
    
    reponses.push("a") // On stocke la réponse A dans le tableau "reponses"
    console.log(reponses)
    document.getElementById('bouton1').classList.remove('bouton') // On effectue les changement de classe
    document.getElementById('bouton1').classList.add('active')
    flagA = true; // On informe que le bouton a déjà été cliqué (Mode "actif")
}

else{
    flagA = false // si le bouton a déjà été clique (actif)
    console.log(reponses)
    document.getElementById('bouton1').classList.remove('active') // On rechange les classes
    document.getElementById('bouton1').classList.add('bouton')
    reponses = reponses.filter(item => item !== "a") // On retire la réponse "A" du tableau "reponses"

}
}

//Same pour les autres boutons, à essayer d'opti pour encore plus de SWAG

function ajoutReponseB(){
    if (flagB == false){
    
    reponses.push("b")
    console.log(reponses)
    document.getElementById('bouton2').classList.remove('bouton')
    document.getElementById('bouton2').classList.add('active')
    flagB = true;
}

else{
    flagB = false
    console.log(reponses)
    document.getElementById('bouton2').classList.remove('active')
    document.getElementById('bouton2').classList.add('bouton')
    reponses = reponses.filter(item => item !== "b")

}
}


function ajoutReponseC(){
    if (flagC == false){
    
    reponses.push("c")
    console.log(reponses)
    document.getElementById('bouton3').classList.remove('bouton')
    document.getElementById('bouton3').classList.add('active')
    flagC = true;
}

else{
    flagC = false
    console.log(reponses)
    document.getElementById('bouton3').classList.remove('active')
    document.getElementById('bouton3').classList.add('bouton')
    reponses = reponses.filter(item => item !== "c")

}
}

function ajoutReponseD(){
    if (flagD == false){
    
    reponses.push("d")
    console.log(reponses)
    document.getElementById('bouton4').classList.remove('bouton')
    document.getElementById('bouton4').classList.add('active')
    flagD = true;
}

else{
    flagD = false
    console.log(reponses)
    document.getElementById('bouton4').classList.remove('active')
    document.getElementById('bouton4').classList.add('bouton')
    reponses = reponses.filter(item => item !== "d")

}
}


function checkReponses(){
passe.push(q) // On ajoute l'image qui vient de tomber dans le tableau de tri "passe"
reponses.sort() // On met les reponses de l'utilisateur dans l'ordre alphabétique (Facilite la comparaison avec les bonnes reponses)
console.log(reponses)

if (reponses == reponsesq){ // comparaison, il faut que je trouve un bon moyen de le faire


}


}