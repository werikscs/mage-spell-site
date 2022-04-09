const setupOpenCloseMenu = () => {
  
  const buttonMenu = document.querySelector('.header__menuIcon');

  const filterBgAux = document.querySelector('.filters__background-aux');
  const ulFiltersList = document.querySelector('.filters__list');

  buttonMenu.addEventListener('click', () => {

    toggleShowFilters();

  });

  const filtersSection = document.querySelector('.filters');
  filtersSection.addEventListener('click', (e) => {

    const target = e.target;
    if(target.tagName === 'DIV'){
      toggleShowFilters();
    }

  });

  function toggleShowFilters(){

    filterBgAux.classList.toggle('filters--opened');
    ulFiltersList.classList.toggle('filters--opened');

  }

}

export default setupOpenCloseMenu;