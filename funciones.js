setInterval(cambiarImagen,3000);
var foto=1;

function cambiarImagen(){
    if(foto==1){
    document.getElementById("1").hidden=true;
    document.getElementById("2").hidden=false;
    foto++;
}else if(foto==2){
    document.getElementById("2").hidden=true;
    document.getElementById("3").hidden=false;
    foto++;
}else if(foto==3){
    document.getElementById("3").hidden=true;
    document.getElementById("4").hidden=false;
    foto++;
}else if(foto==4){
    document.getElementById("4").hidden=true;
    document.getElementById("1").hidden=false;
    foto=1;
}
}


function enviar(){
    var nombre = document.getElementById("nombre");

    localStorage.setItem("nombre",nombre.value);

    var email = document.getElementById("mail");

    localStorage.setItem("email",email.value);
    }

    function comprar(){
        var inDirec = document.getElementById("direc");
        var inLocal = document.getElementById("local") ;
        var inMail = document.getElementById("mail");
        var inTel = document.getElementById("tel");
        if (inDirec == null || inLocal == null || inMail == null || inTel == null){
        alert("No completaste todos los campos")
        }else
        alert("tu compra fue exitosa!")
    }

