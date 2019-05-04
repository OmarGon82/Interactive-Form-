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

const $checboxes =$("label input");
let total = 0;
const $all = $('input[name="all"]').text().match(/\d+/);
console.log($all)
const $jsFrame = $('input[name="js-frameworks"]')



$checboxes.on('click', function() {
    if($('input[name="all"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        alert("mainConf clicked")
    }
    if($('input[name="js-frameworks"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        
    }
    if($('input[name="js-libs"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        
    }
    if($('input[name="express"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        
    }
    if($('input[name="node"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        
    }
    if($('input[name="build-tools"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        
    }
    if($('input[name="npm"]').prop("checked") === true) {
        $('#total').html(`total: $${}`).show();
        
    }
})