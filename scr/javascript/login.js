function validatelogin(){

    let username ,password ,loginStatus=0; warnmessage=null;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log("username ",username);
    console.log("password ",password);
    let usernametype =/^\d+$/.test(username);

    if(usernametype==false){
        if(username.includes('@'&&'.')){
            console.log("Usename mail ID , OK");
            loginStatus++;
        }
        else{
            console.log("Please enter a valid mail id");
           warnmessage = document.createElement('div');
           warnmessage.textContent="Please enter a valid mail id/phone no";
           warnmessage.setAttribute('class','warnmessage');
           document.querySelector('#username').after(warnmessage);
        }
    }
    else if(usernametype==true){
            if(username.length>=10){
            console.log("Phone No as username OK");
            loginStatus++;}
            else{
                console.log("Please enter correct Phone no");
                warnmessage = document.createElement('div');
                warnmessage.textContent="Please enter correct phone no";
                warnmessage.setAttribute('class','warnmessage');
                document.querySelector('#username').after(warnmessage);
            }
        }

   if(password===""){
    console.log("Please enter your Password");
    warnmessage = document.createElement('div');
    warnmessage.textContent="Please enter your password";
    warnmessage.setAttribute('class','warnmessage');
    document.querySelector('#password').after(warnmessage);
   }
   else{
    console.log("Password is OK");
    loginStatus++;
   }

   if(loginStatus ==2){
       console.log("Successful : Login OK");
       alert('Login Successful');
       window.location.href ="../HTML/Services.html";
   }
   


}


function regvalidate(){

    let Uname ,Emailid,PhoneNo,Password ,RegStatus=0; warnmessage=null;
    Uname = document.getElementById("name").value;
    Emailid = document.getElementById("emailid").value;
    PhoneNo = document.getElementById("Phoneno").value;
    Password = document.getElementById("Password").value;
   
   
    if(Uname===""){
        console.log("Please enter your full name");
        warnmessage = document.createElement('div');
        warnmessage.textContent="Please enter your full name";
        warnmessage.setAttribute('class','warnmessage');
        document.querySelector('#name').after(warnmessage);
       }
       else{
        console.log("Uname is OK");
        RegStatus++;
       }

    
        if(Emailid.includes('@'&&'.')){
            console.log("Usename mail ID , OK");
            RegStatus++;
        }
        else{
            console.log("Please enter a valid mail id");
           warnmessage = document.createElement('div');
           warnmessage.textContent="Please enter a valid mailid";
           warnmessage.setAttribute('class','warnmessage');
           document.querySelector('#emailid').after(warnmessage);
        }
   
     if(/^\d+$/.test(PhoneNo)==true){
            if(PhoneNo.length>=10){
            console.log("Phone No as username OK");
            RegStatus++;}
            else{
                console.log("Please enter correct Phone no");
                warnmessage = document.createElement('div');
                warnmessage.textContent="Please enter correct phone no";
                warnmessage.setAttribute('class','warnmessage');
                document.querySelector('#Phoneno').after(warnmessage);
            }
        }
        else{
            console.log("Please enter correct Phone no");
            warnmessage = document.createElement('div');
            warnmessage.textContent="Please enter correct phone no";
            warnmessage.setAttribute('class','warnmessage');
            document.querySelector('#Phoneno').after(warnmessage);
        }

   if(Password===""){
    console.log("Please enter your Password");
    warnmessage = document.createElement('div');
    warnmessage.textContent="Please enter your password";
    warnmessage.setAttribute('class','warnmessage');
    document.querySelector('#Password').after(warnmessage);
   }
   else{
    console.log("Password is OK");
    RegStatus++;
   }

   if(RegStatus ==4){
       console.log("Successful : Registration OK");
       alert('Registration Successful');
       window.location.href ="../index.html";
   }
   


}



