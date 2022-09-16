const botao = document.getElementById ("botao")
var a = document.getElementById ("a1")
var b = document.getElementById ("b1")
var c = document.getElementById ("c1")
botao.addEventListener ("click", funcao)
function funcao (){ 
    if (isNaN (a) == true && isNaN (b)== true && isNaN (c) == true){
        document.getElementById ("1etapa").innerHTML = "Δ =" + b.value+"   ²"+"-4"+(".")+a.value+(".")+c.value
        document.getElementById ("2etapa").innerHTML = "Δ =" + parseInt(b.value) * parseInt(b.value) +"-4"+(".")+a.value+(".")+c.value
        document.getElementById ("3etapa").innerHTML = "Δ =" + parseInt(b.value) * parseInt(b.value)  + +(parseInt(a.value) * parseInt(c.value) * -4)
        document.getElementById ("4etapa").innerHTML = "Δ =" + (parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4)                           
        document.getElementById ("11etapa").innerHTML = "x =" + ("-") + "("+b.value+")" + "± √"+ (parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4) + "/2."+a.value
        document.getElementById ("22etapa").innerHTML = "x = -" + "("+b.value+")" + "±" + parseInt(Math.sqrt((parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4))) +"/"+ 2 * a.value
        document.getElementById ("33etapa").innerHTML = "x1 = -" + "("+b.value+")"+ "+" + parseInt(Math.sqrt((parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4)))+"/" + 2 * a.value
        document.getElementById ("44etapa").innerHTML = "x1 =" + (-(b.value) + parseInt(Math.sqrt((parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4)))) / (2 * a.value)
        document.getElementById ("etapa55").innerHTML = "x2 = -" + "("+b.value+")"+"-"+ parseInt(Math.sqrt((parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4)))+"/" + 2 * a.value
        document.getElementById ("66etapa").innerHTML = "x2 =" + (-(b.value) - parseInt(Math.sqrt((parseInt(b.value) * parseInt(b.value) + parseInt(a.value) * parseInt(c.value) * -4)))) / (2 * a.value)}
}
