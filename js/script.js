//

//

//

$(document).ready(function () {
	$("#grad").change(function () {
		var grad = $(this).val();
		console.log(grad);

		$.ajax({
			method: "GET",
			url: "http://api.weatherapi.com/v1/current.json",
			data: {
				key: "4337f73aa1334df8bb7133720232812",
				q: grad,
				aqi: "no",
			},
			success: function (response) {},
		});
	});

	$("#dugme").click(function () {
		var grad = $("#grad").val();
		$.ajax({
			method: "GET",
			url: "http://api.weatherapi.com/v1/forecast.json",
			data: {
				key: "4337f73aa1334df8bb7133720232812",
				q: grad,
				days: 7,
				aqi: "yes",
				alerts: "no",
			},
			success: function (response) {
				console.log(response);
			},
		});
	});

	$("#dugme2").click(function () {
		var grad = $("#grad").val();
		$.ajax({
			method: "GET",
			url: "http://api.weatherapi.com/v1/history.json",
			data: {
				key: "4337f73aa1334df8bb7133720232812",
				q: grad,
				dt: "2020-01-01",
			},
			success: function (response) {
				console.log(response);
			},
		});
	});
	//
});
