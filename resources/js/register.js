//Кнопка Зарегистрироваться

$('#signup-form').on('submit',
    function(e) {

        e.preventDefault();

        //Получение данных формы
        let formData = $(this).serialize();

        //Регистрация, либо выдача сообщения об ошибке
        $.getJSON('/controllers/registerController.php', formData, function(data) {

            if (data.login == 0) {
                $('.signup__email').text('Такой Email уже зарегистрирован');
                $('.signup__email').css('color', '#DF2121');
                $('.signup__email').next().css('border-color', '#DF2121');
            }
            if (data.password == 0) {
                $('.signup__passw').text('Пароли не совпадают');
                $('.signup__passw').css('color', '#DF2121');
                $('.signup__passw').next().css('border-color', '#DF2121');
            }
            if (data.login == 1 && data.password == 1) {
                window.location.href = "/controllers/pageController.php?page_id=account";
            }
        });
    }
);

//Изменение подписей полей ввода при наборе текста после отображения ошибки

$('.password-rep__input').on('input',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Повторите пароль');
    }
);