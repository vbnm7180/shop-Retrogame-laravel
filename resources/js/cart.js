//Кнопка Добавить в корзину

$('body').on('click', '.add-cart',
    function(e) {

        //Получение id товара
        let reg = /(\d+-\d+)/;
        let add_prod = e.target.id.match(reg);

        //Добавление товара в массив корзины, вычисление общей цены
        let data = "add_prod=" + add_prod[0];
        $.get('/controllers/addToCartController.php', data);

        //Смена кнопки с Добавить в корзину на Перейти в корзину
        $(e.target).removeClass('displayblock').addClass('displaynone');
        $(e.target).next('.go-cart').removeClass('displaynone').addClass('displayblock');
    }
);

//Кнопка Удалить из корзины

$('body').on('click', '.del-cart',
    function(e) {

        //Получение id товара
        let reg = /(\d+-\d+)/;
        let del_prod = e.target.id.match(reg);

        //Удаление товара из массива корзины, вычисление общей цены
        let data = "del_prod=" + del_prod[0];
        $.getJSON('/controllers/deleteFromCartController.php', data, function(res) {

            //Если в корзине нет товаров, вывести текст
            if (res.count == 0) {
                $('.bucket__content-cards').text('Корзина пуста');
            }

            //Удаление строки товара из корзины
            $(e.target).parent().remove();

            //Изменение вывод измененного числа товаров и цены
            let count = 'Товары: ' + res.count;
            $('.goods').text(count);
            let price = '<b>' + res.price + '&#8381;</b>';
            $('.goods__price').html(price);
        });
    }
);

//Кнопка Перейти в корзину

$('body').on('click', '.go-cart',
    function() {
        window.location.href = "/controllers/pageController.php?page_id=cart";
    }
);