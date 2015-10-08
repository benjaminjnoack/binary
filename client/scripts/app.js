angular
	.module('binary', ['ui.router'])
	.controller('BinaryCtrl', BinaryCtrl)
	.controller('BinaryOneCtrl', BinaryOneCtrl)
	.config(urlRouting)
	.config(stateDefinition);