function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["displayEvens"].elements.length; 
        loopCounter++) {
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function calcEvens() {

    clearErrors();
    var startNum = parseInt(document.forms["displayEvens"]["startNum"].value);
	var endNum = parseInt(document.forms["displayEvens"]["endNum"].value);
	var step = parseInt(document.forms["displayEvens"]["step"].value);

    if (startNum == "" || isNaN(startNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numberFun"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["startNum"].focus();
        return false;
    }
   if (endNum == "" || isNaN(endNum)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["numberFun"]["endNum"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["endNum"].focus();
       return false;
   }
   if (step == "" || isNaN(step)) {
       alert("Step must be filled in with a number.");
       document.forms["numberFun"]["step"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["step"].focus();
       return false;
   }


   document.getElementById("output").innerHTML = "Here are the even numbers between " + startNum + " and " + endNum + " by " + step + "'s:<br />";

   for (; startNum < endNum; startNum += step){
   		if (startNum%2 == 0) {
   			document.getElementById("output").innerHTML += "<br />"+startNum;
   		}
   	}

   return false;
}