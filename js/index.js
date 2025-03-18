function autoScroll() {
    const wrapper = document.querySelector('.wrapper');
    const containers = document.querySelectorAll('.individualContainer');
    const totalWidth = wrapper.scrollWidth;
    const moveDistance = 1.5;
    let currentScroll = 0;
    let continueScrolling = true; // Flag to control scrolling
  
    // Scroll function
    function scroll() {
      if (continueScrolling) {
        currentScroll += moveDistance;
        wrapper.scrollLeft = currentScroll;
        if (currentScroll >= totalWidth) {
          currentScroll = 0;
        }
        requestAnimationFrame(scroll);
      }
    }
  
    // Function to pause autoScroll
    function pauseScroll() {
      continueScrolling = false;
    }
 // Function to resume autoScroll
 function resumeScroll() {
    continueScrolling = true;
    scroll();
  }

  // Event listener to toggle scrolling on click
  containers.forEach(individualContainer => {
    individualContainer.addEventListener('click', () => {
      continueScrolling = !continueScrolling; // Toggle scrolling
      if (continueScrolling) {
        scroll(); // If scrolling should continue, start the scroll function
      }
    });
  });

  // Listen for anchor clicks to pause autoScroll temporarily
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // Pause autoScroll
      pauseScroll();

      // Smooth scroll to the anchor's target
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      // Resume autoScroll after a short delay to allow smooth scrolling to complete
      setTimeout(() => {
        resumeScroll();
      }, 1000); // Adjust delay as needed
    });
  });

  // Start scrolling initially
  scroll();
}

window.onload = function() {
  autoScroll();
}; 














$(function(){
  $(window).on('scroll',function() {
      var windscroll = $(window).scrollTop();
      if(windscroll>200){
          $('.gototop').fadeIn()
      }
      else{
          $('.gototop').fadeOut()
      }
  })
  $('#disbursals-modal.hom').addClass('opened')
  // $('#exampleModalCenter').modal('show')
  // $('#exampleModalCenter .close').on('click',function(){
  //     $('#exampleModalCenter').modal('hide')
  // })
  setTimeout(() => {
      $('#disbursals-modal').removeClass('opened hom')
  }, 10000);

  $('.banner-slider').slick({
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: false,
      autoplay:false,
      lazyLoad:'ondemand',
      prevArrow: $('.banner-prev'),
      nextArrow: $('.banner-next')
  });
  $('.cf-nav').slick({
      variableWidth:true,
      infinite:false,
      arrows:false,
      dots:false,
      asNavFor: '.cf-slider',
      focusOnSelect: true
  });
  $('.cf-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // fade:true,
      infinite:false,
      arrows:false,
      dots:false,
      asNavFor: '.cf-nav',
      adaptiveHeight: true,
      focusOnSelect: true
  });
  $('.why-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // vertical:true,
      // verticalSwiping:true,
      infinite:true,
      arrows:false,
      dots:true,
      focusOnSelect: true
      // responsive: [
      //     {
      //         breakpoint: 767,
      //         settings: {
      //             slidesToShow: 1,
      //             vertical:false,
      //             verticalSwiping:false,
      //             dots:true
      //         }
      //     }
      // ]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.why-container .wsingle:nth-child('+(nextSlide+1)+')').addClass('active').prevUntil().addClass('active')
      $('.why-container .wsingle:nth-child('+(nextSlide+1)+')').nextUntil().removeClass('active')
  });

  $('.testi-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:false,
      arrows:true,
      dots:false,
      prevArrow: $('.testi-prev'),
      nextArrow: $('.testi-next'),
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
      let curr = $('.testi-slider .testi-single.slick-current').index() + 1
      let len = $('.testi-slider .testi-single').length
      let src1,src2,src3;
      if(curr==len){
          src1 = $('.testi-slider .testi-single:last-child').find('img').attr('src')
          src2 = $('.testi-slider .testi-single:nth-child(1)').find('img').attr('src')
          src3 = $('.testi-slider .testi-single:nth-child(2)').find('img').attr('src')
      }
      else if(curr+1==len){
          src1 = $('.testi-slider .testi-single:nth-last-child(2)').find('img').attr('src')
          src2 = $('.testi-slider .testi-single:last-child').find('img').attr('src')
          src3 = $('.testi-slider .testi-single:nth-child(1)').find('img').attr('src')
      }
      else{
          src1 = $('.testi-slider .testi-single.slick-current').find('img').attr('src')
          src2 = $('.testi-slider .testi-single.slick-current').next().find('img').attr('src')
          src3 = $('.testi-slider .testi-single.slick-current + .testi-single').next().find('img').attr('src')
      }
      $('.triangle-images .tsingle:nth-child(1) img').attr('src',src1)
      $('.triangle-images .tsingle:nth-child(2) img').attr('src',src2)
      $('.triangle-images .tsingle:nth-child(3) img').attr('src',src3)
  });
  $('.media-slider').slick({
      slidesToShow: 4,
      infinite:true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: false,
      autoplay:false,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });
  $('.company-slider').slick({
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: false,
      autoplay:false,
      adaptiveHeight:true,
      // fade:true,
      prevArrow: $('.company-prev'),
      nextArrow: $('.company-next')
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.company-list .company-icon:nth-child('+(nextSlide+1)+')').addClass('active').siblings().removeClass('active')
  });



  $('.presence-list li').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active')
      $('#'+$(this).data('target')).show().siblings().hide()
  })
  $('.media-tabs a').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active')
      $('#'+$(this).data('target')).fadeIn().find('.media-slider').slick('refresh')
      $('#'+$(this).data('target')).siblings('.media-content').hide()
  })
  $('.job-single .job-head').on('click',function(){
      if(!$(this).hasClass('external'))
      $(this).parents('.job-single').toggleClass('exp').find('.job-body').slideToggle()
  })
  $(document).on('click','.branch-single .branch-head',function(){
      $(this).toggleClass('active').siblings('.branch-body').slideToggle().parents('.branch-single').siblings('.branch-single').find('.branch-head').removeClass('active').siblings('.branch-body').slideUp()
  })
  $('.company-list .company-icon').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active')
      $('.company-slider').slick('slickGoTo',$(this).index())
  })
  $('.feed-tabs .feed-tab').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active')
      $('#'+$(this).data('target')).show().siblings('.feed-content').hide()
  })
  $('.why-container .wsingle').on('click',function(){
      let i = $(this).index()
      $(this).addClass('active').prevUntil().addClass('active')
      $(this).nextUntil().removeClass('active')
      $('.why-slider').slick('slickGoTo',i)
  })
  $('.disbursals-modal-trigger').on('click',function(){$('#disbursals-modal').addClass('opened')})
  $('.custom-modal .clos').on('click',function(){$(this).parents('.custom-modal').removeClass('opened hom')})
  $('.gototop').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 'linear');
      return false;
  });
  $('a[href*=\\#]').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop : $(this.hash).offset().top
      }, 500);
  });

  if($(window).width()<991){
      $('.header-navbar .navbar-nav .nav-item.hassub .toggl').on('click',function(){
          $(this).toggleClass('exp').siblings('.submenu').slideToggle()
      })
  }



})












var countrySateCityinfo = {
    Australia: {
        "Western Australia": {
            Broome: ["6725", "6318", "6701"],
            Coolgardie: ["6429", "6432"]
        },
        Tasmania: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"]
        }
    },
    Germany: {
        Bavaria: {
            Munich: ["80331", "80333", "80335"],
            Numemberg: ["90402", "90403", "90404"]
        },
        Hessen: {
            Frankfurt: ["60306", "60309", "60310"],
            Surat: ["55246", "55247", "55248", "55249"]
        }
    },

    Canada: {
        Alberta: {
            Calgary: ["8033", "8333", "8035"],
            Edmonton: ["9040", "9403", "9040"]
        },
        Manitoba: {
            Brandon: ["6030", "6030"],
            Winnipeg: ["5524", "5547", "5248"]
        }
    }
    
}

window.onload = function(){
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city'),
        selectZip = document.getElementById('zip'),
        selects = document.querySelectorAll('select')

        selectState.disabled = true
        selectCity.disabled = true
        selectZip.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let country in countrySateCityinfo){
            // console.log(country);
            selectCountry.options[selectCountry.options.length] = new Option(country, country)
        }


        // country change
        selectCountry.onchange = (e) =>{
            
            selectState.disabled = false
            selectCity.disabled = true
            selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectState.length = 1
            selectCity.length = 1
            selectZip.length = 1

            for(let state in countrySateCityinfo[e.target.value]){
                // console.log(state);
                selectState.options[selectState.options.length] = new Option(state, state)
            }
        }

        // state change
        selectState.onchange = (e) =>{
            selectCity.disabled = false
            selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectCity.length = 1
            selectZip.length = 1

            for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
                // console.log(city);
                selectCity.options[selectCity.options.length] = new Option(city, city)
            }
        }

        // change city
        selectCity.onchange = (e) =>{
            selectZip.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            
            selectZip.length = 1

            let zips = countrySateCityinfo[selectCountry.value][selectState.value][e.target.value]
            
            for(let i=0; i<zips.length; i++){
                selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
            }
        }
}






