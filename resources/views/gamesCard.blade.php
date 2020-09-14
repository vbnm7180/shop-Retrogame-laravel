<div class="game__card">
	<div class="game__img">
		<img src="/images/games/$image" alt="" class="game-img">
	</div>
	<div class="game__title">
		{{$val['name'];}}
	</div>
	<button class="btn game-btn-buy add-cart $add_btn_display" id="add_{{$val['$section_id']}}-{{$val['$product_id']}}">В корзину</button>
	<!--<button class="btn game-btn-buy go-cart $go_btn_display" id="add_$section_id-$product_id">Перейти в корзину</button>-->
</div>