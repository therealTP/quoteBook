angular.module('quoteBook').controller('quoteBookCtrl', function($scope, quoteSvc) {
  $scope.test = 'Hey you';

  $scope.getData = function() {
    $scope.allData = quoteSvc.getData();
  };

  $scope.getData();

  $scope.addQuote = function(text, auth) {
    var newQuote = {'text': text, 'author': auth};
    // update alldata for real time view update
    $scope.allData.push(newQuote);
    // add new quote to localstorage
    quoteSvc.addData(newQuote);
  };

  $scope.removeQuote = function(quote) {
    // remove quote from $scope.allData to update view
    for (var i = 0; i < $scope.allData.length; i++) {
      if ($scope.allData[i].text === quote) {
        $scope.allData.splice(i, 1);
      }
    }
    // remove quote from local storage
    quoteSvc.removeData(quote);
  };

  $scope.addHidden = false;
});
