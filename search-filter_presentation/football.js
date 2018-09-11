

$( document ).ready(function() {
    $("input[type='checkbox']").change(function() {
       
        
        if($("tbody tr").text().length > 0) { 
            $("#submitVideo").css('visibility',"visible");  
            $(".noresult").remove();
        }else{
            $("#submitVideo").css('visibility',"hidden");
            $("tbody").append("<tr class='noresult'></tr>");
            $("tbody tr").append("<td>0 RESULT</td>");

        }

        if(this.checked) {   
            this.parentNode.style.backgroundColor = "#007bff80";
        }else{
            this.parentNode.style.backgroundColor = "#f8f9fa";
        }
    });
});

angular.module('football', [])
    .controller('MainCtrl', function ($scope, $http) {

  		$http.get('football.json')
	    .then(function(res){
	          $scope.cards = res.data;           
	    });

 
    $scope.options = [{
        name: 'YOKOHAMA',
        selected: false
    }, {
        name: 'TOKYO',
        selected: false
    }];


    $scope.option2 = [{
        name: "ゴール",
        selected: false
    }, {
        name: "シュート",
        selected: false
    }, {
        name: "パス",
        selected: false
    }];


    $scope.option3 = [{
        name: 'セーブ',
        selected: false
    }, {
        name: 'フィード',
        selected: false
    }, {
        name: 'ゴールキック',
        selected: false
    }];

    $scope.num = function (arr) {
        return arr.length > 2 ? 2 : 3;
    }

    $scope.count = true;

    $scope.setOrderProperty = function(propertyName) {
        if ($scope.orderProperty === propertyName) {
            $scope.orderProperty = '-' + propertyName;
        } else if ($scope.orderProperty === '-' + propertyName) {
            $scope.orderProperty = propertyName;
        } else {
            $scope.orderProperty = propertyName;
        }
    }

    $scope.itemFilter = function (item) {
        var filters = $scope.options.filter(function (element, idx, array) {
            return element.selected;
        }) || [];
        var filters2 = $scope.option2.filter(function (element, idx, array) {
            return element.selected;
        }) || [];
        var filters3 = $scope.option3.filter(function (element, idx, array) {
            return element.selected;
        }) || [];

        var matched = true;
        filters.forEach(function (option) {
            matched = matched && item.attrs.indexOf(option.name) >= 0;
        })
        filters2.forEach(function (option02) {
            matched = matched && item.attrs.indexOf(option02.name) >= 0;
        })
        filters3.forEach(function (option03) {
            matched = matched && item.attrs.indexOf(option03.name) >= 0;
        })
        return matched;
    };
});

function iframe(){
    $('<div id="iframe-container"><a onclick="closeIframe();"><iframe width="420" height="315" src="https://www.youtube.com/embed/cdOlXvQLhno?autoplay=1"></iframe></a></div>').appendTo("body");
}
function closeIframe(){
   document.getElementById("iframe-container").remove();
}

