const accordionHeader = document.querySelectorAll('.accordion-header')
accordionHeader.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", (event) => {
    accordionHeader.classList.toggle('active')
    const accordionBody = accordionHeader.nextElementSibling
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
    } else {
      accordionBody.style.maxHeight = 0
    }

  })
})

document.querySelector('.menu-button').addEventListener('click', function() {
    this.classList.toggle('open');
    let menu = document.querySelector('.nav-show')
    menu.classList.toggle('show')
});
   