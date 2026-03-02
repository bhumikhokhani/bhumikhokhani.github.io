fetch('data/caseStudies.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('work-grid');

    data.forEach(item => {
      const card = document.createElement('a');
      card.href = item.link;
      card.className = 'work-card';

      card.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <small>${item.impact}</small>
      `;

      grid.appendChild(card);
    });
  });
