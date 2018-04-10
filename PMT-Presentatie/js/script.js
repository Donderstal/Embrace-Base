let locatieKroket = document.getElementById("willekeurigeKroket")

function getKroket(){
  let willekeurigGetal = Math.floor(Math.random() * Math.floor(4))              
  let willekeurigeKroket = "<img id='plaatjeKroket' src=images/Kroket" + willekeurigGetal + ".jpg>"
  if (locatieKroket.innerHTML !== willekeurigeKroket)
    locatieKroket.innerHTML = willekeurigeKroket
  else 
  getKroket()
}

function getFancyKroket(){           
  let fancyKroket = "<img id='plaatjeKroket' src=images/FancyKroket.jpg>"
      locatieKroket.innerHTML = fancyKroket
}

const kroketKnop = document.getElementById("kroketKnop")
const fancyKroketKnop = document.getElementById("fancyKroketKnop")

kroketKnop.addEventListener("click", getKroket)
fancyKroketKnop.addEventListener("click", getFancyKroket)