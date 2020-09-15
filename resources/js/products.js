//Вывод карточек товаров с игровыми приставками в модальное окно

$(".card__btn").on("click",
    function(e) {

        //Получение id категории товара
        let categ = e.target.id;
        let data = "categ=" + categ;

        //Загрузка товаров в модальное окно из базы данных
        $('.popup__cards').load('/models/consolesProductsModel.php', data);
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
                content = content + '<div class="game__card"><div class="game__img"><img src="/images/games/' + this.image + '" alt="" class="game-img"></div><div class="game__title">' + this.name + '</div><button class="btn game-btn-buy add-cart" id="add_' + this.section_id + '-' + this.product_id + '">В корзину</button></div>';
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
                content = content + '<div class="game__card"><div class="game__img"><img src="/images/games/' + this.image + '" alt="" class="game-img"></div><div class="game__title">' + this.name + '</div><button class="btn game-btn-buy add-cart" id="add_' + this.section_id + '-' + this.product_id + '">В корзину</button></div>';
            });
            $('.tabs__content').html(content);
        });
    });