//Кнопка Оформить заказ
$('.sum-btn').on("click", function() {
    let formData = $('#bucket-form').serialize();
    $.ajax({
        method: 'PUT',
        data: formData,
        url: '/make-order',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        statusCode: {
            200: function() {
                window.location.pathname = "/";
            }
        }

    });
});