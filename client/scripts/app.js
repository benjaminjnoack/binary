angular.module('binary', ['ui.router'])
	.controller('BinaryCtrl', BinaryCtrl)
	.config(urlRouting)
	.config(stateDefinition);