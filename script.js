function adicionarItem(){
    //PEGANDO O VALOR DO INPUT
    const elemento = document.getElementById("elemento").value;

    //CONFERE SE O INPUT NÃO ESTÁ VAZIO
    if(elemento.trim() !== ""){
        //CRIA UM LI NA LISTA
        const item = document.createElement('li');
        //ATRIBUI AO LI CRIADO O ELEMENTO DO INPUT
        item.textContent = elemento;

        //CRIA UM BOTAO "X" AO LADO DO ITEM
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "✖";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.style.color = "red";
        botaoRemover.style.cursor = "pointer";

        //FUNCAO PARA REMOVER O ITEM
        botaoRemover.onclick = function(){
            item.remove();
        }

        //ADICIONA O BOTAO REMOVER AO ITEM DA LISTA
        item.appendChild(botaoRemover);

        //INSERE O ITEM A LISTA
        document.getElementById('lista').appendChild(item);
        //APAGA O INPUT
        document.getElementById('elemento').value = "";
    } 
}

//FUNCAO PARA ADICIONAR ITEM AO APERTAR O ENTER
function verificaEnter(event){
    if (event.key === "Enter"){
        adicionarItem();
    }
}