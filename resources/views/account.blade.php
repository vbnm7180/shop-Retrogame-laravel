@include ('header')

<div class="btn-wraper">
            <button type="button" class="logout-btn"><img src="/images/private_cab/logout.png" class="logout-btn" alt="logout"> Выйти</button>
        </div>
<div class="pa__content">

	<div class="pa__form-wrapper">

	<form class="pa__form" id="account-form">
		<label for="" class="form__title">личный кабинет</label>
			<input type="text" placeholder="ФИО" class="pa__input" name="name" value="{{$res['name']}}">
			<input type="text" placeholder="Телефон" class="pa__input" name="phone" value="{{$res['phone']}}">
			<input type="text" placeholder="Электронная почта" class="pa__input" name="email" value="{{$res['email']}}">
			<input type="text" placeholder="Город" class="pa__input" name="city" value="{{$res['city']}}">
			<input type="text" placeholder="Улица/Дом/Квартира" class="pa__input" name="street" value="{{$res['street']}}">
			<input type="text" placeholder="Индекс" class="pa__input" name="postcode" value="{{$res['postcode']}}">
			<div class="btn__wraper">
			<button type="submit" class="personal__area-btn">Сохранить</button></div>
	    </form>

	</div>
	<div class="form_separator"></div>

	<div class="pa__orders">
		<div class="orders__wraper">
			<div class="orders__title">Мои заказы <form action=""></form>
			</div>

		</div>
	</div>
</div>

@include ('footer')