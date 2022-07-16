

	$(document).ready(function(){	

		$(".change_back").on('change', function(){  
			if($(this).val() != ""){
				$(this).addClass("color_change");
			}
			else{
				$(this).removeClass("color_change");
			}	
		});

		$('.navbar-toggler').click(function(){
			$('.collapse').slideToggle();
		});

		$('.Terms1').click(function(){
			$('.label1').addClass('term_color_change');
		});

		$('.Terms2').click(function(){
			$('.label2').addClass('term_color_change');
		});

		$('.Terms3').click(function(){
			$('.label3').addClass('term_color_change');
		});

/******************************** MODAL JS *******************************/

	$('.choose_butotn').click(function(){
		$('#myModal, .modal-backdrop').hide();
	});

	$('.register_your_time').click(function(){
		$('.register_modal, .modal-backdrop').hide();
	});

	$('.create_account').click(function(){
		$('#account_modal, .modal-backdrop').hide();
	});

	$('.btn-create-account').click(function(){
		$('#logoin_modal, .modal-backdrop').hide();
	});

	$('.forget-btn').click(function(){
		$('#logoin_modal, .modal-backdrop').hide();
	});

	$('.send_code').click(function(){
		$('#forget_modal, .modal-backdrop').hide();
	});

	$('.done_button').click(function(){
		$('#done_modal, .modal-backdrop').hide();
	});

	$('.btn_new_password').click(function(){
		$('#new_modal, .modal-backdrop').hide();
	});

	$('.btn_new_password').click(function(){
		$('#question_modal, .modal-backdrop').hide();
	});


  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {

	    $('nav.navbar.navbar-expand-lg').addClass('sticky_nav');
	  }

	  else{
		  $("nav.navbar.navbar-expand-lg").removeClass("sticky_nav");  	
	  }
  });

  $('#add_pupup').click(function(){
  	$('.plan_popup_slide').show();
  });


 $('#add_new_filed').click(function(){ 
      $(".plan_popup_slide .form-group input:text").val("");
   });

 $('#add_new_filed').click(function(){ 
      $(".plan_popup_slide .form-group textarea").val("");
   });




const data = {
  datasets: [{
    label: 'My First Dataset',
    data: [100, 50],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(246, 238, 255, 1)'
    ],
    
  }]
};

const config = {
  type: 'doughnut',
  data: data,
};
 const myChart = new Chart(
    document.getElementById('chart1'),
    config
  );

  const charts2 = new Chart(
    document.getElementById('chart2'),
    config
  );

  const charts3 = new Chart(
    document.getElementById('chart3'),
    config
  );

  const charts4 = new Chart(
    document.getElementById('chart4'),
    config
  );

  const charts5 = new Chart(
    document.getElementById('chart5'),
    config
  );



});




/////////////////////////////////////////// HTML EDITOR //////////////////////////////////////////////////



tinymce.init({
      selector: 'textarea',
      plugins: 'a11ychecker advcode casechange export formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
      toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter pageembed permanentpen table',
      toolbar_mode: 'floating',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      toolbar: 'bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
    });

	tinymce.activeEditor.execCommand('mceCodeEditor');
	