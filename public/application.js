const COLOURS = [ 'rgb(239, 58, 119)', 'rgb(253, 193, 3)', 'rgb(28, 192, 213)'];
const COLOURSLIGHT = [ 'rgba(239, 58, 119, 0.2)', 'rgba(253, 193, 3, 0.2)', 'rgba(28, 192, 213, 0.2)'];
const BLACK = 'rgb(0,0,0)';
const GREY = 'rgba(0,0,0,.5)';
const GREYBLUE = 'rgba(108, 117, 124, .8)';
const BACKGROUND = 'rgb(220, 226, 232)';


const showComments = () => {
  const commentsLink = Array.from(document.querySelectorAll('#comment-link'))
  commentsLink.forEach((commentLink) => {
    const commentBox = commentLink.parentNode.parentNode.nextElementSibling;

    commentLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (commentBox.classList.value.includes('invisible')) {
        commentBox.classList.remove('invisible');
      } else {
        commentBox.classList.add('invisible');
      }
    });
  });
};

const sexyColour = (items) => {
    items.forEach((item) => {
      console.log('adding colour')
      let newColour = COLOURS[Math.floor(Math.random() * COLOURS.length)]
      item.style.color = newColour
    });
};

const sexyBackground = (items) => {
  if (Array.isArray(items)) {
    items.forEach((item) => {
      let newColour = COLOURS[Math.floor(Math.random() * COLOURS.length)]
      item.style.backgroundColor = newColour
    });
  } else {
    items.style.backgroundColor = COLOURSLIGHT[Math.floor(Math.random() * COLOURSLIGHT.length)]
  }
};

const normalColour = (items) => {
  if (items[0].classList.value == "nav-link") {
    items.forEach((item) => {
      item.style.color = GREY
    });
  } else {
    items.forEach((item) => {
      item.style.color = BLACK
    });
  };
};

const normalBackground = (items) => {
  if (Array.isArray(items)) {
    items.forEach((item) => {
      item.style.backgroundColor = GREYBLUE
    });
  } else {
    items.style.backgroundColor = BACKGROUND
  }
};

const sexifyPage = () => {
  const sexifyBtn = document.querySelector('.sexify-button')
    sexifyBtn.addEventListener('click',(event) => {
      event.preventDefault();
      const navNot = Array.from(document.querySelectorAll('.nav-link'))
      const titles = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
      const shoutBtn = Array.from(document.querySelectorAll('.btn-custom'))
      const body = document.querySelector('body')

      if (sexifyBtn.classList.value.includes('active')) {
        sexifyBtn.classList.remove('active');

        normalColour(navNot);
        normalColour(titles);
        normalBackground(body);
        normalBackground(shoutBtn);
      } else {
        sexifyBtn.classList.add('active');

        sexyColour(navNot);
        sexyColour(titles);
        sexyBackground(body);
        sexyBackground(shoutBtn);
      }
    });
};

showComments();
sexifyPage();
