/**
PROTOCOLS:
    GET SONG DETAILS FROM THE DATABASE JSON OBJ
    FOR EACH SONG, CREATE SONG LIST LINK ELEMENT AND ADD A UNIQUE ID
    EACH ID REPRESENTS THE SONG IN LIST ACCORDING TO THE LIST ORDER
    EACH ELEMENT, WHEN CLICKED, WILL PLAY THE SOUND FROM THE ELEMENTS ID 
    
    ONE SONG AT A TIME
    PAUSE AND PLAY STATE TRACKING -> CHANGE THE PLAY/PAUSE BUTTON
    ( USING PNG IMAGE FILES, ICONS CAN BE MADE FOR THE SITE )
 */

// ADDING UI THEME ANIMATION -> DEFAULT = LIGHT -> LIGHT : DARK [TOGGLE]
/**
LIST OF REQUIRED ELEMENTS:
 * uit-0a       body
 * mode-change-btn  button-theme change/ toggle
 * music-list      list items
 */
const body1 = document.querySelector('.uit-0a'),
btn1 = document.querySelector('.mode-change-btn'),
list = document.querySelector('.music-list');

document.querySelector('head').innerHTML += "<link href='./css/Themes/dark.css' rel='stylesheet' />"
btn1.addEventListener('click',e=>{
    body1.classList.add('dark-theme')
})