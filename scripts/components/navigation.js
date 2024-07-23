"use strict";

const allBtn = [ ...document.querySelectorAll( ".navBtn" ) ];
const btnLogo = document.querySelector( "#logo" );
const btnStart = document.querySelector( "#btn-start" );
const btnProjects = document.querySelector( "#btn-projects" );
const btnSkills = document.querySelector( "#btn-skills" );
const btnAbout = document.querySelector( "#btn-about" );
const btnContact = document.querySelector( "#btn-contact" );

//*===============Logo===============*\\

btnLogo.addEventListener( "click", () => {
    window.scroll( {
        top: 0,
        left: 0,
        behavior: "smooth"
    } );
} );

//*===============Inicio===============*\\

btnStart.addEventListener( "click", () => {
    window.scroll( {
        top: 0,
        left: 0,
        behavior: "smooth"
    } );
} );

//*===============Projetos===============*\\

btnProjects.addEventListener( "click", () => {
    window.scroll( {
        top: 750,
        left: 0,
        behavior: "smooth"
    } );
} );

//*===============Habilidades===============*\\

btnSkills.addEventListener( "click", () => {
    window.scroll( {
        top: 1300,
        left: 0,
        behavior: "smooth"
    } );
} );

//*===============Sobre-Mim===============*\\

btnAbout.addEventListener( "click", () => {
    window.scroll( {
        top: 1850,
        left: 0,
        behavior: "smooth"
    } );
} );

//*===============Contato===============*\\

btnContact.addEventListener( "click", () => {
    window.scroll( {
        top: 2200,
        left: 0,
        behavior: "smooth"
    } );
} );

//*===============Scroll-Detector===============*\\

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if( window.innerWidth >= 500 ) {

            //*===============Start-Active===============*\\
        if ( ( scrollPosition >= 0 ) && ( scrollPosition < 500 ) ) {

            allBtn.map( ( element ) => {
                element.classList.remove( "active" );
                element.classList.add( "inative" );
            } );
    
            btnStart.classList.remove( "inative" );
            btnStart.classList.add( "active" );

            //*===============Projects-Active===============*\\
        } else if ( ( scrollPosition >= 700 ) && ( scrollPosition < 1000 ) ) {
    
            allBtn.map( ( element ) => {
                element.classList.remove( "active" );
                element.classList.add( "inative" );
            } );
    
            btnProjects.classList.remove( "inative" );
            btnProjects.classList.add( "active" );

            //*===============Skills-Active===============*\\
        } else if( ( scrollPosition >= 1250 ) && ( scrollPosition < 1600 ) ) {
    
            allBtn.map( ( element ) => {
                element.classList.remove( "active" );
                element.classList.add( "inative" );
            } );
    
            btnSkills.classList.remove( "inative" );
            btnSkills.classList.add( "active" );

            //*===============About-Active===============*\\
        } else if( ( scrollPosition >= 1650 ) && ( scrollPosition < 2000 ) ) {
            allBtn.map( ( element ) => {
                element.classList.remove( "active" );
                element.classList.add( "inative" );
            } );
    
            btnAbout.classList.remove( "inative" );
            btnAbout.classList.add( "active" );
        } else if ( scrollPosition >= 2000  ) {
            allBtn.map( ( element ) => {
                element.classList.remove( "active" );
                element.classList.add( "inative" );
            } );
    
            btnContact.classList.remove( "inative" );
            btnContact.classList.add( "active" );
        }
    };
});