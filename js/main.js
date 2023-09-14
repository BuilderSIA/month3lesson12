// 1-masala
function myFunction() {
    let text;
    let number = prompt("A ga qiymat bering");
    if(number>0){
      text = 'Musbat'
    }else if(number<0){
      text = 'manfiy'
    }else{
      text = 'nolga teng'
    }
    document.getElementById("demo").innerHTML = text;
  }
// 2-masala
  function scndFunction() {
    let text;
    let number = prompt("A ga qiymat bering");
    if (number != 0){
      if(number%2 != 0 ){
        text = 'toq'
      }else if(number%2 == 0){
        text = 'juft'
      }
    } else {
      text = 'nolga teng'
    }
    document.getElementById("demo2").innerHTML = text;
  }
  // 3-masala
  function thrdFunction() {
    let text;
    let number = prompt("A ga qiymat bering");
    if (number != 0){
      if(number%2 == 0 ){
        text = 'juft'
      }else if(number%2 != 0){
        text = 'toq'
      }
    } else {
      text = 'nolga teng'
    }
    document.getElementById("demo3").innerHTML = text;
  }
// 4-masala
  function fourthFunction() {
    let text;
    let a = prompt("A ga qiymat bering");
    let b = prompt("B ga qiymat bering");
    if (a > 0 && b>0){
      text = 'rost'
    } else {
      text = "yolg'on"
    }
    document.getElementById("demo4").innerHTML = text;
  }
// 5-masala
  function fifthFunction() {
    let text;
    let a = prompt("A ga qiymat bering");
    let b = prompt("B ga qiymat bering");
    let c = prompt("B ga qiymat bering");
    if (a > b && b > c){
      text = 'rost'
    } else {
      text = "yolg'on"
    }
    document.getElementById("demo5").innerHTML = text;
  }
// 6-masala
  function sixthFunction() {
    let text;
    let a = prompt("A ga qiymat bering");
    let b = prompt("B ga qiymat bering");
    let c = prompt("B ga qiymat bering");
    if (a > b && b > c){
      text = 'rost'
    } else if (a < b && b < c) {
      text = "rost"
    } else {
      text = "yolg'on"
    }
    document.getElementById("demo6").innerHTML = text;
  }
// 7-masala
  function seventhFunction() {
    let text;
    let a = prompt("A ga qiymat bering");
    let b = prompt("B ga qiymat bering");
    if (a%2 != 0 && b%2!=0) {
      text = 'ikkalasi ham toq'
    } else if (a%2 == 0 && b%2!=0) {
      text = "a son juft, b son toq"
    } else if (a%2 != 0 && b%2==0) {
      text = "a son toq, b son juft"
    } else if (a%2 == 0 && b%2==0) {
      text = "ikkalasi ham juft"
    } else {
      text = "yolg'on"
    }
    document.getElementById("demo7").innerHTML = text;
  }
// 8-masala
  function eightFunction() {
    let text;
    let a = prompt("A ga qiymat bering");
    let b = prompt("B ga qiymat bering");
    let c = prompt("C ga qiymat bering");
    let d = prompt("D ga qiymat bering");
    if (a>0 && b>0 && c>0 && d>0){
      text = 'barcha sonlar musbat'
    } else {
      text = "berilgan sonlarning hammasi ham musbat emas"
    }
    document.getElementById("demo8").innerHTML = text;
  }
// 9-masala
  function ninethFunction() {
    let text;
    let a = prompt("A ga qiymat bering");
    let b = prompt("B ga qiymat bering");
    let c = prompt("C ga qiymat bering");
    if (a>0 && b>0 && c>0){
      text = 'barcha sonlar musbat'
    } else if (a>0 && b<0 && c>0){
      text = 'a va c sonlar musbat'
    } else if (a<0 && b>0 && c>0){
      text = 'b va c sonlar musbat'
    } else if (a>0 && b>0 && c<0){
      text = 'a va b sonlar musbat'
    } else {
      text = "berilgan sonlarda 2dan ortiq manfiy bor"
    }
    document.getElementById("demo9").innerHTML = text;
  }
// 10-masala
  function tenthFunction() {
    let text;
    let day = prompt("hafta kunini kiriting");
    if (day == 'dushanba' || day == 'Dushanba'){
      text = 'Bugun haftaning 1chi kuni'
    } else if (day == 'seshanba' || day == 'Seshanba'){
      text = 'Bugun haftaning 2chi kuni'
    } else if (day == 'chorshanba' || day == 'Chorshanba'){
      text = 'Bugun haftaning 3chi kuni'
    } else if (day == 'payshanba' || day == 'Payshanba'){
      text = 'Bugun haftaning 4chi kuni'
    } else if (day == 'juma' || day == 'Juma'){
      text = 'Bugun haftaning 5chi kuni'
    } else if (day == 'shanba' || day == 'Shanba'){
      text = 'Bugun haftaning 6chi kuni'
    } else if (day == 'yakshanba' || day == 'Yakshanba'){
      text = 'Bugun haftaning 7chi kuni'
    } else {
      text = "Javobingizni tekshiring"
    }
    document.getElementById("demo10").innerHTML = text;
  }
// 11-masala
  function eleventhFunction() {
    let text;
    let number = prompt("raqamni kiriting (998912345678 ko'rinishida)");
    if ((number-998900000000 < 20000000)){
      text = "Beeline abonentidan qo'ng'iroq bo'layapti"
    } else if ((number-998900000000 < 50000000) && (number-998900000000 > 30000000)){
      text = "Ucell abonentidan qo'ng'iroq bo'layapti"
    } else if ((number-998900000000 > 60000000) && (number-998900000000 < 80000000)){
      text = "UMS abonentidan qo'ng'iroq bo'layapti"
    } else if ((number-998900000000 > 50000000) && (number-998900000000 < 60000000)){
      text = "Uzmobile abonentidan qo'ng'iroq bo'layapti"
    } else if ((number-998900000000 > 90000000) && (number-998900000000 < 100000000)){
      text = "Uzmobile abonentidan qo'ng'iroq bo'layapti"
    } else {
      text = "Javobingizni tekshiring"
    }
    document.getElementById("demo11").innerHTML = text;
  }
// 12-masala
  function twelwthFunction() {
    let text;
    let number = prompt("butun sonni kiriting");
    if (number>0){
      text = ++number
    } else if (number<0){
      text = --number
    } else {
      text = "Javobingizni tekshiring"
    }
    document.getElementById("demo12").innerHTML = text;
  }
// 13-masala
  function thirteenthFunction() {
    let text;
    let number = prompt("butun sonni kiriting");
    if (number>0){
      number = ++number
      number = ++number
      number = ++number
      text = number
    } else if (number<0){
      number = --number
      number = --number
      text = number
    } else {
      text = "Javobingizni tekshiring"
    }
    document.getElementById("demo13").innerHTML = text;
  }
// 14-masala
  function fourteenthFunction() {
    let text;
    let a = prompt("butun sonni kiriting");
    let b = prompt("butun sonni kiriting");
    if (a>b){
      text = 'a son katta'
    } else if (a<b){
      text = 'b son katta'
    } else {
      text = "Javobingizni tekshiring"
    }
    document.getElementById("demo14").innerHTML = text;
  }
// 17-masala
  function seventeenthFunction() {
    let index;
    let text;
    let name = prompt("ismingizni kiriting");
    if (str.length>0){
      index = name[name.length - 1]
      if(index == 'a' || index == 'l' || index == 'n' || index == 'o'){
        text = 'Hush kelibsiz, yaxshi qiz!'        
      } else {
        text = 'Hush kelibsiz!'
      }
    }
    document.getElementById("demo17").innerHTML = text;
  }
// -masala
