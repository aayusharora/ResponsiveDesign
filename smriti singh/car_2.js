   let time = (function(){
    function calculatePrice(time) {
        let price = time<=5?0:(time<10?(time-5)*10:(50+(time-10)*15));
        return price;
    }

    return calculatePrice;

})();