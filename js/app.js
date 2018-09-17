$(document).ready(function() {
  $(".hero_carousel").slick({
    prevArrow: $(".prev_container"),
    nextArrow: $(".next_container")
    //autoplay: true,
    //autoplaySpeed: 3000
  });

  $(".promo_slider").slick({
    variableWidth: true,
    infinite: true,
    centerMode: false,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
});

$(".pagedown_container").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".featured_products_container").offset().top
    },
    2000
  );
});

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.output = $('<div class="range-output" />')
      .insertAfter(".price_slider")
      .html("£" + this.$element.val());
  },
  onSlide: function(position, value) {
    this.output.html("£" + value);
  }
});

$(".product_category").on("click", function() {
  var $this = $(this);

  if ($this.hasClass("active")) {
    $this.removeClass("active");
  } else {
    $this.addClass("active");
  }
});

$(".category_reset_all").on("click", function() {
  disableCategories();
  clearSearch();
  clearCheckboxes();
  zeroPriceSlider();
});

function disableCategories() {
  $(".product_category").removeClass("active");
}

function clearSearch() {
  $(".product_filter_input input").val("");
}

function clearCheckboxes() {
  $(".product_filter_cut input:checkbox").prop("checked", false);
}

function zeroPriceSlider() {
  $('input[type="range"]')
    .val(50)
    .change();
}

$(".category_reset").on("click", function() {
  disableCategories();
});

$(".checkbox_reset").on("click", function() {
  clearCheckboxes();
});

$(".priceslide_reset").on("click", function() {
  zeroPriceSlider();
});

$(".minimizable .product_filter_title").on("click", function() {
  var $element = $(this).closest(".minimizable");

  if ($element.hasClass("open")) {
    $element.removeClass("open");

    $element.find(".filter_options").slideDown();
  } else {
    $element.addClass("open");

    $element.find(".filter_options").slideUp();
  }
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".header_container").outerHeight();

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event) {
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 10);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If current position > last position AND scrolled past navbar...
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $(".header_container")
      .removeClass("nav-down")
      .addClass("nav-up");
  } else {
    $(".header_container")
      .removeClass("nav-up")
      .addClass("nav-down");
  }

  lastScrollTop = st;
}

$(function() {
  var queryParam = getParameterByName("category");

  $(".category_label:contains(" + queryParam + ")")
    .closest(".product_category")
    .addClass("active");
});

var getParameterByName = function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

$(function() {
  if (location.pathname != "/") {
    $(
      '.menu_primarylinks a[href^="/' + location.pathname.split("/")[1] + '"]'
    ).addClass("active");
  }
});

$(function() {
  var $headerHeight = $(".header_container").outerHeight();

  $(".first_component").css("margin-top", $headerHeight);
});

$('.menu_search input[type="text"]').bind("enterKey", function(e) {
  
  var inputText = $(this).val();

  if (inputText && inputText.length > 0 && inputText != 'undefined') {
    window.location.replace('search-results.html?search=' + inputText);
  }
});
$('.menu_search input[type="text"]').keyup(function(e) {
  if (e.keyCode == 13) {
    $(this).trigger("enterKey");
  }
});
