

// Swiper Slider init //
function sw(){
  var i = 0
  console.log(i+1);
  const next = document.querySelector('.next')
  next.style.background=`url('../assets/slider/slider-next-bg2.jpg') no-repeat center var(--lightblue)`
  next.addEventListener('mouseenter',()=>{
    next.style.background=`url('../assets/slider/slider-next-bg2.jpg') no-repeat center var(--lightblue)`
  })
  next.addEventListener('mouseout',()=>{
    next.style.background=`url('../assets/slider/slider-right-icon-arrow.png') no-repeat center var(--lightblue)`
  })
}



var previwPath =[
  '../assets/slider/min-prev0.jpg',
  '../assets/slider/min-prev1.jpg',
  '../assets/slider/min-prev2.jpg'
]

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  init:function(){

    console.log(2020);
  },
  on:{
    slideNextTransitionEnd:function(){
      const next = document.querySelector('.next')
      next.style.background=`url(${previwPath[this.realIndex+1]||'../assets/slider/slider-right-icon-arrow.png'}) no-repeat center var(--lightblue)`
      next.addEventListener('mouseenter',()=>{
        next.style.background=`url(${previwPath[this.realIndex+1]||'../assets/slider/slider-right-icon-arrow.png'}) no-repeat center var(--lightblue)`
      })
      next.addEventListener('mouseout',()=>{
        next.style.background=`url('../assets/slider/slider-right-icon-arrow.png') no-repeat center var(--lightblue)`
      })
    },
    slidePrevTransitionEnd:function(){
      const next = document.querySelector('.prev')
      next.style.background=`url(${previwPath[this.realIndex-1]||'../assets/slider/slider-left-icon-arrow.png'}) no-repeat center var(--lightblue)`
      next.addEventListener('mouseenter',()=>{
        next.style.background=`url(${previwPath[this.realIndex-1]||'../assets/slider/slider-left-icon-arrow.png'}) no-repeat center var(--lightblue)`
      })
      next.addEventListener('mouseout',()=>{
        next.style.background=`url('../assets/slider/slider-left-icon-arrow.png') no-repeat center var(--lightblue)`
      })
    }
  }
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

