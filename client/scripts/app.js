angular
	.module('binary', ['ui.router'])
	.controller('BinaryCtrl', BinaryCtrl)
	.controller('BinaryZeroCtrl', BinaryZeroCtrl)
	.config(urlRouting)
	.config(stateDefinition);