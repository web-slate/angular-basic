angular.module('components')

.directive('inputBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/js/shared/ngDirectives/form/inputBox.html',
        link: function ($scope, element, attr) {
            $scope.option = {
								id: attr.fieldId,
                label: attr.label,
                type: attr.type || 'text',
                maxLength: attr.maxLength || '255',
                placeHolder: attr.placeHolder,
                errorMessages: {
                    required: 'This field is required'
                }
            };
        }
    }
});
