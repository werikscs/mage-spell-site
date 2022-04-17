export const createSpellCard = (spellObj) => {

  // console.log(spellObj);
  const spellID = spellObj.id;

  const name = spellObj.identity.name;
  const author = spellObj.identity.author || 'unknown';
  const favoriteStatus = isFavorite(name) ? 'fav' : 'unfav';
  // console.log(name, author);

  const pratice = spellObj.properties['practice'];
  const primeryFactor = spellObj.properties['primary factor'];
  const suggestedRoteSkills = spellObj.properties['suggested rote skills'] || '';
  const withstand = spellObj.properties['withstand'] || '';
  const manaCost = spellObj.properties['cost'] || '';
  // console.log(pratice, primeryFactor, suggestedRoteSkills, withstand, manaCost);

  const descriptions = spellObj['description'];
  // console.log(descriptions[0])

  const othersArray = spellObj['others'] || '';
  // console.log(others)

  const li = document.createElement('li');
  li.classList.add('spells__list__item');
  li.setAttribute('id',`${spellID}`);

  li.innerHTML = 
  `

    <i class="star ${favoriteStatus} fas fa-star"></i>

    <h3 class="spell__name">${name}</h3>

    <h4 class="spell__author">
      <span class="author__title">Author:</span>
      ${author}
    </h4>

    <section class="spell__info">

      <span class="info">
        <span class="text__titles">Practice:</span>
        ${pratice}
      </span>

      <span class="info">
        <span class="text__titles">Primary Factor:</span>
        ${primeryFactor}
      </span>

      ${
        manaCost ?
        ` <span class="info">
            <span class="text__titles">Cost:</span>
            ${manaCost}
          </span>
        `
        :
        ``
      }

      ${
        withstand ?
          `<span class="info">
            <span class="text__titles">Withstand:</span>
            ${withstand}
            </span>
          `
          :
          ``
      }

      <span class="info">
        <span class="text__titles">Suggested Rote Skills:</span>
        ${suggestedRoteSkills}
      </span>

    </section>

    <section class="spell__description">
      ${
        descriptions.map(description => {
          return `<p class="description">${description}</p>`
        }).join('')
      }
    </section>

    <section class="idSpell">#${spellID}</section>

  `
  const othersPs = [];

  for (const otherIndex in othersArray) {

    const otherObj = othersArray[otherIndex];

    for (const key in otherObj) {
      // console.log('titulo: ',key)
      // console.log('descrição: ',otherObj[key])
      const p = document.createElement('p');
      p.classList.add('others');

      p.innerHTML = 
      `
        <span class="text__titles">${key}:</span>
        ${otherObj[key]}
      `
      othersPs.push(p)
    }
  }

  if(othersPs.length){

    const sectionOthers = document.createElement('section');
    sectionOthers.classList.add('spell__description');
    
    othersPs.forEach( p => {
      sectionOthers.appendChild(p);
    })
  
    li.appendChild(sectionOthers);
  }


  return li;
}

function isFavorite(spellName){

  const arrayNames = localStorage.getItem('spellsNames') ?
    JSON.parse(localStorage.getItem('spellsNames')) : [];

  return arrayNames.includes(spellName);

}