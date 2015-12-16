angular.module('quoteBook').service('storageSvc', function() {
  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  var addDataToStorage = function(key, data) {
    // if it doesn't already exist, add the stringed quotes data to local storage
    if (!localStorage[key]) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      return "item with key " + key + " already in local storage.";
    }
  };

  addDataToStorage('quotes', quotes);

  this.getData = function() {
    return JSON.parse(localStorage.getItem('quotes'));
  };

  this.removeData = function(text) {
    // get data from storage
    var currData = this.getParsedDataFromStorage();
    // loop through, look for matches for quote text
    for (var i = 0; i < currData.length; i++) {
      if (currData[i].text === text) { // if match
        currData.splice(i, 1); // delete match
      }
    }
    // update local storage with new data that has quote removed
    localStorage.setItem('quotes', JSON.stringify(currData));
  };

  this.addData = function(quoteObj) {
    // get data from storage
    var currData = this.getParsedDataFromStorage();
    // add new entry, if it has required properties
    if (quoteObj.text && quoteObj.author && Object.keys(quoteObj).length === 2) {
      currData.push(quoteObj);
    } else {
      return "Your new entry is incomplete.";
    }
    // add updated data, w/ new entry, back to local storage
    localStorage.setItem('quotes', JSON.stringify(currData));
  };
});
