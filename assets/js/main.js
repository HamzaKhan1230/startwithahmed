
// Navigation

jQuery(function($) {
    var path = window.location.href; 
    $('.navigation').each(function() {
      if (this.href === path) {
        $(this).addClass('active');
      }
    });
  });
  
  // Back to top button
  
  var btn = $('#b_to_t_btn');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  // Typing Effects
  
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  
  const textArray = ["Shopify Maestro", "Digital Marketer"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 1100; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
      if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

  