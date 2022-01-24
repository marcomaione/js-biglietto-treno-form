let button = document.getElementById("genera")

button.addEventListener('click ',
    function() {
        let price = km * 0.21;
        let name = document.getElementById("name");
        let km = document.getElementById("km");
        let age = document.getElementById("age");

        if ( age = minorenne) {
            let discount = price / 100 * 20 ;
            var finalPrice = price - discount;
            document.getElementById("costo").value = finalPrice + "€";
        }   
        
    }
