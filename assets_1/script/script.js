

document.addEventListener('DOMContentLoaded', function () {

//    let htmlTag = document.getElementsByTagName("html")[0];
//  htmlTag.dir = "rtl";

  // Chart JS Items - START
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  // Chart JS Items - END

  // Chart JS Arabic Items - START
  const labelsArabic = [
    'كانون الثاني',
    'شهر فبراير',
    'مارس',
    'أبريل',
    'قد',
    'يونيو',
  ];
  const dataArabic = {
    labels: labelsArabic,
    datasets: [{
      label: 'مجموعة بياناتي الأولى',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const configArabic = {
    type: 'line',
    data: dataArabic,
    options: {}
  };

  const myChartArabic = new Chart(
    document.getElementById('myChart-arabic'),
    configArabic
  );
  // Chart JS Arabic Items - END

  // SIdebar Toggle Button Exapnd - START
  var buttonId = document.getElementById('sidebar_button-d');
  buttonId.addEventListener('click', function () {
    var toggleClass = document.getElementById('sideBar_column-d');
    var contentClass = document.getElementById('right_content_column-d');
    if (toggleClass.classList.contains('col-1')) {
      toggleClass.classList.remove('col-1');
      toggleClass.classList.add('col-10');
      toggleClass.classList.add('position_absolute-s');
      toggleClass.classList.add('position-fixed');
      contentClass.classList.add('offset-1');
      document.body.style.overflow = "hidden";
      this.classList.remove('w-100');

    }
    else {
      toggleClass.classList.remove('col-10');
      toggleClass.classList.add('col-1');
      toggleClass.classList.remove('position_absolute-s');
      toggleClass.classList.remove('position-fixed');
      contentClass.classList.remove('offset-1');
      document.body.style.overflow = "auto";
      this.classList.add('w-100');


    }

  });
  // SIdebar Toggle Button Exapnd - END 



  $(document).ready(function () {


    if ($('.bbb_viewed_slider').length) {
      var viewedSlider = $('.bbb_viewed_slider');

      viewedSlider.owlCarousel(
        {
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 6000,
          nav: false,
          dots: false,
          responsive:
          {
            0: { items: 1 },
            575: { items: 2 },
            768: { items: 3 },
            991: { items: 4 },
            1199: { items: 6 }
          }
        });

      if ($('.bbb_viewed_prev').length) {
        var prev = $('.bbb_viewed_prev');
        prev.on('click', function () {
          viewedSlider.trigger('prev.owl.carousel');
        });
      }

      if ($('.bbb_viewed_next').length) {
        var next = $('.bbb_viewed_next');
        next.on('click', function () {
          viewedSlider.trigger('next.owl.carousel');
        });
      }
    }


  });

  // Rating Script - START 
  $(document).ready(function () {
    var ratings = 4.1;
    var starTotal = 5;
    var starPercentage = ratings / starTotal * 100;
    var star = starPercentage + '%';
    $(".stars-inner").width(star);
  });
  // Rating Script - END 

  // Scroll Left Right Table Section - START 

  let right_button = document.getElementById('scrollTableRight-d');

  right_button.onclick = function () {
    document.getElementById('table_responsive-d').scrollLeft += 100;
  };
  
  let left_button = document.getElementById('scrollTableLeft-d');

  left_button.onclick = function () {
    document.getElementById('table_responsive-d').scrollLeft -= 100;
  };
  // Scroll Left Right Table Section - END 


  // Modal Section on choice click - START 



  // Modal Section on choice click - END 

});



// var choiceClass = document.getElementsByClassName('choice-d');
// Array.from(choiceClass).forEach(choice => {

//   choice.addEventListener('click', function(){
//     let topName = this.innerHTML;
//     document.getElementById('modalTopName-d').innerHTML = topName;

//     let modalImg1 = document.getElementById('modalFirstImage').getAttribute('src');
//     console.log(modalImg1);
    
//   });
// });

function selectedChoice(heading, firstImage, secondImage, firstImageContent, secondImageContent){
  baseImagePath = "../assets_1/images/";

  document.getElementById('modalTopName-d').innerHTML = heading;
  let b = document.getElementById('modalFirstImage').getAttribute('src');
  document.getElementById('modalFirstImage').src = baseImagePath+firstImage;
  document.getElementById('modalSecondImage').src = baseImagePath+secondImage;
  document.getElementById('firstContent').innerHTML = firstImageContent;
  document.getElementById('secondContent').innerHTML = secondImageContent;

// debugger;
}
