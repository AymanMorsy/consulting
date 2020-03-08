

// Swiper Slider init //

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//  nav menu toggle //

const hamborgerMenu = document.querySelector('.hamborger'),
  active = document.querySelector('.main-nav');

hamborgerMenu.addEventListener('click', () => {
  active.classList.toggle('show')
})

// Counter Observer //
const counters = document.querySelectorAll('.counter');
const whyChooseUs = document.querySelector('.why-us');
const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "-130px"
};
const observer = new IntersectionObserver(function (entries, observer) {
  if (!entries[0].isIntersecting) {
    counters.forEach(ele =>{
      let num = 0
      let counterID = setInterval(()=>{
        ele.innerText = num++
        if(num == ele.dataset.num){
          clearInterval(counterID)
        }
      },1)
      
    })
  }
}, options);

observer.observe(whyChooseUs)

