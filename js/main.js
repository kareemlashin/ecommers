$(document).ready(function() {

  $("body").click(function() {
    let $target = $(event.target);
    if (!$target.is(".Notifications") && !$target.is("#alarm")) {
      $("body")
        .find(".Notifications")
        .css({ visibility: "hidden" });
      $(".Notifications").css({ top: topNav + 100 + "px" });
    }
  });

  let topNav = $(".top-all").height();
  $(".Notifications").css({ top: topNav + 100 + "px" });
  $("#alarm").click(function() {
    $(".drop").css({ visibility: "hidden" });
    $(".Notifications").css({ visibility: "visible" });
    $(".Notifications").animate({ top: topNav + 20 + "px" }, 500);
  });
  $(".message").css({ top: topNav + 100 + "px" });
  $("#email").click(function() {
    $(".drop").css({ visibility: "hidden" });
    $(".message").css({ visibility: "visible" });
    $(".message").animate({ top: topNav + 20 + "px" }, 500);
  });
  $("body").click(function() {
    let $target = $(event.target);
    if (!$target.is(".message") && !$target.is("#email")) {
      $("body")
        .find(".message")
        .css({ visibility: "hidden" });
      $(".message").css({ top: topNav + 100 + "px" });
    }
  });

  $(".user-option").css({ top: topNav + 100 + "px" });
  $(".user-bot").click(function() {
    $(".drop").css({ visibility: "hidden" });
    $(".user-option").css({ visibility: "visible" });
    $(".user-option").animate({ top: topNav + 20 + "px" }, 500);
  });
  $("body").click(function() {
    let $target = $(event.target);
    if (!$target.is(".user-option") && !$target.is(".user-bot")) {
      $("body")
        .find(".user-option")
        .css({ visibility: "hidden" });
      $(".user-option").css({ top: topNav + 100 + "px" });
    }
  });
  //
  $(".linkNav").click(function() {
    let attrLink = $(this).attr("data");
    $(".angle-up").hide();
    $(".angle-down").show();
    $(".secound-nav").hide();
    $("#secound-" + attrLink).show();
    $(".angle-up-" + attrLink).show();
    $(".angle-down-" + attrLink).hide();
  });

  $(document).mouseup(function(e) {
    var container = $(".linkNav");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".secound-nav").hide();
      lestSchoolOpen = "none";
      $(".angle-up").hide();
      $(".angle-down").show();
    }
  });
  $("#bars").click(function() {
    let nav = $(".side-nav").css("left");
    if (nav < 0 + "px") {
      $(".side-nav").animate({ left: 0 + "px" }, 700);
      nav = "0px";
    } else {
      $(".side-nav").animate({ left: -700 + "px" }, 700);
      nav = "700px";
    }
  });

  
  
});
