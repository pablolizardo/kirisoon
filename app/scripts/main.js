console.log('\'Allo \'Allo!');

$("#countdown").countdown("2014/08/15", function(event) {
  $(this).html(
    event.strftime(''
     + '<span><strong>%D</strong> dias </span>'
     + '<span><strong>%H</strong> horas </span> '
     + '<span><strong>%M</strong> minutos </span>'
     + '<span><strong>%S</strong> segundos</span>')
    );

});