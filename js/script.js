// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// RIEMPIMENTO HEADER
const pageHeader = document.querySelector(`header`);
pageHeader.innerHTML = `
    <div class="container-fluid">
        <div class="row row-cols-2">
            <div class="col">
                <div class="left_header_wrapper d-flex align-items-center">
                    <img class="w_75p" src="img/logo.jpg" alt="Logo Boolean">
                    <h1 class="d-inline-block fw-bold fs_35">Campo Minato: la Griglia</h1>
                </div>
            </div>
            <div class="col">
                <div class="h-100 select_wrapper d-flex justify-content-end align-items-center">
                    <span>Difficoltà:</span>
                    <select class="form-select w-25 h_25p p-0 my_grey_borders my_grey_bg" aria-label="Default select example">
                        <option id="easy" value="1" selected="selected">Easy</option>
                        <option id="medium" value="2">Medium</option>
                        <option id="hard" value="3">Hard</option>
                    </select>
                    <button type="submit" class="start_button w_75p h_25p d-flex justify-content-center align-items-center p-0 btn my_grey_borders my_grey_bg">Play</button>
                </div>
            </div>
        </div>
    </div>
`;

// RIEMPIMENTO MAIN (SOLO GRIGLIA VUOTA)
const pageMain = document.querySelector(`main`);
pageMain.innerHTML = `
    <div class="game_wrapper d-flex flex-wrap">

    </div>
`;

// RIEMPIMENTO FOOTER
const pageFooter = document.querySelector(`footer`);
pageFooter.innerHTML = `
    <div class="container-fluid">
        <div class="row row-cols-1">
            <div class="col">
                <div class="footer_span_wrapper d-flex align-items-center">
                    <span class="fs-5 ms_20">Made with <i class="fas fa-heart"></i> by <a href="#">Boolean</a></span>
                </div>
            </div>
        </div>
    </div>
`;


// Variabile tasto start
const playButton = document.querySelector('.start_button');
// Variabile select difficoltà
const difficultyChoice = document.querySelector('.form-select');
// Variabile per la scelta difficoltà (do easy di default poiché easy è selected di default)
let userDifficultyChoice = `easy`;
// Decisione della difficoltà da parte dell'utente
difficultyChoice.addEventListener('change', function(){
    if(difficultyChoice.value === "1"){
        userDifficultyChoice = `easy`;
    } else if(difficultyChoice.value === "2"){
        userDifficultyChoice = `medium`;
    } else if(difficultyChoice.value === "3"){
        userDifficultyChoice = `hard`;
    }
});
// Variabile per contenitore dei box
const gameContainer = document.querySelector('.game_wrapper');

// Evento click per scatenare il tutto
playButton.addEventListener('click', function(){
    gameContainer.innerHTML = '';
    fillingGameUp(userDifficultyChoice);
});


// FUNZIONI


// Funzione principale per inserimento box e numeri nella griglia di gioco, con i relativi stili
//
// userDifficulty -> difficoltà scelta dall'utente. Sarà determinante per inquadrare il numero di box da generare
//
// return -> questa funzione non ritorna nulla, in quanto scatena semplicemente una serie di eventi
function fillingGameUp (userDifficulty){

    let numberOfBoxes;

    if(userDifficulty === `easy`){
        numberOfBoxes = 100;
    } else if(userDifficulty === `medium`){
        numberOfBoxes = 81;
    } else if (userDifficulty === `hard`){
        numberOfBoxes = 49;
    }
    const numbersToUse = fillingBoxesUp(userDifficulty);
    for(let i = 0; i < numberOfBoxes; i++){
        currentBox = document.createElement('div');
        if(numberOfBoxes === 100){
            currentBox.classList.add('easy', 'box');
        } else if(numberOfBoxes === 81){
            currentBox.classList.add('medium', 'box');
        } else if(numberOfBoxes === 49){
            currentBox.classList.add('hard', 'box');
        }
        gameContainer.appendChild(currentBox);
        currentBox.innerHTML = numbersToUse[i];
        currentBox.addEventListener('click', makeThemBlue);
    }
}

// Funzione per assegnare la classe active ai box
//
// -> non ci sono argomenti in entrata
//
// -> non c'è return, questa funzione scatena semplicemente un evento
function makeThemBlue() {
    this.classList.add('active');
}

// Funzione per generare un arrai di numeri diversi tra loro
//
// userDifficulty -> difficoltà scelta dall'utente. Determinante per capire quanti numeri devo generare
//
// return -> la funzione ritorna un array di numeri diversi tra loro, la quantità di numeri dipende dalla difficoltà scelta dall'utente
function fillingBoxesUp(userDifficulty){
    let numbersArray = [];
    let numbersAmount;
    
    if(userDifficulty === `easy`){
        numbersAmount = 100;
    } else if(userDifficulty === `medium`){
        numbersAmount = 81;
    } else if (userDifficulty === `hard`){
        numbersAmount = 49;
    }
    while(numbersArray.length < numbersAmount){
        const currentNumber = Math.floor(Math.random() * numbersAmount) + 1;
        if(!(numbersArray.includes(currentNumber))){
            numbersArray.push(currentNumber);
        }
    }
    return numbersArray;
}
    

  
