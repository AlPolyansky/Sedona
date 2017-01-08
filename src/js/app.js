var commonModule = (function(){


	var _plugins = function(){
		svg4everybody();
	}

	// Прослушка собтий
	var setUpListener = function(){

	}


	return {
		init : function(){
			setUpListener();
			_plugins();
		}
	}

})()

commonModule.init();