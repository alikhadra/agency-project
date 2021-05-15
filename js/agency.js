// تحرك الصفحة بين عناصر القائمة ضمن فترة زمنية محددة
$(document).ready(function () {
    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });

    });

    $('.timer').countTo();
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
});

$(function () {
    
    $('#commentForm').validate();
});

// (( كود جافا سكريبت لاظهار placehorder ضمن ال textarea ))

// $(document).on('blur focus', '[placeholder]', function (e) {
//     var val = $.trim($(this).val() || $(this).text()),  //  remove use of .trim here if you WANT to ALLOW text are to be a blank space like " "
//         placeHolder = $(this).prop('placeholder');

//     switch (e.type) {
//         case 'focusin':
//             if (val == placeHolder) $(this).val('').text('');
//             break;
//         case 'focusout':
//             if (val == '') $(this).val(placeHolder).text(placeHolder);
//             break;
//     }
// });

// //    the following will make sure all fields having placeholder will start with placeholder in place
// $('[placeholder]').each(function (i) { $(this).text($(this).prop('placeholder')); });
