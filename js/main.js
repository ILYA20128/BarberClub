$(document).ready(() => {
	$(function () {
		$("#tabs").tabs();
	});

	$('#my-slick').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 579,
				settings: {
					arrows: false
				}

			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
		]
	});

	$('.barber-slick').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 579,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
		]
	});

	$('.btn_border_red').click(() => {
		$('#call').css('display', 'flex')
	})

	$('#call_close, #call').click((e) => {
		if (e.target.id === 'call' || e.target.id === 'call_close') {
			$('#call').hide()
		}
	});

	$('.form-barber').click(() => {
		$('#reservation-container').css('display', 'flex')
	});

	$('#reservation-close, #reservation-container').click((e) => {
		if (e.target.id === 'reservation-container' || e.target.id === 'reservation-close') {
			$('#reservation-container').hide()
		}
	});

	$('#reservation-btn').click(() => {
		let name = $('#name');
		let phone = $('#phone');
		let service = $('#service');
		let master = $('#master');
		let date = $('#date');
		let time = $('#time');

		let forName = $('#for-name');
		let forPhone = $('#for-phone');
		let forService = $('#for-service');
		let forMaster = $('#for-master');
		let forDate = $('#for-date');
		let forTime = $('#for-time');

		forName.addClass('hide');
		forPhone.addClass('hide');
		forService.addClass('hide');
		forMaster.addClass('hide');
		forDate.addClass('hide');
		forTime.addClass('hide');

		let error = false;

		if (!name.val()) {
			forName.removeClass('hide');
			name.css('border-color', 'red');

			error = true;
		} else {
			name.css('border-color', 'white');
		}

		if (!phone.val()) {
			forPhone.removeClass('hide');
			phone.css('border-color', 'red');

			error = true;
		} else {
			phone.css('border-color', 'white');
		}

		if (!service.val()) {
			forService.removeClass('hide');
			service.css('border-color', 'red');

			error = true;
		} else {
			service.css('border-color', 'white');
		}

		if (!master.val()) {
			forMaster.removeClass('hide');
			master.css('border-color', 'red');

			error = true;
		} else {
			master.css('border-color', 'white');
		}

		if (!date.val()) {
			forDate.removeClass('hide');
			date.css('border-color', 'red');

			error = true;
		} else {
			date.css('border-color', 'white');
		}

		if (!time.val()) {
			forTime.removeClass('hide');
			time.css('border-color', 'red');

			error = true;
		} else {
			time.css('border-color', 'white');
		}

		if (!error) {
			let loader = $('#loader');
			loader.css('display', 'flex');

			$.ajax({
				type: 'post',
				url: 'mail.php',
				data: 'name=' + name.val() + '&phone=' + phone.val() + '&service=' + service.val() + '&master=' + master.val() + '&date=' + date.val() + '&time=' + time.val(),
				success: () => {
					loader.hide();

					$('#reservation-sent').show();
					$('#reservation-content').hide();
				},
				error: () => {
					setTimeout(function () {
						loader.hide();

						$('#reservation-sent').show();
						$('#reservation-content').hide();
					}, 3000);

				}
			})
		}
	})

	$('#call_btn').click(() => {
		let clientName = $('#client_name');
		let forClientName = $('#for_client_name');
		let phoneNumber = $('#phone_number');
		let forPhoneNumber = $('#for_phone_number');

		forClientName.addClass('hide');
		forPhoneNumber.addClass('hide');

		let error = false;

		if (!clientName.val()) {
			forClientName.removeClass('hide');
			clientName.css('border-color', 'red');
			error = true;
		} else {
			clientName.css('border-color', 'white');
		}

		if (!phoneNumber.val()) {
			forPhoneNumber.removeClass('hide');
			phoneNumber.css('border-color', 'red');
			error = true;
		} else {
			phoneNumber.css('border-color', 'white');
		}

		if (!error) {
			let loader = $('#loader');
			loader.css('display', 'flex');

			$.ajax({
				type: 'post',
				url: 'call_mail.php',
				data: 'clientName=' + clientName.val() + 'phoneNumber=' + phoneNumber.val(),
				success: () => {
					loader.hide();

					$('#call_sent').css('display', 'flex');
					$('#call_content').hide();
				},
				error: () => {
					setTimeout(function () {
						loader.hide();

						$('#call_sent').css('display', 'flex');
						$('#add_block').hide();
					}, 3000);
				}
			})
		}
	})

	$('#chouse').click(() => {
		$('#header #header-menu').css('display', 'flex')
	})

	$('#close').click(() => {
		$('#header #header-menu').css('display', 'none')
	})

	$('#discount-content .btn_red').click(() => {
		$('#discount-pop-ap').css('display', 'flex')
	})

	$('#pop-ap-close, #discount-pop-ap').click((e) => {
		if (e.target.id === 'discount-pop-ap' || e.target.id === 'pop-ap-close') {
			$('#discount-pop-ap').hide()
		}
	});
});