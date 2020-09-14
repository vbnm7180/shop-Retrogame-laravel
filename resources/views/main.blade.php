@include ('header')

<main class="main">
	<section class="main__slider" id="slider">

		<div class="stock" id="stock">
			<div class="stock__item">
				<img src="/images/slide_1.png" alt="slide" class="slider__image">
			</div>
			<div class="stock__item">
				<img src="/images/slide_2.png" alt="slide" class="slider__image2">
			</div>
		</div>
	</section>
	<div class="slider__controls">
		<button id="prev" class="stock__arrow stock__arrow-left"><img src="/images/arrow_left.png" alt="arrow" class="arrow" style="width: 30px; height: 12px"></button>
		<button id="next" class="stock__arrow stock__arrow-right"><img src="/images/arrow_right.png" alt="arrow" class="arrow" style="width: 30px; height: 12px"></button>
	</div>
</main>
<div class="background__figures">

	<div class="popup">
		<div class="popup__body">
			<div class="popup__content">
				<button type="button" class="popup__close"><img src="/images/popup/popup_close.png" alt="quit" class="popup__close-img"></button>
				<div class="popup__cards"></div>
			</div>
		</div>

	</div>





	<section class="console">
		<div class="container__console">
			<div class="head__console">
				<hr class="line line-left line-console">
				<h1>игровые консоли</h1>
				<hr class="line line-right line-console">
			</div>

			<div class="consoleWraper">
				<div class="console__title" id="sega">
					<svg class="sega__icon" width="181" height="57" viewBox="0 0 181 57" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.371582 56.4017L24.2319 56.377C33.9939 56.377 41.9052 48.3216 41.9052 38.396C41.9052 28.4509 33.9939 20.3949 24.2319 20.3949L18.0353 20.4293C17.5469 20.4293 17.1509 20.0203 17.1509 19.517C17.1509 19.0137 17.5469 18.604 18.0353 18.604L41.8523 18.6092L41.8619 10.9778H18.0302C13.4226 10.9778 9.67392 14.8007 9.67392 19.4975C9.67392 24.1989 13.422 28.0068 18.0302 28.0068L24.2561 28.0907C29.8492 28.0907 34.3753 32.6978 34.3753 38.3817C34.3753 44.0695 29.8499 48.687 24.2561 48.687H0.381132L0.371582 56.4017Z" fill="#0060A8" />
						<path d="M0.380917 46.8956H24.2559C28.8781 46.8956 32.6166 43.0877 32.6166 38.3811C32.6166 33.6797 28.8781 29.8763 24.2559 29.8763L18.03 29.8074C12.4464 29.8074 7.91587 25.1951 7.91587 19.4969C7.91587 13.8143 12.4464 9.20132 18.03 9.20132L41.8617 9.19612L41.8521 1.5354H18.035C8.28322 1.5354 0.361816 9.58172 0.361816 19.517C0.361816 29.4524 8.28322 37.5032 18.035 37.5032L24.198 37.513C24.6666 37.513 25.0626 37.9032 25.0626 38.396C25.0626 38.8798 24.6666 39.2693 24.198 39.2693L0.371367 39.2889L0.380917 46.8956ZM60.4039 48.7358C56.2643 48.7358 52.8735 45.3662 52.8735 41.0641V16.7196C52.8735 12.5807 56.2643 9.17661 60.4039 9.17661L85.8725 9.18116V1.5354H60.4039C52.1158 1.5354 45.4022 8.36768 45.4022 16.8035V41.0647C45.4022 49.5012 52.1158 56.3432 60.4039 56.3432L85.7662 56.3536L85.7611 48.7267L60.4039 48.7358Z" fill="#0060A8" />
						<path d="M54.6995 16.8035C54.6995 13.5776 57.2404 10.9629 60.404 10.9629H85.8726V18.619H63.9299C62.172 18.619 62.1479 20.4001 62.1479 20.4001H80.4539V28.0218H54.6906L54.6995 16.8035ZM60.404 46.8813C57.25 46.8813 54.6899 44.2816 54.6899 41.0647V29.8367H80.4533V37.474H62.1472C62.1714 39.2693 63.9292 39.2785 63.9292 39.2785H85.7656L85.7605 46.8709L60.404 46.8813ZM103.72 48.7163C99.5953 48.7163 96.2242 45.283 96.2242 41.0641V16.8029C96.2242 12.5801 99.5711 9.17596 103.701 9.17596H128.368V1.5354H103.643C95.3589 1.5354 88.6453 8.36768 88.6453 16.8035V41.0647C88.6453 49.5012 95.4169 56.3432 103.701 56.3432L128.368 56.3536V20.4001H107.169V28.0218H120.877V48.7163H103.72Z" fill="#0060A8" />
						<path d="M97.982 41.064C97.982 44.2964 100.542 46.9254 103.701 46.9254H119.108V29.8268H107.188V37.4739H111.612L111.626 39.2692H107.221C106.26 39.2692 105.473 38.4558 105.473 37.4739L105.434 20.3948C105.434 20.3948 105.428 18.6189 107.202 18.5747H128.376L128.367 10.9576L103.699 10.9628C102.183 10.9628 100.728 11.5781 99.6556 12.6734C98.5832 13.7688 97.9807 15.2544 97.9807 16.8034V41.064H97.982ZM151.547 10.849C151.715 10.3612 152.026 9.93857 152.439 9.63956C152.852 9.34055 153.345 9.17993 153.851 9.17993C154.357 9.17993 154.851 9.34055 155.263 9.63956C155.676 9.93857 155.988 10.3612 156.155 10.849L168.129 46.9794H150.595L150.615 38.4798H156.474L153.836 30.4732L145.244 56.347H136.405L151.547 10.849Z" fill="#0060A8" />
						<path d="M170.543 48.7163H150.624V56.3471H180.937L165.172 8.70775C163.791 4.061 159.237 0.642578 153.845 0.642578C148.446 0.642578 143.906 4.04604 142.514 8.6889L126.604 56.3478H134.54L149.987 10.0206C150.303 9.24555 150.837 8.58353 151.522 8.11816C152.206 7.6528 153.01 7.40496 153.832 7.40593C154.653 7.40716 155.455 7.65472 156.14 8.11784C156.824 8.58095 157.36 9.23923 157.681 10.0109L170.543 48.7163Z" fill="#0060A8" />
					</svg>
				</div>
				<div class="conosle__card">
					<div class="card__item" id="sega__saturn">
						<div class="img__container">
							<img src="/images/consoles/sega_saturn.png" alt="" class="console__img">
						</div>
						<h4>sega saturn</h4>
						<p class="console__card__text">Игровая приставка с разрядностью 32 бита. Она была выпущена 22 ноября 1994 года в Японии, в мае в США и 8 июля 1995 года в Европе</p>
						<div class="console__card__footer">
							<p class="console__card__text">Цена <span class="price">от 9.000 ₽</span></p>
							<button type="button" class="btn card__btn" id="1-1">Выбрать</button>
						</div>
					</div>
					<div class="card__item">
						<div class="img__container sega-megadrive">
							<img src="/images/consoles/sega_mega_drive.png" alt="" class="console__img">
						</div>
						<h4>sega mega drive</h4>
						<p class="console__card__text">Игровая приставка четвёртого поколения, разработанная и выпускавшаяся компанией Sega. Приставка была выпущена в 1988.</p>
						<div class="console__card__footer">
							<p class="console__card__text">Цена <span class="price">от 2.599 ₽</span></p>
							<button type="button" class="btn card__btn" id="1-2">Выбрать</button>
						</div>
					</div>
					<div class="card__item">
						<div class="img__container">
							<img src="/images/consoles/sega_dreamcast.png" alt="" class="console__img">
						</div>
						<h4>sega dreamcast</h4>
						<p class="console__card__text">И последняя игровая приставка компании Sega, наследник Sega Saturn. Приставка была выпущенав Японии в ноябре 1998г</p>
						<div class="console__card__footer">
							<p class="console__card__text">Цена <span class="price">от 5.999 ₽</span></p>
							<button type="button" class="btn card__btn" id="1-3">Выбрать</button>
						</div>
					</div>
				</div>
			</div>
			<div class="console__title title-nintendo" id="nintendo">
				<svg width="232" height="58" viewBox="0 0 232 58" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3444 57.1522C12.1539 57.1472 0 44.258 0 28.6282C0 12.9972 12.1849 -0.0408261 30.3183 9.60697e-05H201.682C219.815 -0.0408261 232 12.9972 232 28.6282C232 44.258 219.844 57.1472 201.652 57.1522H30.3444Z" fill="#CC2131" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M30.4015 7.03247C16.0006 7.05727 7.15894 16.6839 7.15894 28.5898C7.15894 40.4944 15.9436 50.1967 30.4015 50.1433H201.595C216.052 50.1967 224.841 40.4944 224.841 28.5898C224.841 16.6839 215.998 7.05851 201.595 7.03247H30.4015Z" fill="white" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0169 15.0755H31.3948L42.9956 33.8353L42.9894 15.0755H51.304V41.9825H43.0005L31.3415 23.2215V41.9825H23.0132L23.0169 15.0755ZM96.5255 17.8458H104.623V21.4656H109.004V24.123H104.623L104.628 41.9825H96.5255L96.5292 24.123H92.1319V21.4681H96.5317L96.5255 17.8458ZM55.9369 24.0908H64.0283V41.9825H55.9369V24.0908ZM55.9195 15.0706H64.0283V20.5715H55.9195V15.0706ZM200.969 32.8928C200.969 32.8928 200.964 35.5937 200.964 36.6812C200.964 39.5321 199.281 40.7114 197.655 40.7114C196.037 40.7114 194.342 39.5321 194.342 36.6812C194.342 35.5937 194.347 32.8258 194.347 32.8258C194.347 32.8258 194.354 30.1808 194.354 29.0932C194.354 26.2535 196.042 25.0853 197.655 25.0853C199.269 25.0853 200.964 26.2535 200.964 29.0932C200.964 30.1808 200.964 32.1835 200.969 32.9052V32.8928ZM197.718 22.8681C191.191 22.8681 185.899 27.3671 185.899 32.9176C185.899 38.4644 191.192 42.9621 197.718 42.9621C204.254 42.9621 209.545 38.4644 209.545 32.9176C209.545 27.3671 204.254 22.8681 197.718 22.8681ZM175.277 15.0755H183.262V41.9775H175.265L175.26 40.9483C172.167 42.8902 168.667 42.8853 165.944 41.6192C165.215 41.2781 160.41 38.9716 160.41 32.7502C160.41 28.0231 164.869 22.8681 170.696 23.379C172.617 23.5501 173.98 24.2495 175.276 24.975L175.277 15.0755ZM175.335 32.9461V29.7492C175.335 26.9814 173.427 26.277 172.167 26.277C170.876 26.277 168.991 26.9814 168.991 29.7492C168.991 30.6619 168.996 32.9387 168.996 32.9387C168.996 32.9387 168.991 35.1646 168.991 36.1182C168.991 38.8836 170.876 39.6053 172.167 39.6053C173.427 39.6053 175.335 38.8836 175.335 36.1182V32.9461ZM82.9678 23.2637C85.9911 23.1806 92.1319 25.161 92.0873 32.2467C92.0786 33.5017 92.0848 41.9788 92.0848 41.9788H84.0467V30.2291C84.0467 28.6679 82.5549 26.933 80.3525 26.933C78.1465 26.933 76.5096 28.6679 76.5096 30.2291L76.5182 41.9788H68.4839L68.4777 24.0883L76.517 24.0821C76.517 24.0821 76.5083 25.5231 76.517 25.9621C78.2603 24.2969 80.5581 23.3357 82.9678 23.2637ZM148.725 23.2637C151.743 23.1806 157.883 25.161 157.844 32.2467C157.832 33.5017 157.837 41.9788 157.837 41.9788H149.799V30.2291C149.799 28.6679 148.309 26.933 146.104 26.933C143.9 26.933 142.258 28.6679 142.258 30.2291L142.27 41.9788H134.238L134.243 24.0883L142.27 24.0821C142.27 24.0821 142.258 25.5231 142.27 25.9621C144.014 24.2958 146.314 23.3345 148.725 23.2637ZM116.543 30.3259C116.528 28.7609 116.56 27.7143 117.073 26.814C117.711 25.7128 118.873 25.1883 119.924 25.1833H119.919C120.978 25.1883 122.133 25.7128 122.765 26.814C123.279 27.713 123.308 28.7609 123.296 30.3259H116.543ZM123.261 35.7226C123.261 35.7226 123.269 35.802 123.269 36.8102C123.269 40.0827 121.116 40.8119 119.924 40.8119C118.728 40.8119 116.536 40.0827 116.536 36.8102C116.536 35.8268 116.549 33.1148 116.549 33.1148C116.549 33.1148 131.785 33.1197 131.785 33.1148C131.785 27.5642 126.431 22.9673 119.85 22.9673C113.273 22.9673 107.937 27.4663 107.937 33.0106C107.937 38.5624 113.273 43.0613 119.85 43.0613C125.309 43.0613 129.918 39.9438 131.33 35.7152L123.261 35.7226ZM210.108 21.478H209.175V15.3508H211.513C212.956 15.3508 213.676 15.8853 213.676 17.0919C213.676 18.1868 212.987 18.6643 212.085 18.7796L213.826 21.478H212.789L211.171 18.8205H210.108V21.478ZM211.217 18.0331C212.004 18.0331 212.701 17.9785 212.701 17.0361C212.701 16.2784 212.013 16.1358 211.372 16.1358H210.107V18.0331H211.217Z" fill="#CC2131" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M205.832 18.3978C205.832 15.3497 208.307 13.1014 211.229 13.1014C214.126 13.1014 216.594 15.3509 216.594 18.3978C216.594 21.4769 214.126 23.7239 211.229 23.7239C208.307 23.7239 205.832 21.4781 205.832 18.3978ZM211.229 22.8385C213.634 22.8385 215.526 20.956 215.526 18.3978C215.526 15.8854 213.635 13.9856 211.229 13.9856C208.8 13.9856 206.904 15.8854 206.904 18.3978C206.904 20.9573 208.8 22.8385 211.229 22.8385Z" fill="#CC2131" />
				</svg>

			</div>
			<div class="conosle__card conosle__card-nintendo">
				<div class="card__item">
					<div class="img__container">
						<img src="/images/consoles/nintendo_nes.png" alt="" class="console__img">
					</div>
					<h4>nintendo nes</h4>
					<p class="console__card__text">Nintendo Entertainment System (NES) это 8-битная домашняя игровая консоль третьего поколения, производимая Nintendo</p>
					<div class="console__card__footer">
						<p class="console__card__text">Цена <span class="price">от 4.999 ₽</span></p>
						<button type="button" class="btn card__btn" id="1-4">Выбрать</button>
					</div>
				</div>
				<div class="card__item">
					<div class="img__container">
						<img src="/images/consoles/nintendo_snes.png" alt="" class="console__img">
					</div>
					<h4>nintendo snes</h4>
					<p class="console__card__text">16-разрядная игровая приставка, выпущенная компанией Nintendo в США, стала второй домашней консолью Nintendo вслед за NES </p>
					<div class="console__card__footer">
						<p class="console__card__text">Цена <span class="price">от 4.599 ₽</span></p>
						<button type="button" class="btn card__btn" id="1-5">Выбрать</button>
					</div>
				</div>

				<div class="card__item">
					<div class="img__container">
						<img src="/images/consoles/nintendo_64.png" alt="" class="console__img">
					</div>
					<h4>nintendo 64</h4>
					<p class="console__card__text">64-разрядная игровая приставка пятого поколения. Nintendo совместно с Silicon Graphics. Была выпущена в 1996 году 23 июня.</p>
					<div class="console__card__footer">
						<p class="console__card__text">Цена <span class="price">от 4.999 ₽</span></p>
						<button type="button" class="btn card__btn" id="1-6">Выбрать</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="games">
		<div class="game__section" id="games">
			<hr class="line line-left line-game">
			<h1>игры</h1>
			<hr class="line line-right line-game">
		</div>
		<div class="nav__wraper">
			<div class="navigation">
				<div class="sega__section">
					<h2 class="console-heading">sega</h2>

				</div>
				<div class="separator"></div>
				<div class="nintendo__section">
					<h2 class="console-heading">nintendo</h2>
				</div>

			</div>
			<div class="tabs">
				<div class="tabs__nav">
					<div class="separator2">
						<button class="btn game-btn" id="2-7">sega saturn</button>
						<button class="btn game-btn" id="2-8">sega mega drive</button>
						<button class="btn game-btn" id="2-9"> sega dreamcast</button>
					</div>
					<div class="separator2 ">
						<button class="btn game-btn" id="2-10">nintendo nes</button>
						<button class="btn game-btn" id="2-11">nintendo snes</button>
						<button class="btn game-btn" id="2-12"> nintendo 64</button>
					</div>
				</div>
				<div class="tabs__sale">любая игра 299 &#8381; </div>
				<div class="tabs__content">
				    @foreach ($res as $val)
					@include('gamesCard',$val)
					@endforeach


				</div>
			</div>
	</section>

	<div class="head__about" id="about">
		<hr class="line line-left line-about">
		<h1>О нас</h1>
		<hr class="line line-right line-about">
	</div>
	<div class="about__main">
		<div class="about__text">
			<div class="text-inside">
				<h3>Добро пожаловать на сайт «Retro Game»</h3>
				<p class="about__text-p">Все из нас помнят то непередаваемое чувство, когда родители дарят в детстве первую игровую приставку. Холодок по телу пробегающий от заставки «SEGA» на экране телевизора, от 8ми битной музыки в культовых играх минувших дней.
				</p>
				<p class="about__text-p"> Наш магазин «Retro Game» готов подарить вам чувство теплоты и ностальгии с приставками и играми из нашего прошлого, а так же познакомит новое поколение с азартом, который мы ощущали и испытывали, когда-то давно в далеком детстве
				</p>
			</div>
		</div>
		<div class="about__picture">
			<img src="/images/about_bg.png" alt="" class="about__img">
		</div>

	</div>
	<div class="about__button">
		<a href="#header" class="about__button__link smooth__link"><span class="about__button-div">
				<svg class="about__arrow" width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 11L10.5 3L19 11" stroke="#323232" stroke-width="3" />
				</svg>
				<p class="about__button-text">На главную</p>
			</span></a>
	</div>
</div>

@include ('footer')