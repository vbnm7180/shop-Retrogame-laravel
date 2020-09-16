@include ('header')

<div class="bucket__content">

	<div class="row__wraper">
		<div class="bucket__products">
			<div class="bucket__title">
				<div class="naming">
					Наименование товара
				</div>
				<div class="info">
					Количество Цена
				</div>
			</div>
			<div class="bucket__content-cards">
				@php $ordinal=1 @endphp
				@foreach($res['cart_products'] as $product)
				<div class="bucket__product__card">
					<div class="card__number">
						{{ $ordinal}} .
					</div>
					<div class="card-img"><img src="/images/{{$res['image_path']}}/{{$product[0]['image']}}" alt="\"></div>
					<div class="name_product">{{$product[0]['name']}}</div>
					<div class="numberOf">1шт</div>
					<div class="card-price">{{$product[0]['price']}}&#8381; </div>
					<button class="btn-bucket del-cart" type="button" id="del_{{$product[0]['section_id']}}-{{$product[0]['product_id']}}"> </button>
				</div>
				@php $ordinal++ @endphp
				@endforeach




			</div>
		</div>
		<div class="bucket__final__sum">
			<div class="sum-title">
				Итоговая стоимость
			</div>
			<div class="sum-info">
				<div class="goods">
					Товары: {{ $res['total_count']}}
				</div>
				<div class="goods__price">
					<b> {{$res['total_price']}} &#8381; </b>
				</div>
			</div>
			<div class="sumbtn">
				<button type="button" class="sum-btn">Оформить заказ</button>
			</div>
		</div>
	</div>

	<div class="row__wraper row__wraper-2">

		<div class="bucket__helper">Остались вопросы? <br><span class="vk__span">Напишите нам <a href="#"> Вконтакте</a></span></div>
	</div>

</div>

@include ('footer')