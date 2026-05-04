// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fetch Hashnode RSS feed
fetch("https://hashnode.com/@yourusername/rss")
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let blogSection = document.getElementById("blog-list");
    items.forEach(el => {
      let title = el.querySelector("title").textContent;
      let link = el.querySelector("link").textContent;
      blogSection.innerHTML += `<li><a href="${link}" target="_blank">${title}</a></li>`;
    });
  });
