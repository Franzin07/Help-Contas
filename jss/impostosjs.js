var button = document.getElementById("impostobutton");

function Calcular() {

   II = parseFloat(document.getElementById('inputII').value) || 0;
   ISS = parseFloat(document.getElementById('inputISS').value) || 0;
   ITBI = parseFloat(document.getElementById('inputITBI').value) || 0;
   IPTU = parseFloat(document.getElementById('inputIPTU').value) || 0;
   IPVA = parseFloat(document.getElementById('inputIPVA').value) || 0;
   ICMS = parseFloat(document.getElementById('inputICMS').value) || 0;
   ITCMD = parseFloat(document.getElementById('inputITCMD').value) || 0;
   IOF = parseFloat(document.getElementById('inputIOF').value) || 0;
   IPI = parseFloat(document.getElementById('inputIPI').value) || 0;
   IRPF = parseFloat(document.getElementById('inputIRPF').value) || 0;
   IRPJ = parseFloat(document.getElementById('inputIRPJ').value) || 0;


   tude = II + ISS + ITBI + IPTU + IPVA + ICMS + ITCMD + IOF + IPI + IRPJ + IRPF;

   document.getElementById('result').innerHTML = 'o total de impostos deu: R$ '+tude ;
};
