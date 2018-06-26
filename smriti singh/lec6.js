window.onload = function () {

    let addtask = document.getElementById('addtask')
    let newtask = document.getElementById('newtask')
    let list = document.getElementById('list')

    addtask.onclick = function () {
        let start= new date().getTime()
        list.innerHTML + = "<li>" + newtask.value + "</li>"
        console.log(Date().hetTime()-start)
    }
    /*<input id="newtask">
        temp1.innertext""
    addtask.ndisplay = function(){
    if(newtask%3==0)
    {   document.getElementById("demo").innerHTML="fizz"}

    else if(newtask%5 && newtask%15 == 0){
        alert="buzz"}
    }
