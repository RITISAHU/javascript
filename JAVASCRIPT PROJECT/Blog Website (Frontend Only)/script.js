// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog is ready!");

    // Optional: Make tags clickable to filter posts
    const tags = document.querySelectorAll('.tags span');
    tags.forEach(tag => {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', () => {
            const selectedTag = tag.textContent.trim();
            const posts = document.querySelectorAll('.blog-post');

            posts.forEach(post => {
                const postTags = Array.from(post.querySelectorAll('.tags span')).map(t => t.textContent.trim());
                if (postTags.includes(selectedTag)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });

    // Optional: Reset post filter on header click
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        document.querySelectorAll('.blog-post').forEach(post => {
            post.style.display = 'block';
        });
    });
});
