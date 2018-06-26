

var x;
var y;
var kilo; var time;

let sp=document.getElementById("sp");
let btn=document.getElementById("btn");

btn.onclick=function f() {
    kilo=document.getElementById("kilo").value;
     time=document.getElementById("time").value;

    (function (){
        function calP(km)
        { var price
            if(km>=0 && km<5)
                price=0
            else if(km>=5 && km<10)
                price=10
            else
                price=15
            return price;
        }
        x=calP(kilo);
    })();

    (function(){
        function calP(time)
        { var price
            if(time>=0 && time<5)
                price=0
            else if(time>=5 && time<10)
                price=10
            else
                price=25
            return price;
        }
        y=calP(time);
    })();

    var k = x + y;
console.log(k)

    sp.innerHTML="<b>"+k+"</b>"

}