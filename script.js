//3. FOR MOBILE ONLY : SLIDERMENU SHOW HIDE WITH NAV BUTTON 
let barBtn = document.querySelector("nav .ri-menu-3-line")
let leftbar = document.querySelector(".leftbar")
let clickTime = 0
barBtn.addEventListener("click",function(){
  if(clickTime == 0){
    leftbar.style.right = "0";
    barBtn.classList.replace("ri-menu-3-line", "ri-close-line");
    clickTime = 1;
    }else{
    leftbar.style.right = "-100%";
    barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
    clickTime = 0;
    }
  });
  
let followCount = document.querySelector("#fll1")
let followButton = document.querySelector(".flw")
let clickTime1 = 0
followButton.addEventListener("click", function(){
	   if(clickTime1 == 0){
	   	followCount.innerHTML = "203" 
	    followButton.innerHTML = "Following"
	    followButton.style.backgroundColor = "#F3F5F7"
	    followButton.style.color = "black"
	    clickTime1 = 1
	   }else{
	   	followCount.innerHTML = "202"
	    followButton.innerHTML = "Follow"
	    followButton.style.backgroundColor = "#458eff"
	    followButton.style.color = "white"
	    clickTime1 = 0
	   }
})


//4. SLIDERMENU FUNCTIONAL CODE
let portfolioBtn = document.getElementById("port")
let projectBtn = document.getElementById("proj")
let lessonBtn = document.getElementById("less")

let portfolioScreen = document.querySelector(".portfolio")
let projectScreen = document.querySelector(".project")
let lessonScreen = document.querySelector(".lesson")

 portfolioBtn.addEventListener("click",function(){
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  portfolioScreen.style.display = "block"
  projectScreen.style.display = "none"
  lessonScreen.style.display = "none"
 })

 projectBtn.addEventListener("click",function(){
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  portfolioScreen.style.display = "none"
  projectScreen.style.display = "block"
  lessonScreen.style.display = "none"
 })

 lessonBtn.addEventListener("click",function(){
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  portfolioScreen.style.display = "none"
  projectScreen.style.display = "none"
  lessonScreen.style.display = "block"
 })

//SLIDERMENU RIGHTBAR MSG TO ADMIN FUNCTION
let msgAdmin = document.querySelector("#msgToAdminBtn")
let msgPage = document.querySelector(".messagePage")
let right = document.querySelector(".rightbar")
 
msgAdmin.addEventListener("click",function(){ 
   let msgName = document.querySelector(".messagePage #name")
   let msgPhone = document.querySelector(".messagePage #email")
   let msgSubject = document.querySelector(".messagePage #sub")
   let msgTextArea = document.querySelector(".messagePage #msg")
 
  msgName.value = ""
  msgPhone.value = ""
  msgSubject.value = ""
  msgTextArea.value = ""
  right.style.right = "0"
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  document.querySelector(".ri-arrow-left-line").style.display = "block"
  loginPage.style.display = "none"
  msgPage.style.display = "block"
  msgPage.style.display = "flex"
  msgPage.style.flexDirection = "column"
})
document.querySelector(".ri-arrow-left-line").addEventListener("click",function(){
    right.style.right = "-100%"
    msgPage.style.display = "flex"
    msgPage.style.flexDirection = "column"
})



//Get data from user of Message Page 
 let MSGBTN = document.querySelector(".messagePage #msgBtn") 
 MSGBTN.addEventListener("click",function(){
  
   let msgName = document.querySelector(".messagePage #name").value
   let msgPhone = document.querySelector(".messagePage #email").value
   let msgSubject = document.querySelector(".messagePage #sub").value
   let msgTextArea = document.querySelector(".messagePage #msg").value
  
   if( msgName.length == 0 || msgPhone.length == 0 || msgSubject.length == 0 || msgTextArea.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
    navigator.vibrate(200)
   }else{
          //ownmail-send
    right.style.right = "-100%"
    Email.send({
    SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",

    To : 'azizansari8716@gmail.com',
    From : "azizansari8716@gmail.com",
    Subject : msgSubject,
    Body : "Name : " + msgName
          + "<br> Email : " + msgPhone
          + "<br> Message : " + msgTextArea,
}).then(
  message => swal("Massage Sent Successfully", "Your data sent to Mr. Aziz Ansari", "success")
      )
    }
 })

let loginPage = document.querySelector(".loginPage")


 setTimeout(function firstSlide(){
   document.querySelector(".slider").style.left = "0%"
     setTimeout(function (){
        document.querySelector(".slider").style.left = "-100vw"
           setTimeout(function (){
              document.querySelector(".slider").style.left = "-200vw"
                 setTimeout(function (){
                  document.querySelector(".slider").style.left = "-300vw"
                    setTimeout(function (){
                      document.querySelector(".slider").style.left = "-400vw"
                         setTimeout(function(){
                           // document.querySelector(".slider").style.transition = "none"
                           firstSlide();
                        },3000)
                     },3000)
               },3000)
           },3000)
      },3000)
  },1)




setTimeout( function loginFn(){ 
  document.querySelector("nav .ri-menu-3-line").style.display = "none"
  right.style.right = "0"
  right.style.width = "100%"
  document.querySelector(".ri-arrow-left-line").style.display = "none"
  loginPage.style.display = "block"
  loginPage.style.display = "flex"
  loginPage.style.flexDirection = "column"
},500)

//Get data from user Login Page
let LOGINBTN = document.querySelector("#loginBtn")
 LOGINBTN.addEventListener("click",function(){
  
   let msgName = document.querySelector(".loginPage #name").value
   let msgPhone = document.querySelector(".loginPage #phone").value

   if( msgName.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
    navigator.vibrate(200);
   }else{
    document.querySelector("nav .ri-menu-3-line").style.display = "block"
    right.style.right = "-100%"
    document.querySelector("#username").innerHTML = `<i class="ri-account-circle-line"></i>` + msgName;
    Email.send({
    SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
    To : 'azizansari8716@gmail.com',
    From : "azizansari8716@gmail.com",
    Subject : "Login Info/AZIZ.COM ",
    Body : "Name : " + msgName
          + "<br> Phone : " + msgPhone,
}).then(
  message => swal("Login Successfully", "Your data sent to Mr. Aziz Ansari", "success")
      )
    }
 })
 
//When Tap Logout button
let logoutBtn = document.querySelector("#logoutBtn")
 logoutBtn.addEventListener("click",function(){
    document.querySelector("#username").innerHTML = `<i class="ri-account-circle-line"></i>` + "Username";
    leftbar.style.right = "-100%";
    barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
 
  //Call setTimeout Function 
  let msgName = document.querySelector(".loginPage #name")
  let msgPhone = document.querySelector(".loginPage #phone")
  
   msgName.value = ""
   msgPhone.value = ""
  document.querySelector("nav .ri-menu-3-line").style.display = "none"
  right.style.right = "0"
  right.style.width = "100%"
  document.querySelector(".ri-arrow-left-line").style.display = "none"
  loginPage.style.display = "block"
  loginPage.style.display = "flex"
  loginPage.style.flexDirection = "column"
  
   document.querySelector(".messagePage").style.display = " none"
 })








