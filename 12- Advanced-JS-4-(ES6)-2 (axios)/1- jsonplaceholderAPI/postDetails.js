const postDetails = function (post) {
  const { userId, title, body } = post;

  const postIdEl = document.querySelector('.post__id');
  const postTitleEl = document.querySelector('.post__title');
  const postBodyEl = document.querySelector('.post__body');

  postIdEl.textContent = `userId : ${userId}`;
  postTitleEl.textContent = title;
  postBodyEl.textContent = body;
};

const getPost = async function () {
  try {
    // Get id from url params
    const id = window.location.search.split('=')[1];

    // -- Way 2 - Using URLSearchParams for getting url params
    // const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('postId');

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    postDetails(data);
  } catch (err) {
    console.log(err);
  }
};
getPost();
