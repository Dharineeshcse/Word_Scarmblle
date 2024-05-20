alert('Click the random button to Start');
const reset = document.querySelector(".reset");
const answerBox = document.querySelectorAll(".input_box");
const randomwords = document.querySelector('.random_words');
const randomButton = document.querySelector('.random');
const submitButton = document.querySelector('.submit_button');
let life = 5;
const listScore = document.querySelector('.score');


const words = `Animal
Basket
Camera
Danger
Escape
Fabric
Garden
Hidden
Insect
Jungle
Lagoon
Marvel
Nectar
Orbit
Pillow
Quaint
Rocket
Safari
Travel
Unique
Vision
Window
Yellow
Zipper
Anchor
Bubble
Canyon
Dazzle
Expert
Forest
Gentle
Hammok
Island
Jigsaw
Kindly
Lizard
Mosaic
Nimbus
Orange
Parrot
Quartz
Ribbon
Sunset
Thrive
Unicorn
Voyage
Walnut
Xylose
Yonder
Zenith`;

const shuffled_words = `minalA
ketasB
maraeC
eangDr
epacsE
acbirF
ednGar
iddenH
ncetIs
gelnuJ
agnooL
vrealmM
ctranNe
biOrt
lliowP
nQatui
kRceto
fSaria
aevlTr
iquenU
osiVin
dWnodi
lowYel
eppriZ
rAhcno
uebBbl
yCanno
lzaeDz
Eetxpr
sFtoer
lteenG
kaHomm
dnalsI
iasgwJ
dlyinK
dzaLzir
sicmoa
imbusN
arnOeg
taPorr
aQuztr
ebbRni
nsetuS
iverTh
cUnrino
agoveV
natlWu
eXsylo
edronY
tZneih`;

const wordslist = words.split("\n");
const shufflelist = shuffled_words.split('\n');
var random = 0;


function handleValues(event) {
    event.value = "";
  }

function generateRandom(){
random = Math.floor(Math.random()*wordslist.length);
randomwords.textContent = shufflelist[random].toLowerCase();
console.log(wordslist[random]);
}


reset.addEventListener("click", function (event) {
  answerBox.forEach(handleValues);
});

randomButton.addEventListener('click', generateRandom);

submitButton.addEventListener('click',function(){
    let userInput = "";
    for(let i = 0 ; i < 6 ; i++){
         userInput = userInput + answerBox[i].value;
    }
    if(userInput.toLowerCase() != wordslist[random].toLowerCase()){
        alert("Your answer is wrong");
        answerBox.forEach(handleValues);
        life-=1;
        const scoreString = `Life:(${life}/5)`;
        listScore.textContent = scoreString;
    }
    else{
        alert('hooray you got the right one').toUpperCase();
    }
    if(life<=0){
        let restartGame = prompt('Game is over!! Do You like to restart If Yes! type: Yes').toUpperCase();
        console.log(restartGame);
        if(restartGame == 'YES'){
            life = 5;
            listScore.setAttribute('style','color: #4A5567;');
            const scoreString = `Life:(${life}/5)`;
            listScore.textContent = scoreString;
        }
        else{
            life = 0;
        }
    }
    if(life<3){
        listScore.setAttribute('style','color: #672171;')
    }
});







