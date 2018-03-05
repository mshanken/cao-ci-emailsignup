$(function () {
	$("#CI_subscribeForm").validate({
		ignore: '.ignore',
		rules: {
			CI_email:{email:true},
			hiddenRecaptcha: {
                required: function () {
                	// $('#CI_submit').removeAttribute('disabled');
                	if (grecaptcha.getResponse() == '') {
                    	return true;
                    } else {
                    	return false;
                    }
                }
            }
		},
		validClass: "success",
		errorClass: "error",
		errorElement:"em",
		submitHandler: function(form) { form.submit(); },
		success: function(label, element){
			// console.log( "test2: ", label, element );
			var _this = $(element).parent();
			if( $(_this).hasClass("has-error") ){
				$(_this).removeClass("has-error").addClass("has-success");
				$(_this).find("span.glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
				$(_this).find("span.sr-only").attr("id", "inputSuccess2Status").text("(success)");
			}	
		},
		invalidHandler: function(event, validator){
			// console.log("test:", validator, event, validator.invalid);
			$.each( validator.invalid, function( key, value ) {
				// console.log( key + ": " + value );
				var _this = $("#"+key).parent();
				$(_this).addClass("has-success");
				$(_this).addClass("has-error has-feedback");
				$(_this).find(".form-control-feedback").css("display","block");
			});
		}
	});

	var workWithThisFormIfExist2 = $("form[method='post']").length;

	// Tracking link source
	if(workWithThisFormIfExist2){
		var url = window.location.search,
			tmp = url.substring(url.indexOf('source=')+7, url.length);
		// console.log(url.indexOf('email='));
		if ( url.indexOf('source=') !== -1 ){
			// console.log(1);
			$("#CI_custom5").val(tmp);
		}
	}

});