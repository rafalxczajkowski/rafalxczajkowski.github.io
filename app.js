//Change active button and section
const sectionButtons = document.querySelectorAll('.control')
const sections = document.querySelectorAll('.section')

for (let i = 0; i < sectionButtons.length; i++) {
  sectionButtons[i].addEventListener('click', () => {
    document.querySelector('.active-btn').classList.remove('active-btn')
    sectionButtons[i].className += ' active-btn'
    sections[i].scrollIntoView()
  })
}

//Toggle theme
const html = document.querySelector('html')
html.dataset.theme = 'dark'
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light'
  } else {
    html.dataset.theme = 'dark'
  }
})

//skill-bar bars width - HTML, CSS, JS, TS, React, Node, Git, Heroku, Python, SQL
let skillPerc = [
  '40%',
  '40%',
  '35%',
  '30%',
  '30%',
  '30%',
  '30%',
  '25%',
  '25%',
  '15%',
]
let skillBars = document.getElementsByClassName('skill')
for (let i in skillPerc) {
  skillBars[i].style.width = skillPerc[i]
}

document.addEventListener('scroll', () => {
  const activeButton = document.querySelector('.active-btn')
  if (isInViewport(sections[0])) {
    activeButton.classList.remove('active-btn')
    sectionButtons[0].className += ' active-btn'
  } else if (isInViewport(sections[1])) {
    activeButton.classList.remove('active-btn')
    sectionButtons[1].className += ' active-btn'
  } else if (isInViewport(sections[2])) {
    activeButton.classList.remove('active-btn')
    sectionButtons[2].className += ' active-btn'
  } else if (isInViewport(sections[3])) {
    activeButton.classList.remove('active-btn')
    sectionButtons[3].className += ' active-btn'
  }
})

function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2
  )
}
