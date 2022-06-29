 
 

// dropDown navigation

let dropDownFeature = document.querySelector('#dropDownF');
let dropDownCompany = document.querySelector('#dropDownC');
let dropFeature = document.querySelector('#dropFeatures');
let dropCompany = document.querySelector('#dropCompany');


dropFeature.addEventListener('click', function DropDownMenu() {
    if(dropDownF.style.display == 'block' && dropDownC.style.display == 'none') {
        dropDownF.style.display = 'none'
    }
    else {
        dropDownF.style.display = 'block'
        dropDownC.style.display = 'none'
    }
});

dropCompany.addEventListener('click', function DropDownMenu() {
    if(dropDownF.style.display == 'none' && dropDownC.style.display == 'block') {
        dropDownC.style.display = 'none'
    }
    else {
        dropDownC.style.display = 'block'
        dropDownF.style.display = 'none'
    }
});


// ***********************************************
    // hamburger menu
// ***********************************************

let isMenuClosed = true;

function ToggleMenu() {
    if(isMenuClosed) { 

        $('nav').animate({
            right: -250
        }, 420, 'swing');

        isMenuClosed = false;
    }
    else { 

        $('nav').animate({
            right: 0
        }, 300, 'swing');

        isMenuClosed = true;
    }
} 





// ***********************************************
        // set the date in the footer
// ***********************************************

let date = new Date();
let currentYear = date.getFullYear();

let yearNow = document.querySelector('#yearNow');

yearNow.innerHTML = currentYear;


