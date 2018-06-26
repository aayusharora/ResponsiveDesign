window.onload = function(){
    var price = document.getElementById('price');
    var kilo = document.getElementById('km');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    btn.onclick = function(){

        let totalPrice = km(kilo.value) + time(price.value);
        result.innerHTML = totalPrice;

    }
}
