angular.module('components', []);

angular.module('lookUp', []);

angular.module('angular-basic', [
    'ngRoute',
		'pascalprecht.translate',
    'components',
    'lookUp'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/js/lookUp/lookUp.html',
            controller: 'LookUpController'
        })
        .otherwise({
            redirectTo: '/'
        });

}])

.config([ '$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {

		$translateProvider.translations('en', {
			"common": {
				"menu": {
					"mainTitle": "Angular Basic",
					"home": "Home (current)",
					"history": "History",
					"activity": "Activity",
					"requestHistory": "Request History",
					"downloadFile": "Download File"
				},
				"banner": {
					"title": "Bank App",
					"subTitle": "Account Look Up"
				}
			},
			"lookUpPage": {
				"title": "Account Look Up",
				"form": {
					"searchFieldLabel": "Account Number",
					"placeHolder": "Enter Account Number",
					"required": "This field is required",
					"buttonTitle": "Search"
				}
			}
		});

		$translateProvider.translations('es', {
			"common": {
				"menu": {
					"mainTitle": "angular básico",
					"home": "Inicio (actual)",
					"history": "Historia",
					"activity": "Actividad",
					"requestHistory": "Historial de solicitudes",
					"downloadFile": "Descargar archivo"
				},
				"banner": {
					"title": "Aplicación bancaria",
					"subTitle": "Cuenta Look Up"
				}
			},
			"lookUpPage": {
				"title": "Cuenta Look Up",
				"form": {
					"searchFieldLabel": "Número de cuenta",
					"placeHolder": "Introducir número de cuenta",
					"required": "este campo es requerido",
					"buttonTitle": "Buscar"
				}
			}
		});

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('es');
    $translateProvider.fallbackLanguage('es');
    $translateProvider.useLoaderCache(true);
} ]);
