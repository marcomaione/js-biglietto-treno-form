let button = document.getElementById("genera")

button.addEventListener('click',
    function() {
        let km = document.getElementById("km").value;
        let price = km * 0.21;
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        document.querySelector('.second').style.display='flex';

        let posto = Math.floor(Math.random() * 10)
        let cp = Math.floor(Math.random() * (100000 - 90000) + 90000);
        console.log(km)
        console.log(name)
        console.log(age)

        if ( age == "minorenne") {
            let discount = price / 100 * 20 ;
            let finalPrice = price - discount;
            document.getElementById("costo").innerHTML = finalPrice + "€";
            price.toFixed(2);
            document.getElementById('offerta').innerHTML = "biglietto scontato"
            
        
        } else if ( age == "pensionato") {
            let senior = price /100 * 40 ;
            let finalPrice = price - senior;
            document.getElementById("costo").innerHTML = finalPrice + "€";
            price.toFixed(2);
            document.getElementById('offerta').innerHTML = "biglietto scontato"

        } else {
            document.getElementById("costo").innerHTML = price + "€";
            price.toFixed(2);
            document.getElementById('offerta').innerHTML = "biglietto standard"
        }  
        
        document.getElementById('name_output').innerHTML = name;
        document.getElementById('n-carrozza').innerHTML = posto;
        document.getElementById('cp').innerHTML = cp;
        
    })
