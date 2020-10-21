@include ('header')

<div class="form__bg">
<form class="signin" id="signin-form">
	<label for="" class="signin__title">вход</label>
	<label for="" class="signin__label signin__email">Ваш Email</label>
	<input name="email" type="email" class="email__input">
	<label for="" class="signin__label signin__passw">Введите пароль</label>
	<input name="password" type="password" class="password__input">
	<div class="button__wraper"><button type="submit" class="btn signin__btn log__btn">Войти</button></div>
</form>

<div class="form_separator"></div>  
<form class="signup" id="signup-form">
	<label for="" class="signup__title">Регистрация</label>
	<label for="" class="signup__label">Фио</label>
	<input name="name" type="text" class="signup__input">
	<label for="" class="signup__label signup__email">Ваш Email</label>
	<input name="email" type="email" class="signup__input email__input">
	<label for="" class="signup__label signup__passw signup__passw1">Введите пароль</label>
	<input name="password" type="password" class="signup__input password__input">
	<label for="" class="signup__label signup__passw signup__passw2">Повторите пароль</label>
	<input name="password_rep" type="password" class="signup__input password-rep__input">
	<!--
	<div class="radio__wraper">
	<input type="radio" class="radio-btn">
	<label for="" class="personal-data">Я даю согласие на обработку персональных данных</label>
	</div> 
	-->
	<div class="button__wraper"><button type="submit" class="btn signin__btn reg__btn">Зарегестрироваться</button></div>
</form>
</div>

@include ('footer')