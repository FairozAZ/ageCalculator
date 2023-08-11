function ageCalculator() {  
    //collect input from HTML form and convert into date format  
    let userInput = document.getElementById("DOB").value;  
    let dob = new Date(userInput);
    
    // blank input message
    let message = document.getElementById("message");
      
    //check user provide input or not  
    if(userInput == null || userInput == ""){  
      message.innerHTML = "**Choose a date please!";    
      return false;   
    }   
      
    //execute if the user entered a date   
    else {  
    //extract the year, month, and date from user date input  
    let dobYear = dob.getYear();  
    let dobMonth = dob.getMonth();  
    let dobDate = dob.getDate();  
      
    //get the current date from the system  
    let now = new Date();  
    //extract the year, month, and date from current date  
    let currentYear = now.getYear();  
    let currentMonth = now.getMonth();  
    let currentDate = now.getDate();  
      
    //declare a variable to collect the age in year, month, and days  
    let age = {};  
    let ageString = "";  
    
    //get years  
    let yearAge = currentYear - dobYear;  
      
    //get months  
    if (currentMonth >= dobMonth) {
      //get months when current month is greater  
      var monthAge = currentMonth - dobMonth;
    }  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
  
    //get days  
    if (currentDate >= dobDate) {
      //get days when the current date is greater  
      var dateAge = currentDate - dobDate; 
    } 
    else {  
      monthAge--;  
      var dateAge = 31 + currentDate - dobDate;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }  

    //group the age in a single variable  
    age = {  
    years: yearAge,  
    months: monthAge,  
    days: dateAge  
    };  
    
    // storing all variable's value of age 
    ageString = "Your Current Age is " + age.years + " Years, " + age.months + " Months, and " + age.days + " Days.";
    
    // clear if user input date format
    message.innerHTML = "";

    //display the calculated age  
    return document.getElementById("result").innerHTML = ageString; 
               
  }  
}