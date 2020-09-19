//Кнопка Оформить заказ
$('.sum-btn').on("click", function() {
    let formData = $('#bucket-form').serialize();
    $.get('/make-order', formData, function() {
        window.location.pathname = "/";
    });
});