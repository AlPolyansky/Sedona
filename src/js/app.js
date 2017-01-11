var commonModule = (function(){


	var _plugins = function(){
		svg4everybody();
		picturefill();
		Hyphenator.run();
	};


	// Глобальные переменные

	var menuButton = $('.sandwich');

	// Функции

	var sandwichOpen = function(e){
		e.preventDefault();
		var $this = $(this);
		var menu = $('.menu');
		var active = 'menu--active';

		$this.toggleClass('sandwich--active');
		menu.toggleClass(active);

		/*if(menu.hasClass(active)){
			$('body').css({
				'transform': 'translateY(' + menu.height() + 'px)'
			})
		}else{
			$('body').removeAttr('style');
		}*/


	};

	// Прослушка собтий
	var setUpListener = function(){
		menuButton.on('click',sandwichOpen)
	};


	return {
		init : function(){
			setUpListener();
			_plugins();
		}
	};

})();

$(document).ready(function(){
	commonModule.init();
});

