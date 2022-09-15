$(document).ready(function(){
$('#form').submit(function(e){
	e.preventDefault();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var password = $('#password').val();
	var email = $('#email').val();
	var phno = $('#phno').val();
	var male = $('#male').val();
	var female = $('#female').val();
	var other = $('#other').val();
	var language1 =$('#language1').val();
	var language2 =$('#language2').val();
	var language3 =$('#language3').val();
	var language4 =$('#language4').val();


	$(".error").remove();
		
		if(firstname.length<1){
			$('#firstname').after('<div class="error">name is required</div>');
		}
		
		if(lastname.length<1){
			$('#lastname').after('<div class="error">name is required</div>');
		}

		if(password.length<5){
			$('#password').after('<div class="error">password should have 8 character</div>');
		}
		if (email.length < 1) {
     			$('#email').after('<div class="error">enter the email</div>');
    		} else {
     		 	var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      			var validEmail = regEx.test(email);
      		if (!validEmail) {
       			$('#email').after('<div class="error">Enter a valid email</div>');
      		}
    		}
		
		if(isNaN(phno) || phno.length <10 || phno.length>10){
			$('#phno').after('<div class="error">enter the phone number</div>');
		}
		
		if($('input[name="sex"]:checked').length == 0){
		
			 $('.sx').after('<div class="error">select any</div>');
		}else{
		     
		     }
		if($('input[name="language"]:checked').length == 0){
			 $('.checkBox').after('<div class="error">select any</div>');
		}else{
		     
		     }	
  });
});

