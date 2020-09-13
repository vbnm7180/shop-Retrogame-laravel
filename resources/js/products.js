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
        let data = "categ=2-7";

        //Загрузка карточек товаров с играми на главную страницу
        $('.tabs__content').load('/models/gamesProductsModel.php', data);
    }

);

//Вывод карточек товаров с играми на главную страницу при переключении табов
$(".game-btn").on("click",
    function(e) {

        //Получение id категории товара
        let categ = e.target.id;
        let data = "categ=" + categ;

        //Загрузка карточек товаров с играми на главную страницу
        $('.tabs__content').load('/models/gamesProductsModel.php', data);
    }
);