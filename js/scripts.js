$(document).ready(function() {
  $(".hero_carousel").slick({
    prevArrow: $(".prev_container"),
    nextArrow: $(".next_container")
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
