import setupOpenCloseMenu from './src/js/setupOpenCloseMenu.js';
import { dbSpells } from './src/db/dbSpells.js';
import { createSpellCard } from './src/js/createSpellCard.js';

const ulSpells = document.querySelector('.spells__list');
// console.log(ulSpells);

setupOpenCloseMenu();
searchForArcana();



function searchForArcana(){

  for (const arcana in dbSpells) {
    
    const currentArcana = dbSpells[arcana];

    searchForDegreeList(currentArcana);

  }

}

function searchForDegreeList(arcana){

  for(const degreeList in arcana) {
    
    const currentDegreeList = arcana[degreeList];

    searchForDegree(currentDegreeList);

  }

}

function searchForDegree(degreeList){

  for (const degree in degreeList) {

    const currentDegree = degreeList[degree];

    searchForSpell(currentDegree);
    
  }

}

function searchForSpell(spellList){

  spellList.forEach( spell => {

    const spellCard = createSpellCard(spell);
    ulSpells.appendChild(spellCard);

  });

}