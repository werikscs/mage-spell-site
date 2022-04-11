import setupOpenCloseMenu from './src/js/setupOpenCloseMenu.js';
import { dbSpells } from './src/db/dbSpells.js';
import { createSpellCard } from './src/js/createSpellCard.js';

const ulSpells = document.querySelector('.spells__list');

let searchedText = '';
let searchedArcana = 'all';
let searchedDegree = 'all';
let favoriteArray = [];
let isShowingFavoriteSpells = false;
// console.log(ulSpells);

// const searchedText = document.querySelector('#searchInput');

function searchForArcana(){

  ulSpells.innerHTML = '';

  for (const arcana in dbSpells) {
    
    const currentArcana = dbSpells[arcana];
    
    searchForDegreeList(currentArcana);

  }

  favoriteArray = [];

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

    if(isShowingFavoriteSpells){

      const spellName = spell.identity.name;

      if(favoriteArray.includes(spellName)){
        searchForRegExp(spell);
      }

    } else {

      searchForRegExp(spell);

    }

  });

}

function searchForRegExp(spell){

  const spellName = spell.identity.name;
  const re = RegExp(searchedText, 'ig');

  if(searchedText.length){

    if(re.test(spellName)){
      const spellCard = createSpellCard(spell);
      ulSpells.appendChild(spellCard);
    }

  } else {
    const spellCard = createSpellCard(spell);
    ulSpells.appendChild(spellCard);
  }
}

setupOpenCloseMenu();
searchForArcana();

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchInput.addEventListener('keyup', (e) => {
  if(e.key === "Enter"){
    searchButton.click();
  }
});


searchButton.addEventListener('click', () => {

  searchedText = searchInput.value.trim();

  if(searchedText.length){
    searchForArcana();
  }

  searchInput.value = '';

});

const selectArcanas = document.querySelector('#arcanas');
selectArcanas.addEventListener('change', (e) => {
  searchedArcana = e.target.value;
  isShowingFavoriteSpells = false;

  isToShowEmptyFavorites(false)

  searchForArcana();
});

const selectDegrees = document.querySelector('#degrees');
selectDegrees.addEventListener('change', (e) => {
  searchedDegree = e.target.value;
  isShowingFavoriteSpells = false;

  isToShowEmptyFavorites(false)

  searchForArcana();
});

const favoriteButton = document.querySelector('.favorite');
favoriteButton.addEventListener('click', () => {

  favoriteArray = localStorage.getItem('spellsNames') ?
    JSON.parse(localStorage.getItem('spellsNames')) : [];

    isShowingFavoriteSpells = true;
    favoriteArray.length ?
      isToShowEmptyFavorites(false) : isToShowEmptyFavorites(true)
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

    favoriteArray = arrayNames;

    localStorage.setItem('spellsNames', JSON.stringify(arrayNames));

    favoriteArray.length ?
      isToShowEmptyFavorites(false) : isToShowEmptyFavorites(true)

    searchForArcana();
  }

}

function isToShowEmptyFavorites(boolean){
  const sectionEmptySpells = document.querySelector('#empty-spells');
  const sectionSpells = document.querySelector('.spells');

  if(boolean){
    sectionSpells.classList.add('hidden')
    sectionEmptySpells.classList.add('empty-spells');
  } else {
    sectionEmptySpells.classList.remove('empty-spells');
    sectionSpells.classList.remove('hidden')
  }
}