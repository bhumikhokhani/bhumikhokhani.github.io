fetch('data/testimonials.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('testimonial-grid');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'testimonial-card';

      card.innerHTML = `
        <a href="${item.linkedin}" target="_blank">
          <img src="${item.photo}" class="testimonial-img">
        </a>
        <p>${item.text}</p>
        <a href="${item.linkedin}" target="_blank" class="testimonial-name">
          <h4>${item.name}</h4>
        </a>
        <small>${item.role}</small>
      `;

      grid.appendChild(card);
    });
  });
