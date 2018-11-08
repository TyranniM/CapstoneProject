// let operator;
// let tip = (billAmount) * (tipPercent);

// // $("#percentOne").click(function () {
// //     // if (operator === "/") {
// //     //     console.log("hi")

$("#calculate").click(function(){

    let total = ($("#billAmount").val() * $("input[name='tipPercent']:checked").val()) / $("#amountPeople").val();// I put it all on one line but if you dont understand just ask me

    	total= Math.round(total * 100) / 100;// gives you the rounded number total with all decimal places

    		total= total.toFixed(2);// takes away all but 2 decimals

    			$("#totalTip").html(total)

});



// })

// $("#calculate").click(function () {
//console.log('hi')
//console.log($('#billAmount').val())
//console.log($('#tipPercent').val())
//console.log($('#amountPeople').val())
  //  let tipTotal = $('#billAmount').val() * $('percentOne').val() / 100 /$('#amountPeople').val()

   //     $("#totalTip").val(tipTotal);
    //});

    // $('#rate').val() / 100

     //cache it here so that you dont want to create the object again and again.

//     $('#percentTip > a').on('mouseover', function () {
//         let tip = ($billAmt.val() * ($(this).data('per') / 100)).toFixed(2);
//         $youPay.text(tip);
//     }).on('mouseleave', function () {
//         $youPay.text('$0.00');
//     });
// });
//     function percentage(num, per)
// {
//   if ()
// }
          
// console.log(percentage(tip/amountPeople));

// amount of bill times % / people = tip per person























