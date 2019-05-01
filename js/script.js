$('#name').focus();
$('#other-title').hide();

$('#title').change(function() {
    if($(this).val() === "other")
    $('#other-title').show();
    else
        $('#other-title').hide();
    })

    
