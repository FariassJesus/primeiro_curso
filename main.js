const nav = document.querySelector('#header nav')
/*document: se refere ao arquivo HTML(index);
querySelector: vai pesquisar pelo seletor de id header o nav*/
const toggle = document.querySelectorAll('nav .toggle')
/*querySelectorAll: vai buscar tudo que tiver nav e classe toggle*/

for (const element of toggle) {
  /*cria a const element e joga nela o que tiver na variavel toggle, ou seja, os 2 elementos (menu e close)*/
  element.addEventListener('click', function () {
    /*irá verificar quando houver um click do mouse no element*/
    nav.classList.toggle('show')
    /*irá entrar na lista de classes do nav e acrescentar ou retirar a classe show conforme haja o click do mouse*/
  })
}

/*Agora seguirá um caminho parecido monitorando os itens do menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página quando der scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight
//verificar o deslocamento da altura
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll menor do que a altura do header
    header.classList.remove('scroll')
  }
})

/*Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll no pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
