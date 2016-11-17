angular.module('angular-basic').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/js/lookUp/lookUp.html',
    "<nav-bar></nav-bar>\n" +
    "<banner></banner>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <form>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 col-lg-6\">\n" +
    "\n" +
    "                <input-box\n" +
    "									field-id=\"accountNumber\"\n" +
    "									label=\"lookUpPage.form.searchFieldLabel\"\n" +
    "									max-length=\"18\"\n" +
    "									required=\"true\"\n" +
    "									place-holder=\"lookUpPage.form.placeHolder\">\n" +
    "								</input-box>\n" +
    "\n" +
    "                <submit-button label=\"lookUpPage.form.buttonTitle\">\n" +
    "								</submit-button>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/common/banner.html',
    "<div class=\"jumbotron text-center\">\n" +
    "  <h1 translate>{{'common.banner.title'}}</h1>\n" +
    "  <p translate>{{'common.banner.subTitle'}}</p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/common/navBar.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <a class=\"navbar-brand\" href=\"#\" translate>{{'common.menu.mainTitle'}}</a>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"nav-item active\">\n" +
    "                <a class=\"nav-link\" href=\"#\">{{'common.menu.home' | translate}}<span class=\"sr-only\">(current)</span></a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\" translate>{{'common.menu.history'}}</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\" translate>{{'common.menu.activity'}}</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\" translate>{{'common.menu.requestHistory'}}</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\" translate>{{'common.menu.downloadFile'}}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/js/shared/ngDirectives/form/inputBox.html',
    "<div class=\"form-group\">\n" +
    "    <label for=\"{{option.id}}\" translate>\n" +
    "			{{option.label}}\n" +
    "		</label>\n" +
    "    <input\n" +
    "			maxlength=\"{{option.maxLength}}\"\n" +
    "			type=\"{{option.type}}\"\n" +
    "			class=\"form-control input-lg {{option.classList}}\"\n" +
    "			id=\"{{option.id}}\"\n" +
    "			aria-describedby=\"{{option.id}}Help\"\n" +
    "			translate-attr=\"{placeholder: option.placeHolder}\">\n" +
    "    <small id=\"{{option.id}}Help\" class=\"form-text text-muted\">\n" +
    "			{{option.errorMessages.required}}\n" +
    "		</small>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngDirectives/form/submitButton.html',
    "<div class=\"pull-right\">\n" +
    "    <button type=\"submit\" class=\"btn btn-lg btn-primary\" translate>{{label}}</button>\n" +
    "</div>\n"
  );

}]);
