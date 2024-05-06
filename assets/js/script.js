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
async function getData(){
     const request = await fetch("https://ipinfo.io/json")
       const jsonResponse = await request.json()
       if(jsonResponse.country ==="IN"){
           if(jsonResponse.region !=="Delhi" && jsonResponse.region !=="Uttar Pradesh" && jsonResponse.region !=="Uttarakhand"){
               let ctaBtn = document.querySelectorAll('.cta-btn')
               ctaBtn.forEach(element => {
                   element.href="link"
               });
           }
       }
   }
   document.addEventListener('DOMContentLoaded',()=>{
       getData()
   })
