angular.module('userServices',[])

.factory('user', function ($http) {
    var userFactory = {};

    // user.create(regData);
    userFactory.create = function () {
        return $http.post('/api/listing/getAll');
    };

    return userFactory;
});
