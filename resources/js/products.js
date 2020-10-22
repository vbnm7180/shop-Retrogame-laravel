//Вывод карточек товаров с игровыми приставками в модальное окно

$(".card__btn").on("click",
    function(e) {

        //Получение id категории товара
        let data = e.target.id;

        //Загрузка товаров в модальное окно из базы данных
        $.getJSON('/consoles/' + data, function(console) {

            let content = '<div class="popup__main-text"><span class="popup__console-name">' + console[0].category_name + '</span>&nbsp;&nbsp;&nbsp;&nbsp;Товары в наличии</div>';

            $.each(console, function() {

                if (this.cart == 0) {
                    var display_add = ' displayblock';
                    var display_go = ' displaynone';


                }
                if (this.cart == 1) {
                    var display_add = ' displaynone';
                    var display_go = ' displayblock';
                }

                content = content + '<div class="popup__card"><div class="popup__img"><img src="/images/consoles/' + this.image + '" alt="\" class="popup-img"></div><div class="popup__title"><h3>' + this.name + '</h3></div><div class="popup__text">Состояние:&nbsp;' + this.condition_rating + '<br>' + this.description + '<br> Комплект:&nbsp;' + this.bundle + '<br> Регион:&nbsp;' + this.region + '<br> Цена:&nbsp;' + this.price + ' ₽</div><button type="button" class="btn popap-btn add-cart' + display_add + '" id="add_' + this.section_id + '-' + this.product_id + '">Добавить в Корзину</button><a href="/cart" class="btn popap-btn go-cart' + display_go + '">Перейти в корзину</a></div>';
            });
            $('.popup__cards').html(content);

        })
    }
);


//Вывод карточек товаров с играми на главную страницу при ее загрузке
$(window).on('load',
    function() {

        //Выбор категории товаров Игры для Sega Saturn
        let data = "2-7";

        //Загрузка карточек товаров с играми на главную страницу
        $.getJSON('/games/' + data, function(game) {
            let content = '';

            $.each(game, function() {

                if (this.cart == 0) {
                    var display_add = ' displayblock';
                    var display_go = ' displaynone';


                }
                if (this.cart == 1) {
                    var display_add = ' displaynone';
                    var display_go = ' displayblock';
                }

                content = content + '<div class="game__card"><div class="game__img"><img src="/images/games/' + this.image + '" alt="" class="game-img"></div><div class="game__title">' + this.name + '</div><button class="btn game-btn-buy add-cart' + display_add + '" id="add_' + this.section_id + '-' + this.product_id + '">В корзину</button><a href="/cart" class="btn game-btn-buy go-cart' + display_go + '">&nbsp;Перейти<br> в корзину</a></div>';

            });

            $('.tabs__content').html(content);
        });
    }

);


//Вывод карточек товаров с играми на главную страницу при переключении табов
$(".game-btn").on("click",
    function(e) {

        //Получение id категории товара
        let data = e.target.id

        //Загрузка карточек товаров с играми на главную страницу
        $.getJSON('/games/' + data, function(game) {
            let content = '';
            $.each(game, function() {

                if (this.cart == 0) {
                    var display_add = ' displayblock';
                    var display_go = ' displaynone';


                }
                if (this.cart == 1) {
                    var display_add = ' displaynone';
                    var display_go = ' displayblock';
                }

                content = content + '<div class="game__card"><div class="game__img"><img src="/images/games/' + this.image + '" alt="" class="game-img"></div><div class="game__title">' + this.name + '</div><button class="btn game-btn-buy add-cart' + display_add + '" id="add_' + this.section_id + '-' + this.product_id + '">В корзину</button><a href="/cart" class="btn game-btn-buy go-cart' + display_go + '">&nbsp;Перейти<br> в корзину</a></div>';

            });
            $('.tabs__content').html(content);
        });
    });