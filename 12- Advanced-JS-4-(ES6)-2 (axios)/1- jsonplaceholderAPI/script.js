function displayPosts(post) {
  const { title, userId, id: postId } = post;
  const postContainerEl = document.querySelector('.posts');

  const postEl = document.createElement('div');
  postEl.classList.add('card', 'mx-4', 'my-3', 'p-0');
  postEl.innerHTML = `<span class='card-title post__id mb-2 p-2'>userId : ${userId}</span>`;
  postEl.innerHTML += `<p class='p-2'>${title}</p>`;

  postContainerEl.appendChild(postEl);

  postEl.addEventListener('click', () => {
    window.location.href = `postDetails.html?postId=${postId}`;
  });
}

const getPosts = async function () {
  try {
    // 1) Get data
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    // 2) Display data
    data.map((post) => displayPosts(post));
  } catch (err) {
    console.log(err);
  }
};

getPosts();
