fetch('data/letters.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('letters-grid');

    data.forEach(item => {
      const card = document.createElement('a');
      card.href = item.file;
      card.target = "_blank";
      card.className = 'letter-card';
      card.innerText = item.title;

      grid.appendChild(card);
    });
  });
