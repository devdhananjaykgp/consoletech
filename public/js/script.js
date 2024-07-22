  var password = document.getElementById("password")
  function toggle(elem){
      var type = password.getAttribute("type");
      if(type === "password"){
          password.setAttribute("type","text")
          elem.innerText = "Hide Password";
      }else{
          password.setAttribute("type","password")
          elem.innerText = "Show Password";
      }

      
  }

  function validate(){
        if(flag==1){
            return true;
        }else{
            return false;
        }
    }

    window.addEventListener("keyup",event =>{
        var isCaps = event.getModifierState("CapsLock");
        if(isCaps){
            document.getElementById("caps").innerText = "WARNING! CapsLock is on"
        }else{
            document.getElementById("caps").innerText =" "
        }
    })



  var patten = /\s/g;
    var alert = document.getElementById("space");
    var flag = 1;
    function white(data){
        var isSpace = patten.test(data);
        if(isSpace){
            alert.innerText = "Space is not allow";
        }else{
            alert.innerText = " ";
        }
        
    }

    function passCheck(pass){
        var passClass = document.getElementsByClassName("password-check");
        const lowerCase = new RegExp('(?=.*[a-z])');
        const upperCase = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const spacialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
        const eightChar = new RegExp('(?=.{8,})');
  
        if(eightChar.test(pass)){
            passClass[0].style.color = "green";
        }else{
            passClass[0].style.color = "grey";
        }
  
        if(lowerCase.test(pass)){
            passClass[1].style.color = "green";
        }else{
            passClass[1].style.color = "grey";
        }
  
        if(upperCase.test(pass)){
            passClass[2].style.color = "green";
        }else{
            passClass[2].style.color = "grey";
        }
  
        if(number.test(pass)){
            passClass[3].style.color = "green";
        }else{
            passClass[3].style.color = "grey";
        }
  
        if(spacialChar.test(pass)){
            passClass[4].style.color = "green";
        }else{
            passClass[4].style.color = "grey";
        }
    }
  
    document.getElementById("res").style.color="red";
      function val(elem){
          if(isNaN(elem.value)){
              document.getElementById("res").innerText="Please enter only numbers";
          }else{
              document.getElementById("res").innerText=""
              if(elem.value.length >=11){
                  document.getElementById("res").innerText="Please enter only ten digits number";
              }
              else{
                  document.getElementById("res").innerText="";
              }
          }   
      }



  var password = document.getElementById("password");
  var flag = 1;
  function check(elem){
      if(elem.value.length > 0){
          if(elem.value != password.value){
              document.getElementById("alert").innerText = "Password does not match";
              flag = 0;
          }else{
              document.getElementById("alert").innerText = " ";
              flag = 1;
          }
      }else{
          document.getElementById("alert").innerText = "Please enter confirm password";
          flag = 0;
      }

  }






    $(document).ready(function(){
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 900, function(){
              window.location.hash = hash;
            });
          } 
        });
        
        $(window).scroll(function() {
          $(".slideanim").each(function(){
            var pos = $(this).offset().top;
      
            var winTop = $(window).scrollTop();
              if (pos < winTop + 600) {
                $(this).addClass("slide");
              }
          });
        });
      })

     
    