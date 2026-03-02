fetch('data/caseStudies.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('work-grid');

    data.forEach(item => {
      const card = document.createElement('a');
      card.href = item.file;
      card.className = 'work-card';

      card.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
      `;

      grid.appendChild(card);
    });
  });
