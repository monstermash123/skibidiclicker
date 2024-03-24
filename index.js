var score = 0;

var cursors = 0;
var cursorCost = 10;

var skibidiToilets = 0;
var skibidiToiletCost = 100;

var josue = 0;
var josueCost = 1000;

var nafisa = 0;
var nafisaCost = 2500;

var andres = 0;
var andresCost = 5000;

var sigma = 0;
var sigmaCost = 10000;

var hitler = 0;
var hitlerCost = 25000;

var qing = 0;
var qingCost = 50000;

var scott = 0;
var scottCost = 100000;

var tate = 0;
var tateCost = 1000000;

var chau = 0;
var chauCost = 2500000;

var mewingMing = 0;
var mewingMingCost = 10000000


var clickingPowerMultipler = 1;

var clickingPowerUpgrade1 = false;
var clickingPowerUpgrade1Cost = 100000;
var clickingPowerUpgrade1Multipler = 5000;

var clickingPowerUpgrade2 = false;
var clickingPowerUpgrade2Cost = 1000000;
var clickingPowerUpgrade2Multipler = 25000;

var clickingPowerUpgrade3 = false;
var clickingPowerUpgrade3Cost = 10000000;
var clickingPowerUpgrade3Multipler = 100000;

var clickingPowerUpgrade4 = false;
var clickingPowerUpgrade4Cost = 100000000;
var clickingPowerUpgrade4Multipler = 250000;

var clickingPowerUpgrade5 = false;
var clickingPowerUpgrade5Cost = 500000000;
var clickingPowerUpgrade5Multipler = 500000;

var factorApplied = 1;

function clickingInput(amount) {
    if (clickingPowerUpgrade1) { clickingPowerMultipler += clickingPowerUpgrade1Multipler; }
    if (clickingPowerUpgrade2) { clickingPowerMultipler += clickingPowerUpgrade2Multipler; }
    if (clickingPowerUpgrade3) { clickingPowerMultipler += clickingPowerUpgrade3Multipler; }
    if (clickingPowerUpgrade4) { clickingPowerMultipler += clickingPowerUpgrade4Multipler; }
    if (clickingPowerUpgrade5) { clickingPowerMultipler += clickingPowerUpgrade5Multipler; }

    score += (amount * clickingPowerMultipler);

    document.getElementById("score").innerHTML = numberFormatter(score);
}

function numberFormatter(num) {
   if (num < 1000) {
      return num;
   }
   const match = [
      {value: 1e3, symbol: "K"},
      {value: 1e6, symbol: "M"},
      {value: 1e9, symbol: "B"},
      {value: 1e12, symbol: "T"},
      {value: 1e15, symbol: "Qa"},
      {value: 1e18, symbol: "Qi"},
      {value: 1e21, symbol: "Sx"},
      {value: 1e24, symbol: "Sp"},
      {value: 1e27, symbol: "Oc"},
      {value: 1e30, symbol: "No"},
      {value: 1e33, symbol: "Dc"},
      {value: 1e36, symbol: "Ud"},
      {value: 1e39, symbol: "Dd"},
      {value: 1e42, symbol: "Td"},
      {value: 1e45, symbol: "Qad"},
      {value: 1e48, symbol: "Qid"},
      {value: 1e51, symbol: "Sxd"},
      {value: 1e54, symbol: "Spd"},
      {value: 1e57, symbol: "Ocd"},
      {value: 1e60, symbol: "Nod"},
   ];

   let item = match.findLast(function (obj) {
      return num >= obj.value;
   });

   return (num / item.value).toFixed(2) + item.symbol;
}


function buyCursor() {
   if (score >= cursorCost) {
      score -= cursorCost;
      let amountToAdd;
      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      cursors += amountToAdd;
      cursorCost = Math.round(cursorCost * 1.05);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("cursorCost").innerHTML = numberFormatter(cursorCost);
      document.getElementById("cursorCount").innerHTML = numberFormatter(cursors);
      updateScorePerSecond();
   }
   
}


function buySkibidiToilet() {
   if (score >= skibidiToiletCost) {
      score -= skibidiToiletCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }


      skibidiToilets += amountToAdd;
      skibidiToiletCost = Math.round(skibidiToiletCost * 1.1);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("skibidiToiletCount").innerHTML = numberFormatter(skibidiToilets);
      document.getElementById("skibidiToiletCost").innerHTML = numberFormatter(skibidiToiletCost);
      updateScorePerSecond();
   }
}


function buyJosue() {
   if (score >= josueCost) {
      score -= josueCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      josue += amountToAdd;
      josueCost = Math.round(josueCost * 1.15);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("josueCount").innerHTML = numberFormatter(josue);
      document.getElementById("josueCost").innerHTML = numberFormatter(josueCost);
      updateScorePerSecond();
   }
}


function buyNafisa() {
   if (score >= nafisaCost) {
      score -= nafisaCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      nafisa += amountToAdd;
      nafisaCost = Math.round(nafisaCost * 1.25);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("nafisaCount").innerHTML = numberFormatter(nafisa);
      document.getElementById("nafisaCost").innerHTML = numberFormatter(nafisaCost);
      updateScorePerSecond();
   }
}


function buyAndres() {
   if (score >= andresCost) {
      score -= andresCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      andres += amountToAdd;
      andresCost = Math.round(andresCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("andresCount").innerHTML = numberFormatter(andres);
      document.getElementById("andresCost").innerHTML = numberFormatter(andresCost);
      updateScorePerSecond();
   }
}


function buySigma() {
   if (score >= sigmaCost) {
      score -= sigmaCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      sigma += amountToAdd;
      sigmaCost = Math.round(sigmaCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("sigmaCount").innerHTML = numberFormatter(sigma);
      document.getElementById("sigmaCost").innerHTML = numberFormatter(sigmaCost);
      updateScorePerSecond();
   }
}


function buyHitler() {
   if (score >= hitlerCost) {
      score -= hitlerCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }


      hitler += amountToAdd;
      hitlerCost = Math.round(hitlerCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("hitlerCount").innerHTML = numberFormatter(hitler);
      document.getElementById("hitlerCost").innerHTML = numberFormatter(hitlerCost);
      updateScorePerSecond();
   }
}


function buyQing() {
   if (score >= qingCost) {
      score -= qingCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }


      qing += amountToAdd;
      qingCost = Math.round(qingCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("qingCount").innerHTML = numberFormatter(qing);
      document.getElementById("qingCost").innerHTML = numberFormatter(qingCost);
      updateScorePerSecond();
   }
}


function buyScott() {
   if (score >= scottCost) {
      score -= scottCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }


      scott += amountToAdd;
      scottCost = Math.round(scottCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("scottCount").innerHTML = numberFormatter(scott);
      document.getElementById("scottCost").innerHTML = numberFormatter(scottCost);
      updateScorePerSecond();
   }
}


function buyTate() {
   if (score >= tateCost) {
      score -= tateCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      tate += amountToAdd;
      tateCost = Math.round(tateCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("tateCount").innerHTML = numberFormatter(tate);
      document.getElementById("tateCost").innerHTML = numberFormatter(tateCost);
      updateScorePerSecond();
   }
}

function buyChau() {
   if (score >= chauCost) {
      score -= chauCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      chau += amountToAdd;
      chauCost = Math.round(chauCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("chauCount").innerHTML = numberFormatter(chau);
      document.getElementById("chauCost").innerHTML = numberFormatter(chauCost);
      updateScorePerSecond();
   }
}

function buyMewingMing() {
    if (score >= mewingMingCost) {
      score -= mewingMingCost;
      let amountToAdd;


      if (factorApplied === 10) {
         amountToAdd = 10;
      } else if (factorApplied === 5) {
         amountToAdd = 5;
      } else {
         amountToAdd = 1;
      }
      mewingMing += amountToAdd;
      mewingMingCost = Math.round(mewingMingCost * 1.3);


      document.getElementById("score").innerHTML = numberFormatter(score);
      document.getElementById("mewingMingCount").innerHTML = numberFormatter(mewingMing);
      document.getElementById("mewingMingCost").innerHTML = numberFormatter(mewingMingCost);
      updateScorePerSecond();
   }
}


//click shop functions
function buyClickingPower1() {
   if (score >= clickingPowerUpgrade1Cost && !clickingPowerUpgrade1) {
      score -= clickingPowerUpgrade1Cost;
      clickingPowerUpgrade1 = true;
      document.getElementById("clickingUpgradePurchase1").innerHTML = "PURCHASED!!!";
   }
}


function buyClickingPower2() {
   if (score >= clickingPowerUpgrade2Cost && !clickingPowerUpgrade2) {
      score -= clickingPowerUpgrade2Cost;
      clickingPowerUpgrade2 = true;
      
      document.getElementById("clickingUpgradePurchase2").innerHTML = "PURCHASED!!!";
   }
}


function buyClickingPower3() {
   if (score >= clickingPowerUpgrade3Cost && !clickingPowerUpgrade3) {
      score -= clickingPowerUpgrade3Cost;
      clickingPowerUpgrade3 = true;
      document.getElementById("clickingUpgradePurchase3").innerHTML = "PURCHASED!!!";
   }
}

function buyClickingPower4() {
   if (score >= clickingPowerUpgrade4Cost && !clickingPowerUpgrade4) {
      score -= clickingPowerUpgrade4Cost;
      clickingPowerUpgrade4 = true;
      document.getElementById("clickingUpgradePurchase4").innerHTML = "PURCHASED!!!";
   }
}

function buyClickingPower5() {
   if (score >= clickingPowerUpgrade5Cost && !clickingPowerUpgrade5) {
      score -= clickingPowerUpgrade5Cost;
      clickingPowerUpgrade5 = true;
      document.getElementById("clickingUpgradePurchase5").innerHTML = "PURCHASED!!!";
   }
}


function updateScorePerSecond() {
    scorePerSecond = Math.round(cursors + (skibidiToilets * 10) + (josue * 100) + (nafisa * 250) + (andres * 500) + (sigma * 1000) + (hitler * 2500) + (qing * 5000) + (scott * 10000) + (tate * 25000) + (chau * 50000) + (mewingMing * 100000));
    document.getElementById("skibidiPerSecond").innerHTML = numberFormatter(scorePerSecond);
}


/* passive timer score */
setInterval(function () {
   score += cursors;
   score += skibidiToilets * 10;
   score += josue * 100;
   score += nafisa * 250;
   score += andres * 500;
   score += sigma * 1000;
   score += hitler * 2500;
   score += qing * 5000;
   score += scott * 10000;
   score += tate * 25000;
   score += chau * 50000;
   score += mewingMing * 100000;


   document.getElementById("score").innerHTML = numberFormatter(score);

   document.title = numberFormatter(score) + " skibidi - skibidi clicker";
}, 1000);



//saving game
function saveGame() {
    var gameSave = {
        score: score,
        cursors: cursors,
        cursorCost: cursorCost,
        skibidiToilets: skibidiToilets,
        skibidiToiletCost: skibidiToiletCost,
        josue: josue,
        josueCost: josueCost,
        nafisa: nafisa,
        nafisaCost: nafisaCost,
        andres: andres,
        andresCost: andresCost,
        sigma: sigma,
        sigmaCost: sigmaCost,
        hitler: hitler,
        hitlerCost: hitlerCost,
        qing: qing,
        qingCost: qingCost,
        scott: scott,
        scottCost: scottCost,
        tate: tate,
        tateCost: tateCost,
        chau: chau,
        chauCost: chauCost,
        mewingMing: mewingMing,
        mewingMingCost: mewingMingCost,
        
        factorApplied: factorApplied
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    showNotification('Game saved!');
    updateScorePerSecond();
}

//load game
function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (savedGame !== null && typeof savedGame !== "undefined") {
        score = savedGame.score;
        cursors = savedGame.cursors;
        cursorCost = savedGame.cursorCost;
        skibidiToilets = savedGame.skibidiToilets;
        skibidiToiletCost = savedGame.skibidiToiletCost;
        josue = savedGame.josue;
        josueCost = savedGame.josueCost;
        nafisa = savedGame.nafisa;
        nafisaCost = savedGame.nafisaCost;
        andres = savedGame.andres;
        andresCost = savedGame.andresCost;
        sigma = savedGame.sigma;
        sigmaCost = savedGame.sigmaCost;
        hitler = savedGame.hitler;
        hitlerCost = savedGame.hitlerCost;
        qing = savedGame.qing;
        qingCost = savedGame.qingCost;
        scott = savedGame.scott;
        scottCost = savedGame.scottCost;
        tate = savedGame.tate;
        tateCost = savedGame.tateCost;
        chau = savedGame.chau;
        chauCost = savedGame.chauCost;
        mewingMing = savedGame.mewingMing;
        mewingMingCost = savedGame.mewingMingCost;
        
        factorApplied = savedGame.factorApplied || 1;

        updateScorePerSecond();
        showNotification('Game loaded!');
    }
}

window.onload = function() {
    loadGame();
    updateScorePerSecond();
    document.getElementById("score").innerHTML = numberFormatter(score);
    document.getElementById("cursorCount").innerHTML = numberFormatter(cursors);
    document.getElementById("cursorCost").innerHTML = numberFormatter(cursorCost);
    document.getElementById("skibidiToiletCount").innerHTML = numberFormatter(skibidiToilets);
    document.getElementById("skibidiToiletCost").innerHTML = numberFormatter(skibidiToiletCost);
    document.getElementById("josueCount").innerHTML = numberFormatter(josue);
    document.getElementById("josueCost").innerHTML = numberFormatter(josueCost);
    document.getElementById("nafisaCount").innerHTML = numberFormatter(nafisa);
    document.getElementById("nafisaCost").innerHTML = numberFormatter(nafisaCost);
    document.getElementById("andresCount").innerHTML = numberFormatter(andres);
    document.getElementById("andresCost").innerHTML = numberFormatter(andresCost);
    document.getElementById("sigmaCount").innerHTML = numberFormatter(sigma);
    document.getElementById("sigmaCost").innerHTML = numberFormatter(sigmaCost);
    document.getElementById("hitlerCount").innerHTML = numberFormatter(hitler);
    document.getElementById("hitlerCost").innerHTML = numberFormatter(hitlerCost);
    document.getElementById("qingCount").innerHTML = numberFormatter(qing);
    document.getElementById("qingCost").innerHTML = numberFormatter(qingCost);
    document.getElementById("scottCount").innerHTML = numberFormatter(scott);
    document.getElementById("scottCost").innerHTML = numberFormatter(scottCost);
    document.getElementById("tateCount").innerHTML = numberFormatter(tate);
    document.getElementById("tateCost").innerHTML = numberFormatter(tateCost);
    document.getElementById("chauCount").innerHTML = numberFormatter(chau);
    document.getElementById("chauCost").innerHTML = numberFormatter(chauCost);
    document.getElementById("mewingMingCount").innerHTML = numberFormatter(mewingMing);
    document.getElementById("mewingMingCost").innerHTML = numberFormatter(mewingMingCost);
};


setInterval(function() {
    saveGame();
}, 60000) //60 second save

document.addEventListener("keydown", function(event){
    if (event.ctrlKey && event.which == 83) { //ctrl + s
        event.preventDefault();
        saveGame();
    }
    if (event.ctrlKey && event.which == 76) { //ctrl + L
        event.preventDefault();
        loadGame();
    }
}, false);

function showNotification(message) {
  const notificationContainer = document.getElementById('notification-container');
  notificationContainer.innerHTML = message;
  notificationContainer.style.display = 'block';
  
  
  setTimeout(() => {
    notificationContainer.style.display = 'none';
  }, 1000); //1 second hide
}


function togglePassiveShop() {
   const passiveShop = document.getElementById('passiveShopDiv');
   const clickingPowerShop = document.querySelector('.clickingPowerShop-container');

   if (passiveShop && clickingPowerShop) {
       passiveShop.style.display = 'block';
       clickingPowerShop.style.display = 'none';

       document.querySelector('.shopButtonsPassive').style.backgroundColor = "white";
       document.querySelector('.shopButtonsClicking').style.backgroundColor = "#b2becd";

       document.querySelector('.buyAmount-container').style.display = 'block';
   }
}

function toggleClickingPowerShop() {
   const passiveShop = document.getElementById('passiveShopDiv');
   const clickingPowerShop = document.querySelector('.clickingPowerShop-container');

   if (passiveShop && clickingPowerShop) {
       passiveShop.style.display = 'none';
       clickingPowerShop.style.display = 'block';

       document.querySelector('.shopButtonsClicking').style.backgroundColor = "white";
       document.querySelector('.shopButtonsPassive').style.backgroundColor = "#b2becd";

       document.querySelector('.buyAmount-container').style.display = 'none';
   }
}

function resetAndApplyMultiplier(factor) {
    clickingPowerMultipler = 1;

    clickingPowerMultipler *= factor;
}

function multiplyPricesBy(factor) {
   const pricesToMultiply = ["cursorCost", "skibidiToiletCost", "josueCost", "nafisaCost", "andresCost", "sigmaCost", "hitlerCost", "qingCost", "scottCost", "tateCost", "chauCost", "mewingMingCost"];

   if (factorApplied === factor) {
      for (const priceId of pricesToMultiply) {
         window[priceId] /= factor;
         Math.round(window[priceId]);
         document.getElementById(priceId).innerHTML = numberFormatter(window[priceId]);
      }
      factorApplied = 1;
   } else {
      for (const priceId of pricesToMultiply) {
         window[priceId] /= factorApplied; 
         window[priceId] *= factor; 
         document.getElementById(priceId).innerHTML = numberFormatter(window[priceId]);
      }
      resetAndApplyMultiplier(factor); 
      factorApplied = factor; 
   }
   updateScorePerSecond();
}






