function ex11(){
    let nome = document.getElementById("nome11").value;
    let idade = Number(document.getElementById("idade11").value);

    if(idade >= 18){
        document.getElementById("res11").innerText = nome + " é maior de idade";
    }else{
        document.getElementById("res11").innerText = nome + " é menor de idade";
    }
}

function ex12(){
    let num = Number(document.getElementById("num12").value);

    if(num >= 0){
        document.getElementById("res12").innerText = "Positivo";
    }else{
        document.getElementById("res12").innerText = "Negativo";
    }
}

function ex13(){
    let num = Number(document.getElementById("num13").value);

    if(num % 2 == 0){
        document.getElementById("res13").innerText = "Par";
    }else{
        document.getElementById("res13").innerText = "Ímpar";
    }
}

function ex14(){
    let saldo = Number(document.getElementById("saldo14").value);
    let debito = Number(document.getElementById("debito14").value);
    let credito = Number(document.getElementById("credito14").value);

    let total = saldo - debito + credito;

    document.getElementById("res14").innerText = "Saldo atual: " + total;
}

function ex15(){
    let sexo = document.getElementById("sexo15").value;

    if(sexo == "F" || sexo == "f"){
        document.getElementById("res15").innerText = "Feminino";
    }else if(sexo == "M" || sexo =="m"){
        document.getElementById("res15").innerText = "Masculino";
    }else{
        document.getElementById("res15").innerText = "Inválido";
    }
}

function ex16(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let maior = n1;
    let menor = n1;

    if(n2 > maior){
        maior = n2;
    }
    if(n3 > maior){
        maior = n3;
    }

    if(n2 < menor){
        menor = n2;
    }
    if(n3 < menor){
        menor = n3;
    }

    document.getElementById("res16").innerText =
    "Maior: " + maior + " | Menor: " + menor;
}

function ex17(){
    let sal = Number(document.getElementById("sal17").value);

    if(sal <= 280){
        sal = sal * 1.2;
    }else if(sal <= 700){
        sal = sal * 1.15;
    }else{
        sal = sal * 1.1;
    }

    document.getElementById("res17").innerText = "Novo salário: " + sal;
}

function ex18(){
    let hora = Number(document.getElementById("hora18").value);
    let mes = Number(document.getElementById("mes18").value);

    let bruto = hora * mes;

    document.getElementById("res18").innerText = "Salário bruto: " + bruto;
}

function ex19(){
    let l1 = Number(document.getElementById("l1").value);
    let l2 = Number(document.getElementById("l2").value);
    let l3 = Number(document.getElementById("l3").value);

    if(l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2){

        if(l1 == l2 && l2 == l3){
            document.getElementById("res19").innerText = "Triângulo Equilátero";
        }else if(l1 == l2 || l1 == l3 || l2 == l3){
            document.getElementById("res19").innerText = "Triângulo Isósceles";
        }else{
            document.getElementById("res19").innerText = "Triângulo Escaleno";
        }

    }else{
        document.getElementById("res19").innerText = "Não forma triângulo";
    }
}


function ex20(){
    let ano = Number(document.getElementById("ano").value);

    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
        document.getElementById("res20").innerText = "Bissexto";
    }else{
        document.getElementById("res20").innerText = "Não é bissexto";
    }
}