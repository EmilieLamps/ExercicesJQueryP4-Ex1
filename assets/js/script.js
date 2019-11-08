$(function(){
  var userChoice; // récupere la valeur de l'HTML (id)
  var computerChoice;
  var result;
  // Récupérer la valeur au clic de séléction (choix utilisateur)
  $('option').click(function(){ // option de l'HTML (select)
    userChoice = $(this).val()
  });
  $(document).click(function computerRandom(){ // Créer le choix aléatoire de l'ordinateur (document.keypress permet de verifier la fonction)
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1){ // mettre un == pour attribuer une valeur
      computerChoice = 'Pierre'; // pas de double égal pour la correspondance (nécéssaire dans les paramètres parenthèses mais dans les accolades)
    }
    else if ( computerChoice == 2){
      computerChoice = 'Papier';
    }
    else {
      computerChoice = 'Ciseaux';
    }
     // alert(computerChoice)
  });
  // Créer une fonction qui va comparer l'égalité la défaite et la victoire
  $('#submit').click(function compareResult(){ // le bouton fonctionne (vérifié par une alerte)
     if (computerChoice == 'Pierre' && userChoice == 'rock'){
      alert('Match nul') //fonctionne
     }
     else if (computerChoice == 'Papier' && userChoice == 'paper'){
       alert('Match nul') //foncitonne
     }
     else if (computerChoice == 'Ciseaux' && userChoice == 'scissors'){
       alert('Match nul') //fonctionne
     }
     else if (computerChoice == 'Pierre' || userChoice == 'paper'){
       alert('Gagné')
     }
     else if (computerChoice == 'Pierre' || userChoice == 'scissors'){
       alert('Perdu')
     }
     else if (computerChoice == 'Papier' || userChoice == 'scissors'){
       alert('Gagné')
     }
     else if (computerChoice == 'Papier' || userChoice == 'rock'){
       alert('Perdu')
     }
     else if (computerChoice == 'Ciseaux' || userChoice == 'paper'){
       alert('Perdu')
     }
     else if (computerChoice == 'Ciseaux' || userChoice == 'rock'){
       alert('Gagné')
     }
  })
});
