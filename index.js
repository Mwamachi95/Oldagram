const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContainer = document.querySelector('main .container')

function renderPost(post) {
    return `
        <section class="post-container">
            <div class="oldagram-content">
                <div class="thumbnail">
                    <div class="thumbnail-content">
                        <img src="${post.avatar}" class="user-avatar" onerror="this.src='images/placeholder-avatar.png'">
                        <div>
                            <h2 class="name">${post.name}</h2>
                            <p class="location">${post.location}</p>
                        </div>
                    </div>

                    <img src="${post.post}" class="selfie-img" ondblclick="handleLike(${posts.indexOf(post)})" onerror="this.src='images/placeholder-post.png'">

                    <div class="thumbnail-icons">
                        <img class="thmb-social-icon" src="images/icon-heart.png" onclick="handleLike(${posts.indexOf(post)})" onerror="this.style.display='none'">
                        <img class="thmb-social-icon" src="images/icon-comment.png" onerror="this.style.display='none'">
                        <img class="thmb-social-icon" src="images/icon-dm.png" onerror="this.style.display='none'">
                    </div>

                    <p class="post-likes">${post.likes.toLocaleString()} likes</p>
                    <p class="user-comment">
                        <span class="username">${post.username}</span> ${post.comment}
                    </p>
                </div>
            </div>
        </section>
    `
}

function handleLike(postIndex) {
    posts[postIndex].likes++
    renderPosts()
}

function renderPosts() {
    mainContainer.innerHTML = posts.map(post => renderPost(post)).join('')
}

// Initial render
renderPosts()