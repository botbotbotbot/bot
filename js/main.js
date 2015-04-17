var datetime = null,
        date = null,
        cMinutes = 35,
        cSec = 15;



var update = function () {
    date = moment(new Date())
    datetime.html(date.format('ddd, MMM D hh:mm:ss A'));

    if (cSec > 10){
	    cSec = cSec - 1;
	    $('.seconds').text(cSec);
	  }
	  else if(cSec > 1){
	  	cSec = cSec - 1;
	    $('.seconds').text('0' + cSec);
	  }
	  else{
	  	cMinutes = cMinutes - 1;
	  	$('.minutes').text(cMinutes);
	  	cSec = 59;
	  	$('.seconds').text(cSec);
	  }
};

var flash = function(){
	$('.flashing').toggleClass('is-hidden');
}

$(document).ready(function(){

    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
    setInterval(flash, 500);


});

