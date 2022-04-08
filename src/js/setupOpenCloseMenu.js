const setupOpenCloseMenu = () => {
  
  const buttonMenu = document.querySelector('.header__menuIcon');

  // const main = document.querySelector('.main');
  const filterBgAux = document.querySelector('.filters__background-aux');
  const ulFiltersList = document.querySelector('.filters__list');

  buttonMenu.addEventListener('click', () => {

    // main.classList.toggle('disabled-scroll');
    filterBgAux.classList.toggle('filters--opened');
    ulFiltersList.classList.toggle('filters--opened');

  });


}

export default setupOpenCloseMenu;