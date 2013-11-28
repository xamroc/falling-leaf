/* A leaf animation that descends slowly and tries to mimic natural falling motion.

*/

$(document).ready(function() {
	$("#leaf").animate({
		top: "+=150",
		left: "+=100"
	}, {
		duration: 600,
		specialEasing: {top: "easeOutQuad", left: "easeInQuad"},
		complete: function() {
			$("#leaf").animate({
				top: "+=50px",
				left: "+=50px"	
			}, {
				duration: 400,
				specialEasing: {top: "easeInQuad", left: "easeOutQuad"},
				complete: function() {
					$("#leaf").animate({
						top: "+=150px",
						left: "-=400px"	
					}, {
						duration: 1800,
						specialEasing: {top: "easeOutQuad", left: "easeInQuad"},
						complete: function() {
							$("#leaf").animate({
								top: "+=50px",
								left: "-=50px"	
							}, {
								duration: 600,
								specialEasing: {top: "easeInQuad", left: "easeOutQuad"},
								complete: function() {
									$("#leaf").animate({
										top: "+=100px",
										left: "+=150px"	
									}, {
										duration: 1000,
										specialEasing: {top: "easeOutQuad", left: "easeInQuad"},
										complete: function() {
											$("#leaf").animate({
												top: "+=50px",
												left: "+=50px"	
											}, {
												duration: 1000,
												specialEasing: {top: "easeInQuad", left: "easeOutQuad"}	
											});
										}
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
