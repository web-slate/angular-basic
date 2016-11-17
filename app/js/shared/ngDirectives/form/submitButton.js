angular.module('components')

.directive('submitButton', function () {
		return {
			restrict: 'E',
	    templateUrl: 'app/js/shared/ngDirectives/form/submitButton.html',
			link: function (scope, element, attr) {
				// scope.$eval(attr.label);
				scope.label = attr.label;
			}
		}
})
