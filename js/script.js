//Global variables
let total = 0;
const $checkboxes = $(".activities input")
const $paymentOptions = $("#payment option");
const $creditCard = $('#credit-card');
const $payPal = $('fieldset div:nth-child(5)').attr("id", "paypal");
const $bitCoin = $('fieldset div:nth-child(6)').attr("id", "bitcoin");


//Tooltips for input and credit card validation
const $nameToolTip = $('<p class="tooltip">Required field</p>');
$nameToolTip.insertBefore("#name");
$nameToolTip.hide()

const $emaillToolTip = $('<p class="tooltip">Required field</p>');
$emaillToolTip.insertBefore('#mail')
$emaillToolTip.hide()

const $activitiesToolTip = $('<p class="tooltipActivities">Required field</p>')
$activitiesToolTip.insertBefore(".activities");
$activitiesToolTip.hide()

const $creditCardToolTip =  $('<p class="TooltipCC">Required field</p>')
$creditCardToolTip.insertBefore("#cc-num")
$creditCardToolTip.hide()

const $zipToolTip =  $('<p class="TooltipCC">Required field</p>')
$zipToolTip.insertBefore("#zip")
$zipToolTip.hide()

const $cvvToolTip =  $('<p class="TooltipCC">Required field</p>')
$cvvToolTip.insertBefore("#cvv")
$cvvToolTip.hide()

//set default focus to name input field
$('#name').focus();
$('#name').css('borderColor', '')
$('#other-title').hide();

//if the other option is selected in the occupation menu the other input field will show
$('#title').change(function() {
    if($(this).val() === "other") {
        $('#other-title').show();
    }
    else {
        $('#other-title').hide();
    }
    });

//change event to select desired T-shirt theme and design
$('#colors-js-puns').hide();
const $selectTheme = $('#design option').eq(0);
$('#design').change(function () {
    $('#colors-js-puns').show();
    $selectTheme.toggle();
    if ($('#design').val() === "js puns") {
        $('#color option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').show();
        $('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').hide();
        $('#color option[value="cornflowerblue').attr('selected', true);
        $('#color option[value="tomato"]').attr('selected', false);
    } else {
        $('#color').children().hide()
        $selectTheme.hide();
    }
    if ($('#design').val() === "heart js") {
        $('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').show();
        $('#color option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').hide();
        $('#color option[value="tomato"]').attr('selected',true);
        $('#color option[value="cornflowerblue"]').attr('selected',false);
    } else {
        $selectTheme.hide();
    }
})
    

//div to show the total cost of the selected activties
$('.activities').append('<div id="total"></div>');
$('#total').hide();

//change event to select activities and disable conflicting activities 
$(".activities").change((e)=>{
    const clicked = e.target;
    const textOfClicked = clicked.parentElement.textContent;
    const dollarAmount = textOfClicked.match(/\d{3}/);
    const cost = parseInt(dollarAmount)
    const timeDate = textOfClicked.match(/\w+\s\d\w{2}-\d\d?\w{2}/);
    
    //If the property was checked add the cost, else cost times -1(its the same as subtracting from the cost)
    total += $(clicked).prop("checked") ? cost : cost * -1;
    $('#total').html(`total:$${total}`).show();

    for (let i = 0; i < $checkboxes.length; i++) {
    const textOfinput = $checkboxes[i].parentElement.textContent
    
    //If the activity is a conflicting activity and wasn't the one clicked
    if(textOfinput.includes(timeDate) && clicked !== $checkboxes[i]){
        //toggle the disabled property.If it was false then it will be true and vice versa.
        $checkboxes[i].disabled = !($checkboxes[i].disabled);
        if ( $checkboxes[i].disabled == true) {
       $($checkboxes[i].parentElement).css("textDecoration","line-through");
        } else {
            $($checkboxes[i].parentElement).css("textDecoration","none")
       }
     }
   }
});

// hide the first payment option
$("#payment").find("option").eq(0).remove();

//hide payment options so the Credit Card option is the default option
$payPal.hide();
$bitCoin.hide();

// change event to select payment options
$("#payment").change( function() {
    $creditCard.show();
    const $paymentMethod = $(this).val();
    if ( $paymentMethod === "paypal" ) {
        $payPal.show();
        $bitCoin.hide();
        $creditCard.hide();
    } 
    if ( $paymentMethod === "bitcoin") {
        $bitCoin.show();
        $payPal.hide();
        $creditCard.hide();
    }
    if ( $paymentMethod === "credit card") {
        $bitCoin.hide();
        $payPal.hide();
        $creditCard.show();
    }

})

// validation inputs
const $name = $('#name');
const $email = $('#mail');
const $creditCardNum = $('#cc-num');
const $zipNum = $('#zip');
const $cvv = $('#cvv');

//regex valdiation /\d+/;
const regexName =  /[\d+\!\"#\$%&\(\)\=\/*-+\|@`\']/
const regexEmail = /(\w+@\w+)(\.com|\.net|\.co)/;
const regexCreditCard = /^(?:\d[ -]*?){13,16}$/;
const regexZip = /^(\d{5})$/;
const regexCVV = /^\d{3}$/;

//checking input fields for validity and showing tool tips
function validName(name) {
    if (name.val() === "" || regexName.test(name.val())) {
         $nameToolTip.text("field is required").show()
        name.css('borderColor', 'red');
        return false;
    }
    
        name.css('borderColor', '#cldeeb');
         return true
}

function validEmail(email) {
    if (email.val() === "" || !(regexEmail.test(email.val())) ) {
        $emaillToolTip.show()
        email.css('borderColor', 'red');
          return false;
      }
      email.css('borderColor', '#cldeeb');
      return true;
}

function validActivity(activities) {
     
    if(activities === 0) {
        $activitiesToolTip.show()
        $('.activities').css('color', 'red');
        return false;
    }
    $('.activities').css('border', 'none');
    return true;
}
       
function validCreditCardNum(creditCardNum) {
    if(creditCardNum.val() === "" || !(regexCreditCard.test(creditCardNum.val())) ) {
        $creditCardToolTip.show()
        creditCardNum.css('borderColor', 'red');
        return false;
    }
    creditCardNum.css('borderColor', '#cldeeb');
    return true;
}

function validZipCode(zipNum) {
    if(zipNum.val() === "" || !(regexZip.test(zipNum.val())) ) {
        $zipToolTip.show()
        zipNum.css('borderColor', 'red' );
        return false;
    }
    zipNum.css('borderColor', '#cldeeb');
    return true;
}

function validCVV(cvv) {
    if(cvv.val() === "" || !(regexCVV.test(cvv.val())) ) {
        $cvvToolTip.show()
        cvv.css('borderColor', 'red' );
        return false;
    }
    cvv.css('borderColor', '#cldeeb');
    return true;
}

// function to check the validity of all input. If everything is valid it will return true
function validateForm() {
    let isValid = true;
    if(validName($name) == false) {
       isValid = false;
   }

   if(validEmail($email) == false) {
     isValid = false;
  }
  
   if (validActivity(total) == false) {
     isValid = false; 
   }
   
   if ($("#payment").val() === 'credit card') {
        if(validCreditCardNum($creditCardNum) == false) {
            isValid = false;
        }
        if(validZipCode($zipNum) == false ) {
            isValid = false;
        }
        if ( validCVV($cvv) == false) {
            isValid = false;
        }
    }
    return isValid;
 }
 
 // function that clears red border and toop tip if input is correct 
 function clearError() {
     if ($name.val() !== "" || !(regexName.test($name.val()))) {
         $nameToolTip.hide();
         $name.css('borderColor', '');
     }
     if ($email.val() !== "" || regexEmail.test($email.val()) ) {
         $emaillToolTip.hide();
         $email.css('borderColor', '');
     }
     if(total !== 0) {
         $('.activities').css('color', '');
         $activitiesToolTip.hide();
     }
     if($creditCardNum.val() !== "" || regexCreditCard.test($creditCardNum.val()) ) {
         $creditCardToolTip.hide()
         $creditCardNum.css('borderColor', '');
     }
     if($zipNum.val() !== "" || regexZip.test($zipNum.val()) ) {
         $zipToolTip.hide()
         $zipNum.css('borderColor', '' );
        
     }
     if($cvv.val() !== "" || regexCVV.test($cvv.val()) ) {
         $cvvToolTip.hide()
         $cvv.css('borderColor', '' );
     }
 }
 
 //keyup functions for tooltips
 $("#name").on('keyup', function(){
     if (  regexName.test($name.val()) ){
     $nameToolTip.text("Only letters and spaces").show()
    } else {
        $nameToolTip.hide();
    }
});
 $("#mail").on('keyup', function(){
     if ( !(regexEmail.test($email.val())) )  {
     $emaillToolTip.text("example123@email.com").css("font-size","60%").show()
    } else {
        $emaillToolTip.hide()
    }
 });
 $("#cc-num").on('keyup', function(){
     if ( !(regexCreditCard.test($creditCardNum.val())) ){
     $creditCardToolTip.text("Must be between 13-15 digits").css("color","green").show()
    } else {
        $creditCardToolTip.hide()
    }
 });
 $("#zip").on('keyup', function(){
     if ( !(regexZip.test($zipNum.val())) ) {
     $zipToolTip.text("Must be 5 digits").css("color","green").show()
    } else {
        $zipToolTip.hide()
    }
 });
 $("#cvv").on('keyup', function(){
     if (!(regexCVV.test($cvv.val()))  ) {
     $cvvToolTip.text("Must be 3 digits").css("color","green").show()
    } else {
        $cvvToolTip.hide();
    }
 });

 //submitting the form, clearing errors and checking for validity
 document.querySelector("form").addEventListener("submit", function(e) {
     clearError()
     if (validateForm() == false) {
         e.preventDefault()
     } 
 });



  



  