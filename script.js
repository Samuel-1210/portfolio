var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})
document.querySelector("#js").addEventListener("click", atualizarPreco)
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("click", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("click", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = "Prazo: "+prazo+" semanas"
    atualizarPreco()

})

function atualizarPreco(){
const qtde = document.querySelector("#qtde").value
const temJS = document.querySelector("#js").checked
const incluiLayout = document.querySelector("#layout-sim").checked
const prazo = document.querySelector("#prazo").value

let preco = qtde *10
if (temJS) preco *= 1.1 
if (incluiLayout) preco += 50
let taxaUrgencia = 1 - prazo*0.1
preco *= 1 + taxaUrgencia

document.querySelector("#preco").innerHTML = "R$ "+preco.toFixed(2)

}

window.onscroll = function(){
    scroll();
}

function scroll(){
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        document.getElementById("link-topo").style.right="3rem";
    }else{
        document.getElementById("link-topo").style.right="-10rem";
    }
}


var btnenviar = document.querySelector(".btn-submit");

btnenviar.addEventListener("click", function(){
    if( (document.getElementById("nome").value.length < 1) || (document.getElementById("email").value.length < 1) || (document.getElementById("mensagem").value.length < 1))
    {
    }else{
        alert("Usei um intermediário para poder enviar o email para mim, não se assuste com a guia que irá abrir!")
    }  
}
)

var btnorc = document.querySelector(".btn-orcamento");

btnorc.addEventListener("click", function(){
    if(document.getElementById("qtde").value.length < 1)
    {
    }else{
        alert("Usei um intermediário para poder enviar o email para mim, não se assuste com a guia que irá abrir!")
    }  
}
)