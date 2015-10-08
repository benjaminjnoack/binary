angular
	.module('binary', ['ui.router'])
	.controller('BinaryCtrl', BinaryCtrl)
	.controller('BinaryZeroCtrl', BinaryZeroCtrl)
	.controller('BinaryOneCtrl', BinaryOneCtrl)
	.config(urlRouting)
	.config(stateDefinition);