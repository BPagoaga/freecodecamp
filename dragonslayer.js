
slaying = true;     //initialisation de la condition de la boucle while à true
youHit = Math.floor(Math.random() * 2);     //coup aléatoire 0 ou 1 (math.random=> entre 0 et 1, *2 => entre 0 et 2, math.floor : arrondi à l'entier inférieur)
damageThisRound = Math.floor(Math.random() * 5 + 1);    //dégats donnés en un round
totalDamage = 0;    //initialisation de la variable dégats totaux

while( slaying ) {  //tant que le joueur n'a pas perdu (youHit = 0) ou que le dragon n'est pas battu (youHit < 4), le jeu continue
    
    if( youHit = 1 ){   //premier coup : soit le joueur touche, et le jeu continue, soit le joueur rate, et le jeu s'arrête
                
        totalDamage = totalDamage + damageThisRound;    //ajout des dégats du tour aux dégats totaux
        
        if( totalDamage >= 4 ){
            console.log("GG");
            slaying = false;    //le joueur a gagné, le jeu s'arrête
        }else {
            youHit = Math.floor(Math.random() * 2);     //on relance un tour
        }
    }else{
        console.log("Game over");   
        slaying = false;    //le joueur a perdu, le jeu s'arrête
    }
    
}
