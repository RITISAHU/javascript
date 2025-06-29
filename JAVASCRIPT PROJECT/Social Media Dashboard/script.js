let currentUser = "";
let posts = [];

function login() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    currentUser = username;
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("displayUser").textContent = currentUser;
  }
}

function createPost() {
  const content = document.getElementById("postContent").value.trim();
  if (content) {
    posts.unshift({
      user: currentUser,
      content,
      likes: 0,
      comments: []
    });
    document.getElementById("postContent").value = "";
    renderPosts();
  }
}

function likePost(index) {
  posts[index].likes++;
  renderPosts();
}

function addComment(index) {
  const commentInput = document.getElementById(`comment-${index}`);
  const comment = commentInput.value.trim();
  if (comment) {
    posts[index].comments.push({ user: currentUser, comment });
    commentInput.value = "";
    renderPosts();
  }
}

function renderPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <p><strong>${post.user}</strong>: ${post.content}</p>
      <button onclick="likePost(${index})">❤️ Like (${post.likes})</button>
      <div class="comment-section">
        <input type="text" id="comment-${index}" placeholder="Add a comment..." />
        <button onclick="addComment(${index})">Comment</button>
        <div class="comments">
          ${post.comments.map(c => `<p><strong>${c.user}:</strong> ${c.comment}</p>`).join("")}
        </div>
      </div>
    `;
    container.appendChild(postDiv);
  });
}
