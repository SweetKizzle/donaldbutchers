$(document).ready(function() {
  $(".hero_carousel").slick({
    prevArrow: $(".prev_container"),
    nextArrow: $(".next_container"),
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

var app = angular.module("DonaldApp", []);

app.controller("homePageController", function($scope) {
  $scope.carousel = carousel;
  $scope.featuredProducts = featuredProducts;
  $scope.promoBoxes = promoBoxes;

  $scope.getNumber = function(num) {
    return new Array(num);
  };

  $scope.addQuantity = function(index) {
    var $input = $("#quantity_" + index);

    if (parseInt($input.val()) < 10) {
      $input.val(parseInt($input.val()) + 1);
    }
  };

  $scope.removeQuantity = function(index) {
    var $input = $("#quantity_" + index);

    if (parseInt($input.val()) > 1) {
      $input.val(parseInt($input.val()) - 1);
    }
  };
});

app.controller("productListController", function($scope) {
  $scope.productCategories = productCategories;
});

$('input[type="range"]').rangeslider({
  polyfill : false,
  onInit : function() {
      this.output = $( '<div class="range-output" />' ).insertAfter(".price_slider").html( "£" + this.$element.val() );
  },
  onSlide : function( position, value ) {
      this.output.html( "£" + value );
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
};

function clearSearch() {
  $(".product_filter_input input").val("");
};

function clearCheckboxes() {
  $(".product_filter_checkboxes input:checkbox").prop("checked", false);
};

function zeroPriceSlider() {
  $('input[type="range"]').val(50).change();
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
