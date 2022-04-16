const setupOpenCloseMenu = () => {
  
  const buttonMenu = document.querySelector('.header__menu-icon');

  const filterBgAux = document.querySelector('.bg-aux');
  const ulFiltersList = document.querySelector('.menu__ul-filters');

  buttonMenu.addEventListener('click', () => {

    toggleShowFilters();

  });

  const navMenu = document.querySelector('.menu');
  navMenu.addEventListener('click', (e) => {

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