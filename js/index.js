document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    document.querySelectorAll('#mobile-nav a').forEach(function (elem) {
        elem.addEventListener('click', function () {
            // Cerrar la barra de navegación
            var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            instance.close();

            // Cambiar el elemento activo
            var activeElem = document.querySelector('#mobile-nav .active');
            if (activeElem) {
                activeElem.classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    });

    instances[0].el.addEventListener('swipeleft', function () {
        instances[0].close();
    });

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);

        document.querySelectorAll('#mobile-nav a').forEach(function (elem) {
            elem.addEventListener('click', function () {
                // Cerrar la barra de navegación
                var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
                instance.close();

                // Cambiar el elemento activo
                var activeElem = document.querySelector('#mobile-nav .active');
                if (activeElem) {
                    activeElem.classList.remove('active');
                }
                this.parentNode.classList.add('active');
            });
        });

        instances[0].el.addEventListener('swipeleft', function () {
            instances[0].close();
        });
    });

    document.addEventListener("backbutton", function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.getInstance(elems[0]);
        if (instances.isOpen) {
            instances.close();
        } else {
            navigator.app.exitApp();
        }
    }, false);

    window.addEventListener('scroll', function () {
        // Obtener la posición de desplazamiento actual
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        // Buscar el elemento en la página que está más cerca de la parte superior de la ventana
        var elems = document.querySelectorAll('#ainicio, #mitrayectoria, #tecnologias, #proyectos, #contacto');
        var currentElem = null;
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].offsetTop <= scrollPos) {
                currentElem = elems[i];
            } else {
                break;
            }
        }

        // Actualizar el elemento activo en la barra de navegación
        if (currentElem) {
            var activeElem = document.querySelector('#mobile-nav .active');
            if (activeElem) {
                activeElem.classList.remove('active');
            }
            var newActiveElem = document.querySelector('#mobile-nav li a[href="#' + currentElem.id + '"]');
            if (newActiveElem) {
                newActiveElem.parentNode.classList.add('active');
            }
        }
    });
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
        activeClass: '',
        scrollOffset: 0
    });
});

document.addEventListener("backbutton", function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.getInstance(elems[0]);
    if (instances.isOpen) {
        instances.close();
    } else {
        navigator.app.exitApp();
    }
}, false);