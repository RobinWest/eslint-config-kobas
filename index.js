'use strict';

module.exports = {
  globals: {
    'angular': false,
    'moment': false,
    '$': false
  },
  plugins: [
    'angular'
  ],
  rules: {
    'angular/angularelement': 1,
    'angular/controller-as': 0,
    'angular/controller-as-route': 0,
    'angular/controller-as-vm': [0, 'vm'],
    'angular/controller-name': [0, '/[A-Z].*Controller$/'],
    'angular/deferred': 0,
    'angular/definedundefined': 1,
    'angular/di': [1, 'function'],
    'angular/di-order': [0, true],
    'angular/di-unused': 1,
    'angular/directive-name': 0,
    'angular/directive-restrict': [1, {'explicit': 'always'}],
    'angular/document-service': 1,
    'angular/component-limit': [0, 1],
    'angular/empty-controller': 1,
    'angular/file-name': 0,
    'angular/filter-name': 0,
    'angular/foreach': 1,
    'angular/function-type': 0,
    'angular/interval-service': 1,
    'angular/json-functions': 1,
    'angular/log': 0,
    'angular/module-getter': 1,
    'angular/module-name': 0,
    'angular/module-setter': 1,
    'angular/module-dependency-order': 0,
    'angular/no-angular-mock': 0,
    'angular/no-controller': 0,
    'angular/no-cookiestore': 2,
    'angular/no-directive-replace': 1,
    'angular/no-http-callback': 1,
    'angular/no-jquery-angularelement': 2,
    'angular/no-private-call': 2,
    'angular/no-service-method': 0,
    'angular/no-services': [1, ['$http', '$resource', 'Restangular']],
    'angular/on-watch': 0,
    'angular/rest-service': 0,
    'angular/service-name': 0,
    'angular/timeout-service': 1,
    'angular/typecheck-array': 1,
    'angular/typecheck-date': 1,
    'angular/typecheck-function': 1,
    'angular/typecheck-number': 1,
    'angular/typecheck-object': 1,
    'angular/typecheck-string': 1,
    'angular/watchers-execution': [0, '$digest'],
    'angular/window-service': 1,
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'no-use-before-define': 0,
    'no-unused-vars': 1,
    'no-console': 1,
    'indent': 0
  },
  "extends": "eslint:recommended"
};
