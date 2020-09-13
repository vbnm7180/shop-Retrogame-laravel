//Кнопка Войти в личный кабинет

$('#signin-form').on('submit',
    function(e) {

        e.preventDefault();

        //Получение данных формы
        let formData = $(this).serialize();

        //Вход в личный кабинет, либо выдача ошибки
        $.getJSON('/controllers/loginController.php', formData, function(success) {

            if (success.login == 0) {
                $('.signin__email').text('Неверный Email');
                $('.signin__email').css('color', '#DF2121');
                $('.signin__email').next().css('border-color', '#DF2121');
            }
            if (success.password == 0) {
                $('.signin__passw').text('Неверный пароль');
                $('.signin__passw').css('color', '#DF2121');
                $('.signin__passw').next().css('border-color', '#DF2121');
            }
            if (success.login == 1 && success.password == 1) {
                window.location.href = "/controllers/pageController.php?page_id=user-area";
            }
        });
    }
);

//Изменение подписей полей ввода при наборе текста после отображения ошибки

$('.email__input').on('input',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Ваш Email');
    }
);

$('.password__input').on('input',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Введите пароль');
    }
);