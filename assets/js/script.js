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

function teleLink(){
  let teleBtn = document.querySelectorAll('.tele-cta-btn')
  let invitationCode = document.querySelector('.invitationCode')
  invitationCode.innerHTML ="34655523948"
  teleBtn.forEach(element=>{
    element.href="https://t.me/sureshotprediction55club"
  })
}

async function getData(){
     const request = await fetch("https://ipinfo.io/json")
       const jsonResponse = await request.json()
       if(jsonResponse.country ==="IN"){
           if(jsonResponse.region !=="Delhi" ){
            // && jsonResponse.region !=="Uttar Pradesh" && jsonResponse.region !=="Uttarakhand"
               let ctaBtn = document.querySelectorAll('.cta-btn')
              //  teleLink()
               ctaBtn.forEach(element => {
                  //  element.href="https://bit.ly/3RuDXSR"
                  //  element.href="https://tirangalottery.top/#/register?invitationCode=621746000004"
                   element.href="https://55wingo.in/#/register?invitationCode=34655523948"
                  //  element.href="https://in999.club/#/register?invitationCode=46776342898"
                  //  element.href="https://damanclub.net/#/register?invitationCode=125817318927"
               });

              }else{
             let ctaBtn = document.querySelectorAll('.cta-btn')
             ctaBtn.forEach(element => {
                 element.href="https://damanclub.net/#/register?invitationCode=163647009341'"
             });

           }
       }
   }
   document.addEventListener('DOMContentLoaded',()=>{
       getData()
   })
