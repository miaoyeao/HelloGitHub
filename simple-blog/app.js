const posts = [
  {
    title: "如何开始学习 JavaScript",
    date: "2026-03-15",
    summary: "分享一套适合初学者的 JavaScript 学习路线，从语法到项目实践。",
    tags: ["JavaScript", "学习路径"]
  },
  {
    title: "我做的第一个小工具",
    date: "2026-03-28",
    summary: "记录从想法到上线的全过程，包括功能拆解和常见问题处理。",
    tags: ["项目实践", "开发心得"]
  },
  {
    title: "前端页面排版的 5 个技巧",
    date: "2026-04-02",
    summary: "通过真实案例讲解间距、层级、字体和配色如何让页面更清晰。",
    tags: ["前端", "CSS"]
  }
];

const searchInput = document.getElementById("searchInput");
const postList = document.getElementById("postList");
const tagList = document.getElementById("tagList");

let activeTag = "";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function renderTags() {
  const allTags = [...new Set(posts.flatMap((post) => post.tags))];
  tagList.innerHTML = "";

  allTags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = `tag ${activeTag === tag ? "tag--active" : ""}`.trim();
    button.textContent = tag;
    button.addEventListener("click", () => {
      activeTag = activeTag === tag ? "" : tag;
      renderTags();
      renderPosts();
    });
    tagList.appendChild(button);
  });
}

function renderPosts() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = posts.filter((post) => {
    const matchesKeyword =
      post.title.toLowerCase().includes(keyword) ||
      post.tags.some((tag) => tag.toLowerCase().includes(keyword));

    const matchesTag = !activeTag || post.tags.includes(activeTag);

    return matchesKeyword && matchesTag;
  });

  if (filtered.length === 0) {
    postList.innerHTML = '<div class="empty">没有找到符合条件的文章。</div>';
    return;
  }

  postList.innerHTML = filtered
    .map(
      (post) => `
      <article class="post">
        <h3>${post.title}</h3>
        <div class="meta">${formatDate(post.date)}</div>
        <p>${post.summary}</p>
        <div class="tags">
          ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

searchInput.addEventListener("input", renderPosts);

renderTags();
renderPosts();
