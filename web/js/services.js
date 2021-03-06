'use strict';

/* Services */

var ulboraCmsServices = angular.module('ulboraCmsServices', ['ngResource', 'ngCookies']);

ulboraCmsServices.factory('Content', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "content", {}, {
            getContent: {method: 'POST', cache : false, isArray: false}
        });
    }]);

ulboraCmsServices.factory('Article', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "content/article", {}, {
            get: {method: 'GET', cache : false, isArray: false}            
        });
    }]);

ulboraCmsServices.factory('Login', ['$resource',
    function($resource) {
        return $resource(siteUrl + "public/login", {}, {
        });
    }]);

ulboraCmsServices.factory('Challenge', ['$resource',
    function($resource) {
        return $resource(challengeUrl + "/challenge", {}, {
            getChallenge: {method: 'GET', params: {languageCode: "en_US"}, isArray: false}
        });
    }]);

ulboraCmsServices.factory('Registration', ['$resource',
    function($resource) {
        return $resource(siteUrl + "public/register", {}, {
            //save: {method: 'POST', params: {}, isArray: false}
        });
    }]);


ulboraCmsServices.factory('Password', ['$resource',
    function($resource) {
        return $resource(siteUrl + "public/resetPassword", {}, {
            reset: {method: 'POST', params: {}, isArray: false}
        });
    }]);


ulboraCmsServices.factory('User', ['$resource',
    function($resource) {
        return $resource(siteUrl + "ulboraUser/pw", {}, {
            changePassword: {method: 'POST', params: {}, isArray: false}
        });
    }]);