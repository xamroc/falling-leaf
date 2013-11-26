$(document).ready(function() {
	$("#leaf").animate({
		top: "200px",
		left: "400px"
	}, {
		duration: 1000,
		specialEasing: {top: "easeOutQuad", left: "easeInQuad"},
		complete: function() {
			$("#leaf").animate({
				top: "250px",
				left: "450px"	
			}, {
				duration: 200,
				specialEasing: {top: "easeInQuad", left: "easeOutQuad"},
				complete: function() {
					$("#leaf").animate({
						top: "400px",
						left: "50px"	
					}, {
						duration: 1000,
						specialEasing: {top: "easeOutQuad", left: "easeInQuad"},
						complete: function() {
							$("#leaf").animate({
								top: "450px",
								left: "0px"	
							}, {
							duration: 200,
							specialEasing: {top: "easeInQuad", left: "easeOutQuad"},
							complete: function() {
								$("#leaf").animate({
									top: "600px",
									left: "400px"	
								}, {
									duration: 1000,
									specialEasing: {top: "easeOutQuad", left: "easeInQuad"}
									});
								}
							});
						}
					});
				}
			});
		}
	});
});
