// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

// creo funzione che al 'click' mi calcoli il prezzo del panino
document.getElementById('calcolo').addEventListener('click',
    function() {    
        let prezzoIngredienti = 0;
        let ingredienti = document.getElementsByClassName('ingrediente');
        console.log(ingredienti);

        // ciclo for che aggiunge le mie scelte
        for(let i = 0; i < ingredienti.length; i++) {
            if (ingredienti[i].checked)
            prezzoIngredienti += parseInt(ingredienti[i].value);
        }
        console.log(prezzoIngredienti);

        let prezzoIniziale = 50;
        // array di coupon
        var coupon = ['3D04I2D0', '3I2C0L1N0', 'SCONTO30'];
        let sconto = document.getElementById('discount').value;
        console.log(sconto);
        
        if(coupon.includes(sconto)) {
            prezzoFinale = (prezzoIngredienti + prezzoIniziale) * 0.7;
        } 
        else
        {
            prezzoFinale = prezzoIngredienti + prezzoIniziale;
        }
        console.log(prezzoFinale);

        document.getElementById('price').innerHTML = '$' + prezzoFinale;
    }
)