function phonenumber(phonenumber)
{
  var phoneno = /^\d{11}$/;
  if(phonenumber.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Your Phone Number must be 11 digits");
     return false;
  }
  }


    function ValidateEmail(inputText)
    {
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(inputText.value.match(mailformat))
    {
 
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
    document.form1.text1.focus();
    return false;
    }
	
	
    }
	function ValidateEmail2(inputText)
    {
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(inputText.value.match(mailformat))
    {
 
    document.form3.email2.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
    document.form3.email2.focus();
    return false;
    }
    }

    function myFunction(){
		if(document.form1.fname.value==="" || document.form1.lname.value==="" || document.form1.text2.value==="" || document.form1.text1.value==="" || document.form1.password.value==="" || document.form1.fname.value==="" || document.form1.adrs.value==="" || document.form1.gender.value==="")
        {
			alert("you must enter all fields");
		}
		else{
			
	    ValidateEmail(document.form1.text2); 
        onclick=phonenumber(document.form1.text1);

	
		}
    }
	
	function test(){
		
		if(document.form1.text1.value === "" || document.form1.password.value === ""){
			alert("you must fill all fields");
		}
		else{
			if(ValidateEmail(document.form1.text1)==true){
				alert("thank you");
			};
			
		}
		
	}
	function test2(){
		if (document.form3.email2.value===""){
			alert("you must enter an email");
		}
		else{if(ValidateEmail2(document.form3.email2)==true){
				alert("thank you");
				}
	}
	}