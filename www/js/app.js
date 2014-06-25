angular.module('starter', ['ionic', 'salesforce.oauth', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform, OAuthService) {

        window.location.hash = '#/login';

        OAuthService.authenticate().then(function() {
            window.location.hash = '#/contacts';
        });

    })

    .config(function ($stateProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })

            .state('contact-list', {
                url: '/contacts',
                templateUrl: 'templates/contact-list.html',
                controller: 'ContactListCtrl'
            })

            .state('contact-detail', {
                url: '/contacts/:contactId',
                templateUrl: 'templates/contact-detail.html',
                controller: 'ContactDetailCtrl'
            });

    });
