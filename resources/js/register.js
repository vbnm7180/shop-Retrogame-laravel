//Кнопка Зарегистрироваться

$('#signup-form').on('submit',
    function(e) {

        e.preventDefault();

        //Получение данных формы
        let formData = $(this).serialize();

        //Регистрация, либо выдача сообщения об ошибке


        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/reg-valid',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            statusCode: {
                422: function(data) {
                    console.log(data.responseJSON.email);
                    if (data.responseJSON.email != null) {
                        $('.signup__email').text(data.responseJSON.email);
                        $('.signup__email').css('color', '#DF2121');
                        $('.signup__email').next().css('border-color', '#DF2121');
                    }
                    if (data.responseJSON.password != null) {
                        $('.signup__passw1').text(data.responseJSON.password_rep);
                        $('.signup__passw1').css('color', '#DF2121');
                        $('.signup__passw1').next().css('border-color', '#DF2121');
                    }
                    if (data.responseJSON.password_rep != null) {
                        $('.signup__passw2').text(data.responseJSON.password_rep);
                        $('.signup__passw2').css('color', '#DF2121');
                        $('.signup__passw2').next().css('border-color', '#DF2121');
                    }

                },
                200: function() {
                    window.location.pathname = "/";
                }

            }


        });

        /*
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
        */

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