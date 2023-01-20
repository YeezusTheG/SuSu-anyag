function alert_input(){
    let str = $("input").value;
    myalert(str)
}

function alert_input(id){
    let str = $(id).value;
    myalert(str + "!");
}

function alert_input(id, b = true){
    let str = $(id).value;
    if(b){
        myalert(str + "!");
    }
    else{
        myalert();
    }
}
function AddClassToP(id, p_class){
    let obj = $(id);
    obj.classList.add(p_class);
}
function RemoveClassFromP(id,p_class){
    let obj = $(id);
    obj.classList.remove(p_class)
}

function addhtml(id){
    let tartalom = "<p class='kekszoveg' >Ez az új szöveg</p>";
    $(id).innerHTML = tartalom;
}