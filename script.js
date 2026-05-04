// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fetch Hashnode RSS feed via rss2json proxy
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://bhumikhokhani.hashnode.dev/rss.xml")
  .then(response => response.json())
  .then(data => {
    let blogSection = document.getElementById("blogs");
    if (!blogSection) return;

    // Limit to latest 5 posts
    data.items.slice(0, 5).forEach(item => {
      const blogCard = document.createElement("div");
      blogCard.classList.add("card");

      blogCard.innerHTML = `
        <h3>${item.title}</h3>
        <p>${new Date(item.pubDate).toLocaleDateString()}</p>
        <a href="${item.link}" target="_blank">Read More</a>
      `;

      blogSection.appendChild(blogCard);
    });
  })
  .catch(error => {
    console.error("Error fetching blog feed:", error);
    let blogSection = document.getElementById("blogs");
    if (blogSection) {
      blogSection.innerHTML = "<p>Unable to load blogs at the moment.</p>";
    }
  });
