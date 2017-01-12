var commonModule = (function(){


	var _plugins = function(){
		svg4everybody();
		picturefill();
	};


	// Глобальные переменные

	var menuButton = $('.sandwich');

	// Функции

	var _objectFitImg = function(){
		if ( ! Modernizr.objectfit ) {
		  $('.card-photo').each(function () {
		    var $container = $(this),
		        imgUrl = $container.find('img').prop('src');
		    if (imgUrl) {
		      $container
		        .css('backgroundImage', 'url(' + imgUrl + ')')
		        .addClass('card-photo--object-fit');
		    }  
		  });
		}
	}

	var sandwichOpen = function(e){
		e.preventDefault();
		var $this = $(this);
		var menu = $('.menu');
		var active = 'menu--active';

		$this.toggleClass('sandwich--active');
		menu.toggleClass(active);



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

