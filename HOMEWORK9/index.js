// 1. 
$(document).ready(function () {
    $('a').attr('target', '_blank');
});


// 2. 
$(document).ready(function () {
    $("h2.head").css("background", "green");
    $("h2 .inner").css("fontSize", "35px");
});

// 3.
$(document).ready(function () {
    $("h3 + div").each(function () {
        $(this).insertBefore($(this).prev());
    })
});

// 4. 
$("[type=checkbox]").change(function () {
    if ($("[type=checkbox]:checked").length == 3)
        $(':checkbox(:checked)').prop('disabled', true);
    else
        $(':checkbox:not(:checked)').prop('disabled', false);
});

// $("[type=checkbox]").change(function () {
//     if ($("[type=checkbox]:checked").length == 3)
//         $(':checkbox:not(:checked)').prop('disabled', true);
//     else
//         $(':checkbox:not(:checked)').prop('disabled', false);
// });
