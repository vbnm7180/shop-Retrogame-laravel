//Кнопка Добавить в корзину

$('body').on('click', '.add-cart',
    function(e) {

        //Получение id товара
        let reg = /(\d+-\d+)/;
        let add_prod = e.target.id.match(reg);

        //Добавление товара в массив корзины, вычисление общей цены
        let data = add_prod[0];

        $.ajax({
            method: 'POST',
            url: '/add-cart/' + data,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

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
        let data = del_prod[0];

        //Удаление товара из массива корзины
        $.ajax({
            method: 'DELETE',
            dataType: 'json',
            url: '/del-cart/' + data,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {

                //Если в корзине нет товаров, вывести текст
                if (data.total_count == 0) {
                    $('.bucket__content-cards').text('Корзина пуста');
                    $('.bucket__final__sum').remove();
                }

                //Удаление строки товара из корзины
                $(e.target).parent().remove();



                //Изменение вывод измененного числа товаров и цены
                let total_count = 'Товары: ' + data.total_count;
                $('.goods').text(total_count);
                let price = '<b>' + data.total_price + '&#8381;</b>';
                $('.goods__price').html(price);



            }
        });
    }
);

//Кнопка Перейти в корзину
/*
$('body').on('click', '.go-cart',
    function() {
        window.location.href = "/controllers/pageController.php?page_id=cart";
    }
);
*/