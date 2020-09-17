//Кнопка Войти в личный кабинет

$('#signin-form').on('submit',
    function(e) {

        e.preventDefault();

        //Получение данных формы
        let formData = $(this).serialize();

        //Вход в личный кабинет, либо выдача ошибки
        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/login-valid',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            statusCode: {
                422: function(data) {
                    console.log(data.responseJSON.errors);
                }
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