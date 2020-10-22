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
				<button type="submit" class="btn personal__area-btn">Сохранить</button></div>
		</form>

	</div>
	<div class="form_separator"></div>

	<div class="pa__orders">
		<div class="orders__wraper">
			<div class="orders__title">Мои заказы <form action=""></form>
			</div>

            {{--Вывод заказов--}}
			@foreach($res['orders'] as $order)

			@php
			//Номера заказа и дополнение его нулями слева
			$order_number = str_pad($order['order_number'], 7, "0", STR_PAD_LEFT);

			//Дата заказа
			$date = date('d.m.Y', strtotime($order['order_date']));

            //Цена товаров в заказе
			$total = $order['total_price'];

			//Счетчик для строки товара в заказе
			$count = 1;
			@endphp
			<div class="orders__info">
				<div class="orders__header">
					<div class="order__number">№ {{$order_number}}</div>
					<div class="order__date">{{$date}}</div>
				</div>
				<div class="orders__content">

                    {{--Вывод строк товаров в закзе--}}

					@foreach($order['products_info'] as $product)

					<div class="order">{{$count}}. {{$product['section_name']}} {{$product['product_name']}} <span>{{$product['price']}} р</span> </div>

					@php
					$count++;
					@endphp
					
					@endforeach

					<div class="orders__price">
						Общая стоимость: <span>{{$total}} р</span></div>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</div>

@include ('footer')