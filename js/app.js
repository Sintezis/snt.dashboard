(function()
{
	'use strict'

	var modules = 
	[
		'ngRoute'
	]

	angular
		.module("dashboard.sintezis", modules)
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
      .when("/:project?", {
				controller: "HomeController",
				controllerAs: 'home',
				templateUrl: 'templates/home.html'

			})

		}])
		.controller('HomeController', function($rootScope, $routeParams)
		{
			var vm = this
			vm.projectName = 'sintezis'
			vm.projectData = projects[vm.projectName]

			if ($routeParams.project != undefined) {
				vm.projectName = $routeParams.project
				vm.projectData = projects[vm.projectName]
			}
		})
})()