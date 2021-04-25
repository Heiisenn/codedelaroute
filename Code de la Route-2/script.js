var q = 0

function numeroQuestion(){

    reponses = []

    document.getElementById("bouton1").classList.remove('active')
    document.getElementById("bouton1").classList.add('bouton')

    document.getElementById("bouton2").classList.remove('active')
    document.getElementById("bouton2").classList.add('bouton')

    document.getElementById("bouton3").classList.remove('active')
    document.getElementById("bouton3").classList.add('bouton')

    document.getElementById("bouton4").classList.remove('active')
    document.getElementById("bouton4").classList.add('bouton')

    document.getElementById('status').innerText = "Question " + compteur

    flagA = false // Remise à 0 des flags après chaque validation
    flagB = false
    flagC = false
    flagD = false
    document.getElementById("boutonValider").style.visibility = "visible"
    document.getElementById("questionSuiv").style.visibility = "hidden"

    q = Math.floor((Math.random() * 30) +1);  //fonction de nombre aléatoire entre 1 et 30 pour var q
    
    console.log(q)

    document.getElementById('image').src = "images/" + q +  ".jpg" // L'image affichée est q.jpg

    if(q == 1){
        window.reponsesq = ["a"]
    }
    if(q == 2){
        window.reponsesq = ["c"]
    }
    if(q == 3){
        window.reponsesq = ["a","c"]
    }
    if(q == 4){
        window.reponsesq = ["a"]
    }
    if(q == 5){
        window.reponsesq = ["a","c"]
    }
    if(q == 6){
        window.reponsesq = ["a"]
    }
    if(q == 7){
        window.reponsesq = ["b","c"]
    }
    if(q == 8){
        window.reponsesq = ["b","c"]
    }
    if(q == 9){
        window.reponsesq = ["a","c"]
    }
    if(q == 10){
        window.reponsesq = ["b"]
    }
    if(q == 11){
        window.reponsesq = ["b"]
    }
    if(q == 12){
        window.reponsesq = ["a","c"]
    }
    if(q == 13){
        window.reponsesq = ["b","c"]
    }
    if(q == 14){
        window.reponsesq = ["a","c"]
    }
    if(q == 15){
        window.reponsesq = ["b","d"]
    }
    if(q == 16){
        window.reponsesq = ["a","d"]
    }
    if(q == 17){
        window.reponsesq = ["b"]
    }
    if(q == 18){
        window.reponsesq = ["a","c"]
    }
    if(q == 19){
        window.reponsesq = ["b"]
    }
    if(q == 20){
        window.reponsesq = ["a","c"]
    }
    if(q == 21){
        window.reponsesq = ["a"]
    }
    if(q == 22){
        window.reponsesq = ["a"]
    }
    if(q == 23){
        window.reponsesq = ["a","c"]
    }
    if(q == 24){
        window.reponsesq = ["a","c"]
    }
    if(q == 25){
        window.reponsesq = ["a","b"]
    }
    if(q == 26){
        window.reponsesq = ["a","c"]
    }
    if(q == 27){
        window.reponsesq = ["b"]
    }
    if(q == 28){
        window.reponsesq = ["a","c"]
    }
    if(q == 29){
        window.reponsesq = ["a","c"]
    }
    if(q == 30){
        window.reponsesq = ["a"]
    }


}

let compteur = 1

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

succes = 0

function checkReponses(){
document.getElementById("boutonValider").style.visibility = "hidden"
passe.push(q) // On ajoute l'image qui vient de tomber dans le tableau de tri "passe"
reponses.sort() // On met les reponses de l'utilisateur dans l'ordre alphabétique (Facilite la comparaison avec les bonnes reponses)
console.log(reponses)

if (JSON.stringify(reponses) === JSON.stringify(window.reponsesq)){ // comparaison, il faut que je trouve un bon moyen de le faire
let reussite = true
document.getElementById('status').innerText = "Question " + compteur + " : Succès !"
document.getElementById('status').style.color = "Green"
compteur++
succes++
console.log(reussite)
if(succes == 5){
    compteur--
    let fini = true
    console.log(fini)
    document.getElementById("questionSuiv").innerText = "Résultats"
    document.getElementById("questionSuiv").setAttribute('onclick', "resultats()")
}

document.getElementById("questionSuiv").style.visibility = "visible"
}
else{
let reussite = false
document.getElementById('status').innerText = "Question " + compteur + " : échec :("
document.getElementById('status').style.color = "Red"
compteur++
console.log(reussite)
document.getElementById("questionSuiv").style.visibility = "visible"
}


}

function resultats(){
    if(confirm('Vous avez 5 réponses correctes sur ' + compteur +' questions ! Pour recommencer, cliquez sur OK :)')){
    window.location.reload();  
}

}
