fetch('data/letters.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('letters-grid');

    data.forEach(item => {
      const wrapper = document.createElement('div');
      wrapper.className = 'letter-wrapper';

      wrapper.innerHTML = `
        <div class="letter-thumb" data-full="${item.full}">
          <img src="${item.thumbnail}" alt="${item.title}">
          <div class="letter-overlay">${item.title}</div>
        </div>
      `;

      grid.appendChild(wrapper);
    });

    document.querySelectorAll('.letter-thumb').forEach(el => {
      el.addEventListener('click', function() {
        const src = this.getAttribute('data-full');
        document.getElementById('modal-frame').src = src;
        document.getElementById('letter-modal').style.display = 'flex';
      });
    });
  });

function closeModal() {
  document.getElementById('letter-modal').style.display = 'none';
  document.getElementById('modal-frame').src = '';
}
