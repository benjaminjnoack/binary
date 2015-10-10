angular
	.module('binary', ['ui.router'])
	.controller('MotherCtrl', MotherCtrl)
	.controller('BinaryCtrl', BinaryCtrl)
	.controller('BinaryZeroCtrl', BinaryZeroCtrl)
	.controller('BinaryOneCtrl', BinaryOneCtrl)
	.config(urlRouting)
	.config(stateDecorator)
	.config(stateDefinition);