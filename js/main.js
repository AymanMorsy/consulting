

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
  threshold: 0.1,
  rootMargin: "-130px"
};
let observerStatus = true;
const observer = new IntersectionObserver(function (entries, observer) {
  if (observerStatus && entries[0].isIntersecting) {
    observerStatus = false;
    counters.forEach(ele =>{
      let num = 0
      let counterID = setInterval(()=>{
        ele.innerText = num++
        if(num === Number(ele.dataset.num)){
          clearInterval(counterID)
        }
      },1)
      
    })
  }
}, options);

observer.observe(whyChooseUs)

