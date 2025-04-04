
// header 
document.addEventListener('DOMContentLoaded', function() {
  let lastScroll = 0;
  const headerNav = document.querySelector('.header-nav');
  const headerSpacer = document.querySelector('.header-spacer');
  const scrollThreshold = 100;
  const navHeight = 40;

  window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > scrollThreshold) {
          if (currentScroll > lastScroll) {
              // اسکرول به پایین
              headerNav.style.transform = 'translateY(-100%)';
              headerNav.style.opacity = '0';
              headerSpacer.style.height = '100px';
          } else {
              // اسکرول به بالا
              headerNav.style.transform = 'translateY(0)';
              headerNav.style.opacity = '1';
              headerSpacer.style.height = '140px';
          }
      } else {
          // در بالای صفحه
          headerNav.style.transform = 'translateY(0)';
          headerNav.style.opacity = '1';
          headerSpacer.style.height = '140px';
      }

      lastScroll = currentScroll;
  });
});



// Swiper 1 
const swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    rtl: true,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
    breakpoints: {
        320: {
            slidesPerView: 4,
        },
        480: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 12,
        },

    }
});
  
  // Swiper 2 
   var slider2 = new Swiper('.slider2', {
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        
      },
      pagination: {
        el: '.slider2-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider2-nav-next',
        prevEl: '.slider2-nav-prev',
      },
      
    });
  
    // swiper 3 
    const swiper3 = new Swiper('.my-special-swiper-3', {
      slidesPerView: 3,
      spaceBetween: 16,
      loop: false,
      rtl: true,
       slidesPerView: 'auto', 
      navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView:4 ,
        },
      },
    });

     // Countdown Timer
     function startCountdown(durationInSeconds) {
      let remainingTime = durationInSeconds;
      const countdownElement = document.getElementById('countdown');

      function updateCountdown() {
        const hours = String(remainingTime % 60).padStart(2, '0');
        const seconds = String(Math.floor(remainingTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, '0');

        const timeParts = countdownElement.querySelectorAll('div');
        timeParts[0].textContent = hours;
        timeParts[1].textContent = minutes;
        timeParts[2].textContent = seconds;

        if (remainingTime > 0) {
          remainingTime -= 1;
        } else {
          clearInterval(timerInterval);
        }
      }

      updateCountdown();
      const timerInterval = setInterval(updateCountdown, 1000);
    }

    // Start countdown for 2 hours
    startCountdown(2 * 60 * 60);
    
    

    

// onscroll event 
window.addEventListener('scroll', (e) => {
 let Y = e.target.scrollingElement.scrollTop
  if (Y > 100) {
    document.querySelector('.header').classList.add('sticky')
  } else {
    document.querySelector('.header').classList.remove('sticky')
  }
})

// swiper 4 
const slider4Container = document.querySelector('.slider4-container');
    const slider4Prev = document.getElementById('slider4Prev');
    const slider4Next = document.getElementById('slider4Next');

    slider4Prev.addEventListener('click', () => {
      slider4Container.scrollLeft -= 150; // Scroll left by the width of one slide
    });

    slider4Next.addEventListener('click', () => {
      slider4Container.scrollLeft += 150; // Scroll right by the width of one slide
    });


    // swiper 5 
const swiper = new Swiper('.swiper-container', {
  loop:false, 
  slidesPerView: 4.5,
  spaceBetween: 0.5, 

  // Navigation buttons
  navigation: {
      nextEl: '.next_5', 
      prevEl: '.prev_5',
  },
});

// swiper 6 
const swiper6 = new Swiper('.swiper-container-6', {
  loop:false,
  slidesPerView: 4.5,
  spaceBetween: 0.5,

  // Navigation buttons
  navigation: {
      nextEl: '.next_6', 
      
      prevEl: '.prev_6', 
  },
});

// footer paragraph 

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".more-span");
  const contentDiv = document.querySelector(".seo");

  toggleButton.addEventListener("click", () => {
    contentDiv.classList.toggle("overflow-hidden");
    contentDiv.classList.toggle("h-52");

    if (contentDiv.classList.contains("overflow-hidden")) {
      // حالت بسته: سایه گرادیان اضافه شود
      contentDiv.classList.add("after:content-['']");
      contentDiv.classList.add("after:bg-gradient-to-b");
      contentDiv.classList.add("after:from-transparent");
      contentDiv.classList.add("after:to-white");

      toggleButton.textContent = "مشاهده بیشتر";
    } else {
      // حالت باز: سایه گرادیان حذف شود
      contentDiv.classList.remove("after:content-['']");
      contentDiv.classList.remove("after:bg-gradient-to-b");
      contentDiv.classList.remove("after:from-transparent");
      contentDiv.classList.remove("after:to-white");

      toggleButton.textContent = "بستن";
    }
  });
});


// category dropdown
document.addEventListener("DOMContentLoaded", () => {
  const categoryDropdown = document.querySelector('.category-dropdown');
  const categoryToggle = document.querySelector('.category');
  let timeoutId;

  // تابع مدیریت ورود
  const handleEnter = () => {
    clearTimeout(timeoutId);
    categoryDropdown.classList.remove('hidden');
  };

  // تابع مدیریت خروج
  const handleLeave = (e) => {
    timeoutId = setTimeout(() => {
      if (!categoryDropdown.contains(e.relatedTarget)) {
        categoryDropdown.classList.add('hidden');
        document.querySelectorAll('[class*="-drop-down"]').forEach(d => {
          d.classList.add('hidden');
        });
      }
    }, 200);
  };

  // مدیریت رویدادهای اصلی
  categoryToggle.addEventListener('mouseenter', handleEnter);
  categoryToggle.addEventListener('mouseleave', handleLeave);
  categoryDropdown.addEventListener('mouseenter', handleEnter);
  categoryDropdown.addEventListener('mouseleave', handleLeave);

  // مدیریت زیرمنوها
  const subDropdowns = document.querySelectorAll('[class*="-drop-down"]');
  const categoryLinks = document.querySelectorAll('.category-dropdown .flex-col a');

  categoryLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      subDropdowns.forEach(d => d.classList.add('hidden'));
      subDropdowns[index].classList.remove('hidden');
    });
  });

  // مدیریت هاور برای تمام عناصر داخلی


});


// back to top

document.getElementById('backToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
