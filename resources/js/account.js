//Обновление данных в личном кабинете (кнопка Сохранить)
$('body').on('submit', '#account-form',
    function(e) {
        e.preventDefault();
        //Получение данных формы
        let formData = $(this).serialize();
        //Изменение данных личного кабинета в базе данных
        $.get('/models/accountUpdateFormModel.php', formData);
    }
);

//Кнопка Выйти из личного кабинета
$('.logout-btn').on('click',
    function() {
        $.get('/controllers/exitAccountController.php', function() {
            window.location.href = "/controllers/pageController.php?page_id=user-area";
        });
    }
);