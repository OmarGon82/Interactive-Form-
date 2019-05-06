$('#name').focus();
$('#other-title').hide();

$('#title').change(function() {
    if($(this).val() === "other") {
        $('#other-title').show();
    }
    else {
        $('#other-title').hide();
    }
    });


$('#colors-js-puns').hide();
const $selectTheme = $('#design option').eq(0);
$('#design').change(function () {
    $('#colors-js-puns').show();
    $selectTheme.toggle();
    if ( $(this).val() === "js puns") {
        $('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').hide();
        $('#color option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').show();
        $('#color option[value="cornflower blue').attr('selected', true);
        $('#color option[value="tomato"]').attr('selected', false);
        $('#color option[value="no color"]').attr('selected', false);
    } else {
        $('#color').children().hide()
        $selectTheme.hide();
    }
    if ($(this).val() === "heart js") {
        $('#color option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').hide();
        $('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').show();
        $('#color option[value="tomato"]').attr('selected',true);
        $('#color option[value="cornflower blue"]').attr('selected',false);
        $('#color option[value="no color"]').attr('selected', false);
    } else {
        $selectTheme.hide();
    }
    
})
$('.activities').append('<div id="total"></div>');
$('#total').hide();

const $checkboxes = $(".activities input");

let total = 0;
// const textOfClicked = clicked.parentElement.textContent;
// const dollarAmount = textOfClicked.match(/\d{3}/);
// const cost = parseInt(dollarAmount)
// const timeDate = textOfClicked.match(/\w+\s\d\w{2}-\d\d?\w{2}/);

$(".activities").change((e)=>{
    const clicked = e.target;
    const textOfClicked = clicked.parentElement.textContent;
    const dollarAmount = textOfClicked.match(/\d{3}/);
    const cost = parseInt(dollarAmount)
    const timeDate = textOfClicked.match(/\w+\s\d\w{2}-\d\d?\w{2}/);
    
    
    if( $(clicked).prop("checked") === true) {
        total += cost;
        
    } 
    if ( $(clicked).prop("checked") === false) {
        total -= cost;
    }
    $('#total').html(`total:$${total}`).show();


    for (let i = 0; i < $checkboxes.length; i++) {
        if ($checkboxes[i] == timeDate) {
            $checkboxes[i].attr('disabled',true);
        } 
        if ($checkboxes[i] == timeDate) {
            $checkboxes[i].attr('enabled',true);
        }
      }
})


