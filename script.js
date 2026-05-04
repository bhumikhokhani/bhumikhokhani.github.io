// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fetch Hashnode RSS feed via rss2json
const rssUrl = "https://bhumikhokhani.hashnode.dev/rss.xml";
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let blogSection = document.getElementById("blog-list"); // make sure your HTML has <div id="blog-list"></div>
    blogSection.innerHTML = ""; // clear any placeholder content

    data.items.slice(0, 5).forEach(item => { // show latest 5 posts
      let blogCard = `
        <div class="card">
          <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
          <p>${new Date(item.pubDate).toLocaleDateString()}</p>
          <p>${item.description.substring(0, 120)}...</p>
        </div>
      `;
      blogSection.innerHTML += blogCard;
    });
  })
  .catch(error => {
    console.error("Error fetching blog feed:", error);
    document.getElementById("blog-list").innerHTML = "<p>Unable to load blogs right now.</p>";
  });
