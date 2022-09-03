const list = document.querySelector('.legendList')
const legend = document.querySelectorAll('.legend')
const selections = document.querySelectorAll('.selections')
document.addEventListener('contextmenu', e => e.preventDefault());
const info = document.querySelector('.infoBox')


const div = document.querySelector('div')
div.addEventListener('dragstart', (e) => {
  e.preventDefault()
})
div.addEventListener('drop', (e) => {
  e.preventDefault()
})

Lpick = ''

legend.forEach(leg => {
  leg.addEventListener('mousedown', () => {

    legend.forEach(leg => {
      leg.classList.remove('highlight')
    })
    leg.classList.add('highlight');

    Lpick = leg.getAttribute('src');
  })

  leg.addEventListener('contextmenu', () => {
    leg.classList.toggle('banned');
  })

})

selections.forEach(select => {

  select.addEventListener('click', () => {
    select.innerHTML = `<img src="${Lpick}" class="imgcont" alt="Image">`
  })

  select.addEventListener('contextmenu', () => {
    select.innerHTML = '';
  })

})


info.addEventListener('click', () => {
  info.classList.toggle('opened')
})