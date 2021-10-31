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
function changeHeaderWhenScroll() {
  //verificar o deslocamento da altura
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll menor do que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

//botão de ir ao topo

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
//Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
//buscar em todas as sections que tiverem um id
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  //dividirá a tela em 8 pontos  e iniciará a partir do 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
      //quando os checkpoints estiverem nessa seção, irá adiciona a classe active
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
//whenScroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
