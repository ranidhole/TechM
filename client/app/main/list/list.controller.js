'use strict';

(function() {

  class ListController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
    });
    }
  }

  angular.module('genApplyApp').controller('ListController', ListController);

})();
