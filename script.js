function validate(){

     if (document.getElementById("yourname").value.length == 0) {
         alert("Please enter your full name.");
         return false;
     }//End if
    
	if (document.getElementById("age").value.length == 0) {
       alert("Please enter your age.");
       return false;
     }//End if
		
	if (isNaN(document.getElementById("age").value)) {
       alert("Please enter your age as a number.");
       return false;
     }//End if
	 
     if (document.getElementById("email").value.length == 0) {
       alert("Please enter your email address.");
       return false;
     }//End if


     if (document.getElementById("email").value.length !== 0) {
       var emailAddress = document.getElementById("email").value;
       var atTrue = false;
       for(var i = 0;i<emailAddress.length;i++){
         if (emailAddress.charAt(i) === "@"){
           atTrue = true;
           break;//break the loop - to stop using CPU cycles once the symbol is found
         } 
       }
         if (atTrue == false){
           alert("Please use the @ symbol in your email address");
         return false;
         }
       }
alert("Thanks for subscribing to our weekly newsletter");
}
