document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".card");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let index = 0;

  const getCardWidth = () => {
    const style = window.getComputedStyle(cards[0]);
    const gap = parseInt(style.marginRight) || 24;
    return cards[0].offsetWidth + gap;
  };

  next.addEventListener("click", () => {
    if (index < cards.length - 1) {
      index++;
      track.style.transform =
        `translateX(-${index * getCardWidth()}px)`;
    }
  });

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      track.style.transform =
        `translateX(-${index * getCardWidth()}px)`;
    }
  });

});

/* BACK TO TOP js */
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("backToTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });
  
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
  });

  console.log("JS running");
//   Fixed Header 
window.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.4, 
        rootMargin: '0px'
    });
    
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});