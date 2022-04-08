const setupOpenCloseMenu = () => {
  
  const buttonMenu = document.querySelector('.header__btnOpenMenu');

  const main = document.querySelector('.main');
  const filterBgAux = document.querySelector('.filters__background-aux');
  const ulFiltersList = document.querySelector('.filters__list');

  let isMenuOpen = true;

  buttonMenu.addEventListener('click', () => {
    
    buttonMenu.innerText = isMenuOpen ? 'ClOSE' : 'OPEN';
    isMenuOpen = !isMenuOpen;

    main.classList.toggle('disabled-scroll');
    filterBgAux.classList.toggle('filters--opened');
    ulFiltersList.classList.toggle('filters--opened');

  });


}

export default setupOpenCloseMenu;