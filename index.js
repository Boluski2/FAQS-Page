const accordionBtns = document.querySelectorAll('.accordion-btn')


accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active')
  
       const accordionDiscription = this.nextElementSibling
       const pluseIcon = this.querySelector('.pluse-icon')
       const minuIcon = this.querySelector('.minus-icon')

       if (accordionDiscription.style.maxHeight){
        accordionDiscription.style.maxHeight = null
        pluseIcon.style.display = 'block'
        minuIcon.style.display = 'none'
       } else {
        accordionDiscription.style.maxHeight = accordionDiscription.scrollHeight + 'px'
        pluseIcon.style.display = 'none'
        minuIcon.style.display = 'block'
           
       }
    })
})

