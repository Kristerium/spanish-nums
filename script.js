
function isNumeric(numCheck) {
    var validChars = "0123456789";
    var char;
    var isNumber = true;
    for (var i = 0; i < numCheck.length && isNumber == true; i++) {
      char = numCheck.charAt(i);
      if (validChars.indexOf(char) == -1) {
        isNumber = false;
        swal("Error", "You must use numbers only.", "error").then(function() {
          document.getElementById('number').select();
        });
      }
    }
    return isNumber;
  }
  
  
  function group(first, secnd, third) {
  
    var fst = ""
    var snd = ""
    var trd = ""
  
    if (first == 1) {
      if (secnd == "" && third == "") {
        fst = "cien"
      }
      else {
        fst = "ciento"
      }
    }
    else if (first == 2) { fst = "doscientos" }
    else if (first == 3) { fst = "trescientos" }
    else if (first == 4) { fst = "cuatrocientos" }
    else if (first == 5) { fst = "quinientos" }
    else if (first == 6) { fst = "seiscientos " }
    else if (first == 7) { fst = "setecientos" }
    else if (first == 8) { fst = "ochocientos" }
    else if (first == 9) { fst = "novecientos" }
  
    if (secnd == 1) { snd = "diez" }
    else if (secnd == 2) { snd = "veinte" }
    else if (secnd == 3) { snd = "treinta" }
    else if (secnd == 4) { snd = "cuarenta" }
    else if (secnd == 5) { snd = "cincuenta" }
    else if (secnd == 6) { snd = "sesenta" }
    else if (secnd == 7) { snd = "setenta" }
    else if (secnd == 8) { snd = "ochenta" }
    else if (secnd == 9) { snd = "noventa" }
  
    if (third == 1) { trd = "uno" }
    else if (third == 2) { trd = "dos" }
    else if (third == 3) { trd = "tres" }
    else if (third == 4) { trd = "cuatro" }
    else if (third == 5) { trd = "cinco" }
    else if (third == 6) { trd = "seis" }
    else if (third == 7) { trd = "siete" }
    else if (third == 8) { trd = "ocho" }
    else if (third == 9) { trd = "nueve" }
  
    var numText
  
    if (snd != "" && trd != "") { numText = fst + " " + snd + " y " + trd }
    else { numText = fst + " " + snd + " " + trd }
  
    numText = numText.replace("diez y uno", "once")
    numText = numText.replace("diez y dos", "doce")
    numText = numText.replace("diez y tres", "trece")
    numText = numText.replace("diez y cuatro", "catorce")
    numText = numText.replace("diez y cinco", "quince")
    numText = numText.replace("diez y seis", "dieciséis")
    numText = numText.replace("diez y siete", "diecisiete")
    numText = numText.replace("diez y ocho", "dieciocho")
    numText = numText.replace("diez y nueve", "diecinueve")
  
    numText = numText.replace("veinte y uno", "veintiún")
    numText = numText.replace("veinte y dos", "veintidós")
    numText = numText.replace("veinte y tres", "veintitrés")
    numText = numText.replace("veinte y cuatro", "veinticuatro")
    numText = numText.replace("veinte y cinco", "veinticinco")
    numText = numText.replace("veinte y seis", "veintiséis")
    numText = numText.replace("veinte y siete", "veintisiete")
    numText = numText.replace("veinte y ocho", "veintiocho")
    numText = numText.replace("veinte y nueve", "veintinueve")
  
    return (numText)
  }
  
  function translateNum() {
  
    var num = document.getElementById('number').value
  
    if (isNumeric(num)) {
  
      if (num == 0) { numberText = "cero" }
      else {
  
        var len = num.length
  
        var ones = Number(num.charAt(len - 1))
        var tens = Number(num.charAt(len - 2))
        var hund = Number(num.charAt(len - 3))
        var thou = Number(num.charAt(len - 4))
        var tenthou = Number(num.charAt(len - 5))
        var hunthou = Number(num.charAt(len - 6))
        var mill = Number(num.charAt(len - 7))
        var tenmill = Number(num.charAt(len - 8))
        var hunmill = Number(num.charAt(len - 9))
        var bill = Number(num.charAt(len - 10))
        var tenbill = Number(num.charAt(len - 11))
        var hunbill = Number(num.charAt(len - 12))
        var tril = Number(num.charAt(len - 13))
        var tentril = Number(num.charAt(len - 14))
        var huntril = Number(num.charAt(len - 15))
  
        var trills = ""
        var bills = ""
        var mills = ""
        var thous = ""
        var hunds = ""
  
        if (huntril + tentril + tril != 0) { trills = group(huntril, tentril, tril) + " billones" }
        if (hunbill + tenbill + bill != 0) { bills = group(hunbill, tenbill, bill) + " mil millones" }
        if (hunmill + tenmill + mill != 0) { mills = group(hunmill, tenmill, mill) + " millones" }
        if (hunthou + tenthou + thou != 0) {
          if (hunthou == 0 && tenthou == 0 && thou == 1) { thous = "mil" }
          else { thous = group(hunthou, tenthou, thou) + " mil" }
        }
        if (hund + tens + ones != 0) { hunds = group(hund, tens, ones) }
  
        numberText = trills + " " + bills + " " + mills + " " + thous + " " + hunds.replace("veintiún", "veintiuno")
        numberText = numberText.replace("uno billones", "un billón")
        numberText = numberText.replace("uno millones", "un millón")
        numberText = numberText.replace("uno mil", "un mil")
        numberText = numberText.trim()
      }
  
      numberTextEnd = numberText.substring(numberText.length - 3, numberText.length)
  
      mascNumText = numberText
      femiNumText = numberText
  
      if (numberTextEnd == "uno") {
        mascNumText = numberText.substring(0, numberText.length - 3) + "un"
        femiNumText = numberText.substring(0, numberText.length - 3) + "una"
      }
  
      mascNumText = mascNumText.replace(/veintiun/g, "veintiún")
      femiNumText = femiNumText.replace(/ientos/g, "ientas")
  
      document.getElementById('spanNum').innerHTML = numberText
      document.getElementById('mascNum').innerHTML = mascNumText + " + masculine noun"
      document.getElementById('femiNum').innerHTML = femiNumText + " + feminine noun"
  
    }
  
  }