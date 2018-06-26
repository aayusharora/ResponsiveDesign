
let km = (function(){
    function calculatePrice(km) {
       let price = km<=5?km*10:(km<10?50+(km-5)*15:(75+50+(km-10)*25))
        return price;
    }

    return calculatePrice;

})();
