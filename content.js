$(function() {


    // $('#tabtest').accordion();

    $('#tabtest').tabs();

    // $('#head1').delay(1000).toggle('explode');

var $range=$('#ranges');


    $('#ranges').slider(
        {
            range:true,
            min:0,
            max:120,
            values:[15,60],
            slide: function(event, ui){  '$'+ui.value[0] + '-$' + ui.values[1]
                 }
        });

        // $('#amount').val("10");
$('#amount').val(
    '€'+ $range.slider('values',0)+'-€'+ $range.slider('values',1)

);


});