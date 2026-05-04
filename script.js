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
const rssUrl = "https://bhumikhokhani.hashnode.dev/rss.xml";
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let blogSection = document.getElementById("blogs");
    blogSection.innerHTML = "";

    if (data.items && data.items.length > 0) {
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
    } else {
      blogSection.innerHTML = "<p>No blog posts found.</p>";
    }
  })
  .catch(error => {
    console.error("Error fetching blog feed:", error);
    document.getElementById("blogs").innerHTML = "<p>Unable to load blogs at the moment.</p>";
  });
