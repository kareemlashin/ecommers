$(document).ready(function() {
    $(".chose-img").click(function() {
        let imgChose = $(this).attr("src");
        $(".devaultImg").attr("src", imgChose)
    })
});