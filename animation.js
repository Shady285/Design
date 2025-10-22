/* function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting){
        change.target.classList.add('container-show');
        } else { 
        change.target.classList.remove('container-show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry,options);
let elements = document.querySelectorAll('.container');

for (let elm of elements) {
    observer.observe(elm);
} */

barba.init({
  transitions: [{
    name: 'opacity-transition',
    sync: true,
    leave(data) {
      return gsap.timeline().to(data.current.container, {
        duration: 0,
        opacity: 0,
      })
      .fromTo('.box', {
        duration: 1,
        skewX: 30,
        x: '130%'
      }, {
        duration: 1,
        skewX: 0,
        x: '-130%'
      }, 0)
    },
    enter(data) {
      return gsap.from(data.next.container, {
        duration: 2,
        opacity: 0
      })
    }
  }],
    views: [{
    namespace: 'home',
/*    beforeEnter() {
      // update the menu based on user navigation
      menu.update();
    }, */
    afterEnter() {
      // refresh the parallax based on new page content
    /* parallax.refresh(); */
      indexButton();
    }
  }]
})

function indexButton() {
    document.getElementById('scrollDownBtn').addEventListener('click', function() {
        window.scrollTo({
            top: 650,
            behavior: 'smooth'
        })
    })
}