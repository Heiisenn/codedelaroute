var q = 0

function numeroQuestion(){

    reponses = [];
    
    document.getElementById('correction').innerText = ""

    document.getElementById("bouton1").classList.remove('active')
    document.getElementById("bouton1").classList.add('bouton')

    document.getElementById("bouton2").classList.remove('active')
    document.getElementById("bouton2").classList.add('bouton')

    document.getElementById("bouton3").classList.remove('active')
    document.getElementById("bouton3").classList.add('bouton')

    document.getElementById("bouton4").classList.remove('active')
    document.getElementById("bouton4").classList.add('bouton')

    document.getElementById('status').innerText = "Question " + compteur
    document.getElementById('status').style.color = "Black"

    flagA = false // Remise à 0 des flags après chaque validation
    flagB = false
    flagC = false
    flagD = false
    document.getElementById("boutonValider").style.visibility = "visible"
    document.getElementById("questionSuiv").style.visibility = "hidden"

    q = Math.floor((Math.random() * 30) +1);  //fonction de nombre aléatoire entre 1 et 30 pour var q
    while (passe.includes(q)){ q = Math.floor((Math.random() * 30) +1);}  //fonction de nombre aléatoire entre 1 et 30 pour var q
    console.log(q)

    document.getElementById('image').src = "images/" + q +  ".jpg" // L'image affichée est q.jpg

    if(q == 1){
        window.reponsesq = ["a"]
        window.correctionq = "Si mon régulateur est équipé de cette fonctionnalité « aide au maintien des distances de sécurité, en le réglant à 90 km/h, le système va contrôler automatiquement la distance qui me sépare du véhicule qui me précède et ralentir automatiquement si besoin."
    }
    if(q == 2){
        window.reponsesq = ["c"]
        window.correctionq = "Le piéton situé entre les deux véhicules en stationnement s’apprête à traverser sans regarder dans ma direction et sans assurance qu’il m’ait vu. Je suis donc particulièrement vigilant par rapport à cet usager vulnérable."
    }
    if(q == 3){
        window.reponsesq = ["a","c"]
        window.correctionq = "Dans mes déplacements de nuit je dois être attentif à la route tout en respectant les autres usagers. J’aperçois les feux d’un véhicule circulant en face, donc je maintiens mes feux de croisement pour ne pas éblouir le conducteur et je porte mon regard vers l’accotement droit pour ne pas être ébloui."
    }
    if(q == 4){
        window.reponsesq = ["a"]
        window.correctionq = "Venant de traverser une zone où la vitesse était limitée à 70 km/h, je peux reprendre une allure réglementaire (80 ou 90 km/h selon mon statut de jeune conducteur ou non), en fonction des conditions de circulation, après ce panneau."
    }
    if(q == 5){
        window.reponsesq = ["a","c"]
        window.correctionq ="Chaque trait séparant la chaussée de la bande d’arrêt d’urgence mesure 38 m, longueur égale à la distance parcourue en 1 seconde à 130 km/h. Le temps de réaction moyen étant d’une seconde, je dois laisser une distance de sécurité avec le véhicule qui me précède, équivalente au double de ce temps, soit 2 secondes. C’est-à-dire visuellement 2 traits de la ligne de rive. « un trait=danger, 2 traits=sécurité »"
    }
    if(q == 6){
        window.reponsesq = ["a"]
        window.correctionq ="La position P de la boîte automatique permet de retenir le véhicule en stationnement. Un dispositif de sécurité empêche d’enlever ce frein automatique si je n’appuie pas sur la pédale de frein."
    }
    if(q == 7){
        window.reponsesq = ["a","c"]
        window.correctionq = "Si je ne m’arrête pas, il s’agit d’un refus d’obtempérer. L’amende maximale est de 3750 euros et je risque un retrait de 6 points sur mon permis de conduire. J’encours même une peine d’emprisonnement de 3 mois."
    }
    if(q == 8){
        window.reponsesq = ["b","c"]
        window.correctionq = "Mon regard et mon cerveau ne sont pas capables de traiter toutes les informations au même moment. L’expérience acquise au fil des kilomètres parcourus et des situations rencontrées m’aidera à porter mon attention sur les indices les plus pertinents."
    }
    if(q == 9){
        window.reponsesq = ["a","c"]
        window.correctionq = "Je dois en permanence être attentif à la route, car des motocyclistes peuvent remonter les files lors des ralentissements. La circulation inter-files est expérimentée depuis le 1er février 2016 dans 11 départements."
    }
    if(q == 10){
        window.reponsesq = ["b"]
        window.correctionq = "Le ralentissement permet de maîtriser la trajectoire."
    }
    if(q == 11){
        window.reponsesq = ["b"]
        window.correctionq = "En tournant à droite devant le cycliste, je risque de le heurter. En tant qu’automobiliste je dois garantir la sécurité des usagers les plus vulnérables."
    }
    if(q == 12){
        window.reponsesq = ["a","c"]
        window.correctionq = "L’ordre d’action en cas d’un accident est : protéger, alerter puis secourir. Dans la phase d’alerte, je dois donner des informations précises sur l’état de la victime aux équipes de secours afin de leur permettre d’intervenir le plus efficacement possible."
    }
    if(q == 13){
        window.reponsesq = ["b","c"]
        window.correctionq = "Des passagers sortant du bus peuvent traverser la chaussée au niveau de la zone B. En plaçant mon pied devant le frein je réduis mon temps de réaction si je dois m’arrêter pour laisser passer un piéton."
    }
    if(q == 14){
        window.reponsesq = ["a","c"]
        window.correctionq = "Si mon véhicule est équipé du système ecall, en cas de choc important, un appel téléphonique alerte les équipes de secours, en géolocalisant l’accident. Ce système permet de réduire le délai d’intervention, particulièrement en rase campagne, sans témoins."
    }
    if(q == 15){
        window.reponsesq = ["b","d"]
        window.correctionq = "La distance de sécurité minimale à respecter doit être équivalente à la distance parcourue en deux secondes, soit le double du temps de réaction moyen. Je ne peux pas signaler une manœuvre de dépassement immédiatement, car je vois un véhicule sur le point de me dépasser dans le rétroviseur."
    }
    if(q == 16){
        window.reponsesq = ["a","d"]
        window.correctionq = "La réglementation ne m’interdit pas de dépasser. Cependant le deux-roues risque d’être déstabilisé en passant sur les rails, il peut faire un écart de trajectoire. De plus il est préférable de franchir avec prudence les passages à niveaux. J’ai le temps de dépasser plus tard."
    }
    if(q == 17){
        window.reponsesq = ["b"]
        window.correctionq = "Porter son regard sur la droite permet d’être moins ébloui lors d’un croisement et facilite la tenue de la trajectoire."
    }
    if(q == 18){
        window.reponsesq = ["a","c"]
        window.correctionq = "Plus je circule vite, plus ma vision est « en tunnel ». Il faut donc en permanence balayer du regard mon environnement et contrôler régulièrement les rétroviseurs pour anticiper les événements, par exemple l’arrivée d’un motocycliste peu visible."
    }
    if(q == 19){
        window.reponsesq = ["b"]
        window.correctionq = "Je dois vérifier que le conducteur m’a vu. Au-delà de la règle, je dois m’assurer que je suis visible et je dois anticiper le comportement des autres conducteurs."
    }
    if(q == 20){
        window.reponsesq = ["a","d"]
        window.correctionq = "Le feu est rouge, en cessant d’accélérer, mon véhicule va ralentir peu à peu, et je n’ai pas besoin de rétrograder. Si je rétrograde, je vais augmenter le régime du moteur, et donc ma consommation de carburant."
    }
    if(q == 21){
        window.reponsesq = ["a"]
        window.correctionq = "Le faisceau des feux de croisement est asymétrique. Il éclaire en effet davantage le côté droit de la chaussée où est implantée la signalisation verticale et où peuvent éventuellement se trouver des piétons. Ce réglage est normal et permet de ne pas éblouir les automobilistes venant en sens inverse. Je ne dois pas modifier ce réglage. Je dois, en revanche, régler la hauteur de mes feux lorsque mon véhicule est chargé pour ne pas éblouir les autres usagers. Ce réglage se fait généralement depuis le poste de conduite."
    }
    if(q == 22){
        window.reponsesq = ["a"]
        window.correctionq = "Mon permis de conduire obtenu, je dois être particulièrement vigilant aux situations nouvelles que je vais rencontrer et qui vont enrichir mon expérience. Les vitesses spécifiques « jeune conducteur » me permettent d’anticiper et d’adopter le bon comportement. En 2014, 316 conducteurs novices sont décédés sur les routes."
    }
    if(q == 23){
        window.reponsesq = ["a","c"]
        window.correctionq = "La visibilité est réduite. Pour circuler en toute sécurité, j’allume obligatoirement mes feux de croisement et de brouillard arrière."
    }
    if(q == 24){
        window.reponsesq = ["a","c"]
        window.correctionq = "La zone d’incertitude est la zone dans laquelle un autre usager risque de se déplacer dans le temps qui me sépare de lui. Les piétons ou les cyclistes peuvent rapidement changer de trajectoire ou ne pas attendre que la signalisation les autorise à se déplacer. En leur présence, je me prépare à m’arrêter à temps (à 50 km/h, un véhicule progresse de 15 m par seconde et a besoin de 25 m pour s’arrêter)."
    }
    if(q == 25){
        window.reponsesq = ["a","b"]
        window.correctionq = "La signalisation m’indique une vitesse limitée sur une certaine distance. J’adapte mon allure pour tenir compte du virage et de la faible visibilité à sa sortie."
    }
    if(q == 26){
        window.reponsesq = ["a","c"]
        window.correctionq = "L'implantation d'un radar contrôlant la vitesse intervient en priorité sur les zones où se produisent des accidents et où la vitesse excessive est un facteur aggravant. Sur autoroute, où la vitesse moyenne pratiquée est déjà élevée, les radars permettent de lutter contre les grands excès de vitesse."
    }
    if(q == 27){
        window.reponsesq = ["b"]
        window.correctionq = "Sur cette voie, je longe une piste cyclable. Si je m’arrête le long du trottoir pour faire descendre mon passager j’obligerais un cycliste qui arriverait derrière moi à quitter sa voie réservée au risque de se faire heurter par un autre véhicule. Je cherche donc un autre endroit mieux adapté à la dépose de passager."
    }
    if(q == 28){
        window.reponsesq = ["a","c"]
        window.correctionq = "L’état des pneumatiques influe directement sur les réactions de mon véhicule. Je m’assure de leur bon état et de leur gonflage selon les normes préconisées par le constructeur."
    }
    if(q == 29){
        window.reponsesq = ["a","c"]
        window.correctionq = "Le compte-tour est un élément du tableau de bord qui m’indique la vitesse de rotation du moteur et m’aide à choisir le bon rapport de vitesse pour une conduite souple et économique."
    }
    if(q == 30){
        window.reponsesq = ["a"]
        window.correctionq = "Si mon véhicule est équipé de l’Aide au Freinage d’Urgence (AFU), il est également équipé de l’ABS."
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
if(reponses.length === 0){
    alert("Attention, vous n'avez pas mis de réponse !")
}
else{
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
document.getElementById('correction').innerText = correctionq
document.getElementById('status').style.color = "Red"
compteur++
console.log(reussite)
document.getElementById("questionSuiv").style.visibility = "visible"
}
}


}



function resultats(){

    let pourcentage = (5 / compteur) * 100
    pourcentage = Math.round(pourcentage * 10) / 10
    if(confirm('Vous avez 5 réponses correctes sur ' + compteur +' questions, soit ' + pourcentage +   '% de réussite. Pour recommencer, cliquez sur OK :)')){
    window.location.reload();  
}

}
