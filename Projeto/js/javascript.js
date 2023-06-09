$(document).ready(function() {
    
    // progress bar
    let containerA = document.getElementById("circle-A");

    let circleA = new ProgressBar.circle(containerA, {
        color: '#64DAF9',
        strokewidth: 8,
        duration: 1400,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circle-B");

    let circleB = new ProgressBar.circle(containerB, {
        color: '#64DAF9',
        strokewidth: 8,
        duration: 1600,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 250);

            circle.setText(value);
        }

    });

    let containerC = document.getElementById("circle-C");

    let circleC = new ProgressBar.circle(containerC, {
        color: '#64DAF9',
        strokewidth: 8,
        duration: 2000,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }

    });

    let containerD = document.getElementById("circle-D");

    let circleD = new ProgressBar.circle(containerD, {
        color: '#64DAF9',
        strokewidth: 8,
        duration: 2200,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5004);

            circle.setText(value);
        }

    });

    //iniciando o load quando o usuário chega na sessão

    let dataAreaOffSet = $('#data-area').OffSet();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffSet.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    //parallax 
    setTimeout(function() {

        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({ imageSrc: 'img/pattern.png'});

    }, 250);

    // Filtro do portifolio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dsg-btn') {
            
        }
    });


});

