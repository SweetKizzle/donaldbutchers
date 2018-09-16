var app = angular.module("DonaldApp", []);

app.controller("homePageController", function($scope) {
  $scope.carousel = carousel;
  $scope.featuredProducts = [];

  for (i in products) {
    if (products[i].featured == "true") {
      $scope.featuredProducts.push(products[i]);
    }
  }

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
  $scope.productCategories = [];
  $scope.productCuts = [];
  $scope.products = products;
  $scope.queryParamCount = 1;

  var categories = document.getElementsByClassName("category_label");

  for (i in categories) {
    $scope.productCategories.push(categories[i].innerText);
  }

  $scope.completeCategoryList = $scope.productCategories;
  $scope.maxNumCategories = $scope.productCategories.length;

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

  $scope.addCategoryToFilter = function(category) {
    if ($scope.productCategories.length == $scope.maxNumCategories) {
      $scope.productCategories = [];
    }

    if (!$scope.productCategories.includes(category)) {
      $scope.productCategories.push(category);
    }
  };

  $scope.toggleCategoryInFilter = function(category) {
    if ($scope.productCategories.length == $scope.maxNumCategories) {
      $scope.productCategories = [];
    }

    if (!$scope.productCategories.includes(category)) {
      $scope.productCategories.push(category);
    } else {
      if ($scope.productCategories.length == 1) {
        $scope.clearCategoryFilters();
      } else {
        delete $scope.productCategories[
          $scope.productCategories.indexOf(category)
        ];
      }
    }
  };

  $scope.clearCategoryFilters = function() {
    $scope.productCategories = $scope.completeCategoryList;
  };

  $scope.clearAllFilters = function() {
    var queryParam = getParameterByName("category");

    if (queryParam && queryParam != "undefined") {
      window.location.replace("/product-list.html");
    }

    queryParam = getParameterByName("search");

    if (queryParam && queryParam != "undefined") {
      window.location.replace("/product-list.html");
    }

    $scope.clearSearchFilter();
    $scope.clearCutFilter();
    $scope.clearCategoryFilters();
  };

  $scope.clearSearchFilter = function() {
    $scope.searchFilter = null;
  };

  $scope.clearCutFilter = function() {
    $scope.productCuts = [];
  };

  $scope.filterByCategory = function(e) {
    var queryParam = getParameterByName("category");

    if (
      queryParam != null &&
      queryParam != "undefined" &&
      $scope.completeCategoryList.includes(queryParam) &&
      $scope.queryParamCount == 1
    ) {
      $scope.addCategoryToFilter(queryParam);
      $scope.queryParamCount++;
    }

    if (existsInArray($scope.productCategories, e.categories)) {
      return true;
    } else {
      return false;
    }
  };

  $scope.filterBySearch = function(e) {
    var queryParam = getParameterByName("search");

    if (
      queryParam != null &&
      queryParam != "undefined" &&
      e.name.toLowerCase().includes(queryParam)
    ) {
      $scope.searchFilter = queryParam;
    }

    if ($scope.searchFilter == null) {
      return true;
    }

    if (e.name.toLowerCase().includes($scope.searchFilter.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  $scope.addToCutFilter = function(cut) {
    var i = $.inArray(cut, $scope.productCuts);
    if (i > -1) {
      $scope.productCuts.splice(i, 1);
    } else {
      $scope.productCuts.push(cut);
    }
  };

  $scope.filterByCut = function(e) {
    if ($scope.productCuts.length == 0) {
      return true;
    }

    if ($scope.productCuts.includes(e.cut)) {
      return true;
    } else {
      return false;
    }
  };

  var existsInArray = function(haystack, arr) {
    return arr.some(function(v) {
      return haystack.indexOf(v) >= 0;
    });
  };

  var getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };
});

app.controller("searchResultsController", function($scope) {
  var getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  $scope.products = products;
  $scope.queryParam = getParameterByName("search");

  $scope.filterBySearch = function(e) {
    if (
      $scope.queryParam != null &&
      $scope.queryParam != "undefined" &&
      e.name.toLowerCase().includes($scope.queryParam.toLowerCase())
    ) {
      return true;
    }

    return false;
  };
});