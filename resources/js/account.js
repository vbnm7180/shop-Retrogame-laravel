//Обновление данных в личном кабинете (кнопка Сохранить)
$('body').on('submit', '#account-form',
    function(e) {
        e.preventDefault();
        //Получение данных формы
        let formData = $(this).serialize();
        //Изменение данных личного кабинета в базе данных
        $.get('/update', formData);
    }
);

//Кнопка Выйти из личного кабинета
$('.logout-btn').on('click',
    function() {
        $.get('/exit', function() {
            window.location.pathname = "/login";
        });
    }
);