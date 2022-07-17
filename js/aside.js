const aside_btn = document.getElementById('aside_btn')
const aside = document.getElementById('aside')
aside_btn.onclick = () => {
  if (aside.className.indexOf('aside_position') === -1) {
    aside.classList.add('aside_position')
  } else {
    aside.classList.remove('aside_position')
  }
  console.log(aside.className.indexOf('asdie_position'));
}