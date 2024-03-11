var dearname = document.getElementById('myname')
dearname.addEventListener('input',()=>{
    document.querySelector('.dearname').textContent = dearname.value
})
function emailSend(){
var letter_body = document.querySelector('.letter-body')
var i1 = document.querySelector('.i1').value
var i2 = document.querySelector('.i2').value
var i3= document.querySelector('.i3').value
var i4 = document.querySelector('.i4').value
var i5 = document.querySelector('.i5').value
var i6 = document.querySelector('.i6').value

var msg = `${i1} ${i2} ${i3} ${i4} ${i5} ${i6}`
    var params = {
        name : document.getElementById('myname').value,
        email : document.getElementById('email').value,
        msg : msg,
    }
 const serviceID = 'service_gecp3xo'
 const templateID = 'template_qp7cwfu'
 emailjs
 .send(serviceID , templateID , params)
 .then((res)=>{
document.getElementById('myname').value = ''
document.getElementById('email').value = ''
i1.value = ''
i2.value = ''
i3.value = ''
i4.value = ''
i5.value = ''
i6.value = ''
console.log(res)
alert('your msg sent successfully')
 })
 .catch((err)=> console.log(err))
var letter_body = document.querySelector('.letter-body')

 var html = document.querySelector('html')
 letter_body.style.transition = '1s'
 letter_body.style.backgroundColor = 'white'
 html.innerHTML = ''
 html.style.transition = '1s'
 html.innerHTML =  `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Truck Develop</title>
  <link rel="stylesheet" href="./style.css">
 </head>
 <body>
     <img src="./email.jpg" class="imgOfSent" alt=""> 
     <div class="truck">
     <div class="container">
     <div class="truck-container">
 <div class="msg-container">
 </div>
 <div class="body-down-bar"></div>
 <div class="engine-part"></div>
 <div class="driver-part">
     <div class="window"></div>
     
     <div class="lightbar"></div>
     <div class="light"></div>
     <div class="gas-pumper"></div>
     <div class="gas-pumper-part"></div>
    
     <div class="gas">
         <img class="img1" style="margin-top: 15%; margin-left: 50%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top: 0%; width: 60%; margin-left: 0%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top: 35%; margin-left: 2%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top: 20%; width: 60%; margin-left: 40%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top:  35%;width: 50%; margin-left: 90%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top: 25%; margin-left: 75%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top: 5%; margin-left: 95%;" src="https://i.gifer.com/5zoP.gif">
         <img class="img1" style="margin-top: -8%; width: 55%; margin-left: 60%;" src="https://i.gifer.com/5zoP.gif">
     </div>
     <div class="tire01">
         <div class="bar01"></div>
         <div class="bar02"></div>
         <div class="bar03"></div>
         <div class="bar04"></div>
     </div>
    
     <div class="tire03">
         <div class="bar01"></div>
         <div class="bar02"></div>
         <div class="bar03"></div>
         <div class="bar04"></div>
     </div>
     <div class="tire04">
         <div class="bar01"></div>
         <div class="bar02"></div>
         <div class="bar03"></div>
         <div class="bar04"></div>
     </div>
 
 </div>
     </div>
 </div>
 </div>
 </body>
 </html>`
 var image = document.querySelector('.imgOfSent')
  
 
 
 setTimeout(()=>{
    image.style.transition = '1s'
    image.style.width = '134px'
    image.style.height = '90px'
     
    image.style.marginTop = '-1%'
    
 
 },500)
 setTimeout(()=>{
    image.style.marginTop = '18%'
    image.style.visibility = 'hidden'
 },4100)  
 setTimeout(()=>{
 
    html.innerHTML=''
    html.innerHTML=`<!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
        <title>Send Mail</title>
      <link rel="stylesheet" href="./style.css">
        <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
    </script>
    <script type="text/javascript">
    (function(){
      emailjs.init({
        publicKey: "KHpd6FUcxYvuG3PNT",
      });
    })();
    </script>
    </head>
    
    <body>
         
         <!--<input type="text" id="name">
         <input type="text" id="email">
         <input type="text" id="msg">
         <button onclick="emailSend()">Send</button>-->
    
    <div class="letter-body">
    <p class="letter-title">
      Write Letter
    </p>
    <hr>
     <input type="text" id="email"  placeholder="Your E-mail"  class="form-control" style="margin-bottom: 1%;">
     <input type="text" id="myname"  placeholder="His/Her Name"  class="form-control" style="margin-bottom: 1%;">
     
      <p class="dear-name">Dear <span class="dearname"></span></p>
    
    <input type="text" class="letter-details i1" maxlength="72">
    <input type="text" class="letter-details i2"  maxlength="72">
    <input type="text" class="letter-details i3"  maxlength="72">
    <input type="text" class="letter-details i4"  maxlength="72">
    <input type="text" class="letter-details i5"  maxlength="72">
    <input type="text" class="letter-details i6"  maxlength="72">
    <button onclick="emailSend()" class="btn btn-primary sendbtn">Send</button>
    
    <!--div class="animation-image">
      <img src="./emailimg.png" class="imgOfSent" alt="">
    </!--div-->
    </div>
    
    <script src="./script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
    </html>
    
    `
 },8000)
}

