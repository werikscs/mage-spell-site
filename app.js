import setupOpenCloseMenu from './src/js/setupOpenCloseMenu.js';
import { dbSpells } from './src/db/dbSpells.js';
import { createSpellCard } from './src/js/createSpellCard.js';

const ulSpells = document.querySelector('.spells__list');
let searchedArcana = 'all';
let searchedDegree = 'all';
// console.log(ulSpells);

// const searchedText = document.querySelector('#searchInput');

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

ulSpells.addEventListener('click', (e) => {

  const target = e.target;
  const targetTag = target.tagName;

  if(targetTag === 'I'){
    handleClickFavoriteStar(target);
  }

});

function handleClickFavoriteStar(target){

  target.classList.toggle('unfav');
  target.classList.toggle('fav');

  const targetLi = target.closest('li');
  const spellName = targetLi.querySelector('.spell__name').innerText;

  if(target.className.includes('unfav')){
    handleLocalStorage('remove', spellName);
  } else {
    handleLocalStorage('add', spellName);
  }

}

function handleLocalStorage(action, spellName){

  if(action === 'add'){
    
    const arrayNames = localStorage.getItem('spellsNames') ?
      JSON.parse(localStorage.getItem('spellsNames')) : [];

    arrayNames.push(spellName);

    localStorage.setItem('spellsNames', JSON.stringify(arrayNames));
  } else {
    
    const arrayNames = JSON.parse(localStorage.getItem('spellsNames'));

    const indexToRemove = arrayNames.findIndex(name => name === spellName);

    arrayNames.splice(indexToRemove, 1);

    localStorage.setItem('spellsNames', JSON.stringify(arrayNames));
  }

}