const showComments = () => {
  const commentsLink = Array.from(document.querySelectorAll('#comment-link'))
  commentsLink.forEach((commentLink) => {
    const commentBox = commentLink.parentNode.parentNode.nextElementSibling;

    commentLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (commentBox.classList.value.includes("invisible")) {
        commentBox.classList.remove('invisible');
      } else {
        commentBox.classList.add('invisible');
      }
    });
  });
};

showComments();
