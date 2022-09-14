$(document).ready(function(){
$('#form').submit(function(e){
	e.preventDefault();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var password = $('#password').val();
	var email = $('#email').val();
	var gender = $('#gender');
	


	$(".error").remove();
		
		if(firstname.length<1){
		$('#firstname').after('<ul><span class="error">name is required</span></ul>');
		}
		
		if(lastname.length<1){
		$('#lastname').after('<ul><span class="error">name is required</span></ul>');
		}

		if(password.length<5){
		$('#password').after('<ul><span class="error">password should have 8 character</span></ul>');
		}
		if (email.length < 1) {
     		 $('#email').after('<ul><span class="error">enter the email</span></ul>');
    		} else {
     		 var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      		var validEmail = regEx.test(email);
      		if (!validEmail) {
       		 $('#email').after('<ul><span class="error">Enter a valid email</span></ul>');
      		}
    		}
		


  });
});

