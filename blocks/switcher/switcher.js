$( document ) . ready ( function ()
{
    /* Переменные */
    var $menu = $( '.switcher', 'body' );

    /* Переключение вкладок меню */
    $( '.switcher__item', $menu ) . on ( 'click', function ()
    {
        // Текущий элемент
        var $this = $( this );

        // Снятие активности с текущего активного пункта меню
        $( '.switcher__item.switcher__item_active', $menu ) . removeClass ( 'switcher__item_active' );

        // Присвоение активности нажатому пункту меню
        $this . addClass ( 'switcher__item_active' );

        // Скрытие содержимого текущего контейнера
        $( '.switcher__container_visible', $menu ) . removeClass ( 'switcher__container_visible' );

        // Показ содержимого целевого контейнера
        $( '.' + $this . attr ( 'switch' ), $menu ) . addClass ( 'switcher__container_visible' );

    });

});