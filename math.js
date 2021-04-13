
$(".buttonTriangleAlan").click(function(){
  var b = parseInt(document.getElementById("MyNumA").value);
  var c = parseInt(document.getElementById("MyNumB").value);
  var a = parseInt(document.getElementById("MyNumC").value);
  a = degToRad(a);
  var result = (b * c * Math.sin(a)) / 2;
  result = result.toFixed(3);


  if(areAllInputsFull(3)){
    document.getElementById("A(ABC)").innerHTML = "A(ABC) = " + result;
  }else{
  alert("Eksik Girilen Yeri Doldurun");
  }
});



$(".buttonTrigonometry").click(function(){
  var a = parseInt(document.getElementById("MyNumA").value);
  a = degToRad(a);
  if(areAllInputsFull(1)){

    document.getElementById("cosA").innerHTML = "cos A = " + Math.cos(a).toFixed(3);
    document.getElementById("tanA").innerHTML = "tan A = " + Math.tan(a).toFixed(3);
    document.getElementById("sinA").innerHTML = "sin A = " + Math.sin(a).toFixed(3);
    document.getElementById("cotA").innerHTML = "cot A = " + (1 / Math.tan(a)).toFixed(3);
  }else{
  alert("Eksik Girilen Yeri Doldurun");
  }
});



$(".buttonT-A").click(function(){
  var e = parseInt(document.getElementById("MyNumA").value);
  var f = parseInt(document.getElementById("MyNumB").value);
  var a = parseInt(document.getElementById("MyNumC").value);
  a = degToRad(a);
  var sin = Math.sin(a);
  var result = (e * f * sin) / 2;
  result = result.toFixed(2);

  if(areAllInputsFull(3)){
    document.getElementById("TetragonAlan").innerHTML = "Dörtgenin Alanı = " + result;
  }
  else{
  alert("Eksik Girilen Yeri Doldurun");
  }
});


$(".buttonD-C").click(function(){
  var n = parseInt(document.getElementById("MyNumA").value);

  if(areAllInputsFull(1)){
    if(n>=3){
      document.getElementById("AllInsedeAngle").innerHTML = "Açıları Toplamı = " + (n-2) * 180 + "°";
      document.getElementById("OneInsedeAngle").innerHTML = "Bir İç Açısı = " + ((n-2) * 180) / n + "°";
      document.getElementById("OneOutsideAngle").innerHTML = "Bir Dış Açısı = " + 360 / n + "°";
    } else{
      alert("'n' 3 den küçük bir sayı olamaz!");
    }
  }else{
    alert("Eksik Girilen Yeri Doldurun");
  }

});


$(".buttonD-L").click(function(){
  var a = parseInt(document.getElementById("MyNumA").value);
  var c = parseInt(document.getElementById("MyNumB").value);
  var b = Square(a) + Square(c);

  if(areAllInputsFull(2)){
    document.getElementById("Length").innerHTML =  b  + " = a² + c² = b² + d²"
  }
  else{
  alert("Eksik Girilen Yeri Doldurun");
  }
});


$(".buttonC-P").click(function(){
  var n = parseInt(document.getElementById("MyNumA").value);
  var r = parseInt(document.getElementById("MyNumB").value);

    if(areAllInputsFull(2)){
      if(n >= r){
        document.getElementById("Permutation").innerHTML = "P("+n+","+r+") = " + Permutation(n,r)
        document.getElementById("Combination").innerHTML = "C("+n+","+r+") = " + Combination(n,r)
      } else{
        alert("'r' sayısı 'n' den büyük olamaz!")
      }
    }else{
      alert("Eksik Girilen Yeri Doldurun");
    }
  }
);

function areAllInputsFull(x) {
  return $("input").filter(function(){
    // alert($.trim($(this).val()).length);
    if($.trim($(this).val()).length > 0){
      this.style.boxShadow = "inset 0 -3px 0 0 green";
      return $.trim($(this).val()).length >= 1;
    }
    else{
      this.style.boxShadow = "inset 0 -3px 0 0 red";
    }
  }).length >= x;
}


//Make inputs Blank When clicked
$("#MyNumA").click(function(){
  document.getElementById("MyNumA").value = " ";
});
$("#MyNumB").click(function(){
  document.getElementById("MyNumB").value = " ";
});
$("#MyNumC").click(function(){
  document.getElementById("MyNumC").value = " ";
});


function Factorial(y){
  var x;
  for(x=1; 1<y; y--){
    x = x*y;
  }
  return(x);
}

function Permutation(n , r){
  return(Factorial(n) / Factorial(n-r));
}

function Combination(n , r){
  return(Factorial(n) / (Factorial(r) * Factorial(n-r)));
}

function Square(x){
  return x * x;
}

function degToRad(x){
  return x * (Math.PI / 180);
};





// Footer Text Animation

// function([string1, string2],target id,[color1,color2])
 consoleText(['Made By Emir Atasoy.', ':)'], 'text',['white','#00bcd4','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
