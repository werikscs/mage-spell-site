import setupOpenCloseMenu from './src/js/setupOpenCloseMenu.js';
import { dbSpells } from './src/db/dbSpells.js';
import { createSpellCard } from './src/js/createSpellCard.js';

const ulSpells = document.querySelector('.spells__list');
// console.log(ulSpells);

// const searchedText = document.querySelector('#searchInput');

let searchedArcana = 'all';
let searchedDegree = 'all';

const selectArcanas = document.querySelector('#arcanas');
selectArcanas.addEventListener('change', (e) => {
  searchedArcana = e.target.value;
  searchForArcana();
});

const selectDegrees = document.querySelector('#degrees');
selectDegrees.addEventListener('change', (e) => {
  searchedDegree = e.target.value;
  searchForArcana();
});

function searchForArcana(){

  ulSpells.innerHTML = '';

  for (const arcana in dbSpells) {
    
    const currentArcana = dbSpells[arcana];
    
    searchForDegreeList(currentArcana);

  }

}

function searchForDegreeList(arcana){

  for(const degreeList in arcana) {
    
    const currentDegreeList = arcana[degreeList];

    if(searchedArcana === 'all'){
      searchForDegree(currentDegreeList);

    } else {
      
      if(searchedArcana === degreeList){
        searchForDegree(currentDegreeList);
      }
    }


  }

}

function searchForDegree(degreeList){

  for (const degree in degreeList) {

    const currentDegree = degreeList[degree];

    if(searchedDegree === 'all'){
      searchForSpell(currentDegree);

    } else {

      if(searchedDegree === degree){
        searchForSpell(currentDegree);
      }

    }

    
  }

}

function searchForSpell(spellList){

  spellList.forEach( spell => {

    const spellCard = createSpellCard(spell);
    ulSpells.appendChild(spellCard);

  });

}

setupOpenCloseMenu();
searchForArcana();