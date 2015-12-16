angular.module('quoteBook').controller('quoteBookCtrl', function($scope, quoteSvc) {
  $scope.test = 'Hey you';

  $scope.getData = function() {
    $scope.allData = quoteSvc.getData();
  };

  $scope.getData();

  $scope.addQuote = function(text, auth) {
    quoteSvc.addData({'text': text, 'author': auth});
    console.log(quoteSvc.getData()); // local storage is updating
    console.log($scope.allData); // view (based on all data) not updating
  };

  $scope.removeQuote = function(quote) {
    quoteSvc.removeData(quote);
    console.log(quoteSvc.getData());
    console.log($scope.allData);
  };

  $scope.addHidden = false;
});
