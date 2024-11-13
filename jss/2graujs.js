function Calcular() {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const inputC = document.getElementById('inputC').value;

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    const c = parseFloat(inputC);

    if (a === 0) {
        document.getElementById('result').innerHTML = "O valor de 'A' não pode ser zero em uma função de segundo grau.";
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById('result').innerHTML = "Delta é menor que zero, não possui raízes reais";
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        let novox1 = x1.toFixed(3);
        console.log(novox1)
        let novox2 = x2.toFixed(3);
        console.log(novox2)
        
        document.getElementById('result').innerHTML = `As raízes da equação são:\nx1 = ${novox1}\nx2 = ${novox2}\n e o delta é = ${delta}`;
}}