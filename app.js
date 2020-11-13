var saldo = 0;
console.log(saldo)

var cont = 0;

document.getElementById('Nome').focus()
var containerSaldo = document.getElementById('ultimo-saldo')

    function PegandoValores(){
        
        let nome = document.getElementById('Nome').value
        let valor = document.getElementById('Valor').value
        let frameStringWar = valor.split(" ")

        if(frameStringWar[0] === "-" || frameStringWar[0] === "+" ){
           
        var frameString = frameStringWar 
        
           if(frameString[0] == "-"){

                cont += 1
                //Pai dos elemtos criados dinamicamente
                var divContainerPai = document.getElementById("container-transition-pai")
                //Inserindo um container filho
                var divContainerFilho = document.createElement('div')
                divContainerPai.appendChild(divContainerFilho)
                divContainerFilho.setAttribute('class', `container-transition`)
                // Criando o icone de remoção
                var childContainer = document.querySelectorAll('.container-transition')
                var count = childContainer.length
                count -= 1
                var iconeExcluir = document.createElement('div')
                childContainer[count].appendChild(iconeExcluir)
                iconeExcluir.setAttribute("class", "icone-excluir")
                var containerIcone = document.querySelectorAll('.icone-excluir')
                var ImgIconeExcluir = document.createElement('img')
                containerIcone[count].appendChild(ImgIconeExcluir)
                ImgIconeExcluir.setAttribute("src", "/icone-excluir.svg")
                
                //Elementos filhos criados para lista de transação
                var divChild = document.createElement('div')
                    childContainer[count].appendChild(divChild)
                    divChild.setAttribute("class", "element-create element-create-border-red")
                var childElement = document.querySelectorAll('.element-create')
                var childs = document.createElement('div')
                    childElement[count].appendChild(childs)
                    childs.setAttribute("class", "transition-name")
                var childs2 = document.createElement('div')
                    childElement[count].appendChild(childs2)
                    childs2.setAttribute("class", "transition-value")
                var nameValue = document.querySelectorAll('.transition-name')
                var ValorValue = document.querySelectorAll('.transition-value')
//
                valor = frameString.splice(0, 1)
                frameString = parseFloat(frameString)
                //var Random = Math.floor(Math.random() * 256)

                    nameValue[count].innerHTML = nome
                    ValorValue[count].innerHTML = "- R$ " + frameString
                    iconeExcluir.setAttribute("onclick", `remocao(${frameString}, '${nome}', '-')`)
                    divContainerFilho.classList.add(`${frameString}${nome}-`)
                    document.getElementById('Nome').value = ''
                    document.getElementById('Valor').value = ''
                    saldo -= frameString
                    containerSaldo.innerHTML = saldo.toFixed(2)
                    document.getElementById('Nome').focus()
            
           } else if(frameString[0] == "+"){

            cont += 1
            //Pai dos elemtos criados dinamicamente
            var divContainerPai = document.getElementById("container-transition-pai")
            //Inserindo um container filho
            var divContainerFilho = document.createElement('div')
            divContainerPai.appendChild(divContainerFilho)
            divContainerFilho.setAttribute('class', `container-transition`)
            // Criando o icone de remoção
            var childContainer = document.querySelectorAll('.container-transition')
            var count = childContainer.length
            count -= 1
            var iconeExcluir = document.createElement('div')
            childContainer[count].appendChild(iconeExcluir)
            iconeExcluir.setAttribute("class", "icone-excluir")
            var containerIcone = document.querySelectorAll('.icone-excluir')
            var ImgIconeExcluir = document.createElement('img')
            containerIcone[count].appendChild(ImgIconeExcluir)
            ImgIconeExcluir.setAttribute("src", "/icone-excluir.svg")
            
            //Elementos filhos criados para lista de transação
            var divChild = document.createElement('div')
                childContainer[count].appendChild(divChild)
                divChild.setAttribute("class", "element-create element-create-border-green")
            var childElement = document.querySelectorAll('.element-create')
            var childs = document.createElement('div')
                childElement[count].appendChild(childs)
                childs.setAttribute("class", "transition-name")
            var childs2 = document.createElement('div')
                childElement[count].appendChild(childs2)
                childs2.setAttribute("class", "transition-value")
            var nameValue = document.querySelectorAll('.transition-name')
            var ValorValue = document.querySelectorAll('.transition-value')
//
            valor = frameString.splice(0, 1)
            frameString = parseFloat(frameString)
            //var Random = Math.floor(Math.random() * 256)

                nameValue[count].innerHTML = nome
                ValorValue[count].innerHTML = "+ R$ " + frameString
                iconeExcluir.setAttribute("onclick", `remocao(${frameString}, '${nome}', '+')`)
                divContainerFilho.classList.add(`${frameString}${nome}+`)
                document.getElementById('Nome').value = ''
                document.getElementById('Valor').value = ''
                saldo += frameString
                containerSaldo.innerHTML = saldo.toFixed(2)
                document.getElementById('Nome').focus()
            } 

        } else {
            alert("Digite o sinal de (-) ou de (+) para informar se é uma DESPESA ou RECEITA!")
            document.getElementById('Nome').value = ''
            document.getElementById('Valor').value = ''
            document.getElementById('Nome').focus()
          }    
    }

    console.log(saldo)

    function remocao(idValor, idName, operacao){
        var ID = `${idValor}${idName}${operacao}`
        console.log(ID)

        var element = document.querySelectorAll('.container-transition')

        element.forEach((elemento) => {
        var verif = elemento.classList.contains(ID)
            if(verif == true){
               elemento.remove()
            }
        })


        let saldoString = String(saldo)
        let result = saldoString.split('')
        console.log(result)
        
        if(result[0] == '-'){
            var containerSaldo = document.getElementById('ultimo-saldo')
            saldo = saldo + idValor
            containerSaldo.innerHTML = saldo

        } else if(result[0] !== '-' && operacao == '-'){
            var containerSaldo = document.getElementById('ultimo-saldo')
            saldo = saldo + idValor
            containerSaldo.innerHTML = saldo.toFixed(2)

        } else {
            var containerSaldo = document.getElementById('ultimo-saldo')
            saldo = saldo - idValor
            containerSaldo.innerHTML = saldo.toFixed(2)
        }
    }
    