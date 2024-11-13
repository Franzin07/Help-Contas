function Calcular(){
    const n1 = parseFloat(document.getElementById('nun1').value) || 0;
    const n2 = parseFloat(document.getElementById('nun2').value) || 0;

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const mult = n1 * n2;
    const div = n1 / n2;
    const ex1 = n1 ** n2;
    const ex2 = n2 ** n1;
    // ex1 = Math.ceil(ex1)
    let novon = div.toFixed(3);
    console.log(novon)

    document.getElementById('result').innerHTML = `As equaçõe são:\nsoma = ${soma} --\nsubtração = ${subtracao} --\nmultplicação = ${mult} --\ndivisão = ${novon} --\npotencia de n1 sobre n2 = ${ex1} --\npotencia de n2 sobre n1 = ${ex2}`;

}