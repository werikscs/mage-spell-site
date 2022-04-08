export const createSpellCard = (spellObj) => {

  // console.log(spellObj);

  const name = spellObj.identity.name;
  const author = spellObj.identity.author || '';
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

  li.innerHTML = 
  `
    <h3 class="spell__name">${name}</h3>

    <h4 class="spell__author">
      <strong>Author:</strong>
      ${author}
    </h4>

    <section class="spell__info">

      <span class="info">
        <strong>Practice:</strong>
        ${pratice}
      </span>

      <span class="info">
        <strong>Primary Factor:</strong>
        ${primeryFactor}
      </span>

      ${
        manaCost ?
        ` <span class="info">
            <strong>Cost:</strong>
            ${manaCost}
          </span>
        `
        :
        ``
      }

      ${
        withstand ?
          `<span class="info">
            <strong>Withstand:</strong>
            ${withstand}
            </span>
          `
          :
          ``
      }

      <span class="info">
        <strong>Suggested Rote Skills:</strong>
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

  `
  const othersPs = [];

  for (const otherIndex in othersArray) {

    const otherObj = othersArray[otherIndex];

    for (const key in otherObj) {
      // console.log('titulo: ',key)
      // console.log('descrição: ',otherObj[key])
      const p = document.createElement('p');
      p.classList.add('info');

      p.innerHTML = 
      `
        <strong>${key}:</strong>
        ${otherObj[key]}
      `
      othersPs.push(p)
    }
  }

  const sectionOthers = document.createElement('section');
  sectionOthers.classList.add('spell__description');
  
  othersPs.forEach( p => {
    sectionOthers.appendChild(p);
  })

  li.appendChild(sectionOthers);


  return li;
}