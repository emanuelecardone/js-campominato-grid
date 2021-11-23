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
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                    </select>
                    <button type="submit" class="w_75p h_25p d-flex justify-content-center align-items-center p-0 btn my_grey_borders my_grey_bg">Play</button>
                </div>
            </div>
        </div>
    </div>
`;

// RIEMPIMENTO MAIN (SOLO GRIGLIA VUOTA)
const pageMain = document.querySelector(`main`);
pageMain.innerHTML = `
    <div class="game_wrapper">

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