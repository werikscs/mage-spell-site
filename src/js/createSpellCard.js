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
  // console.log(descriptions)

  const others = spellObj['others'] || '';
  console.log(others)


  const li = document.createElement('li');
  li.classList.add('spells__list__item');

  li.innerHTML = 
  `
    <h3 class="spell__name"></h3>

    <h4 class="spell__author">
      <strong>Author:</strong>
      White Wolf
    </h4>

    <section class="spell__info">

      <span class="info">
        <strong>Practice:</strong>
        Compelling
      </span>

      <span class="info">
        <strong>Primary Factor:</strong>
        Duration
      </span>

      <span class="info">
        <strong>Withstand:</strong>
        Resolve
      </span>

      <span class="info">
        <strong>Suggested Rote Skills:</strong>
        Crafts, Occult, Larceny
      </span>

    </section>

    <section class="spell__description">
      <p class="description"></p>
    </section>
  `

}