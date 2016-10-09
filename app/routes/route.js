app.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when('/', {
        templateUrl : 'app/views/home.html',
        controller     : 'HomeCtrl',
    })

    .otherwise ({ redirectTo: '/' });
});


app.config(['$routeProvider', '$sceDelegateProvider',
        function ($routeProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

}]);