	//wiki request
	
	$('#wikiBtnRun').on("click", function() {

		$.ajax({
			url: "libs/php/getWikiInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				cityName: $('#queryText2').val()
			},
			success: function(result) {



				console.log(result);

				if (result.status.name == "ok") {

					$('#clearChildren').children().html("");
					$('#clearChildren').children().attr("src", "");

					$('#responseInfo').html(result['data'][0]['summary'])
					$('#apiImage').attr("src", result['data'][0]['thumbnailImg'])
					$('#readMore').html("Read more at: ")
					$('#wikiLink').html("Read more").attr('href', "https://" + result['data'][0]['wikipediaUrl']);
					

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});



	//Post code request
	$('#postCodeBtnRun').on("click", function() {
	

		let postCodeVal = $('#queryText1').val().trim();

		$.ajax({
			url: "libs/php/getPostCodeInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postCode: postCodeVal
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#clearChildren').children().html("");
					$('#clearChildren').children().attr("src", "");

					$('#responseInfo').html("Country: " + result['data'][0]['adminName1'] + "<br/>County: " + 
					result['data'][0]['adminName2'] + "<br/>District: " + result['data'][0]['adminName3']) 

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});


	//Nearby wiki request
	$('#nearbyWikiBtn').on("click", function() {
	

		let postCodeVal = $('#queryText3').val().trim();

		$.ajax({
			url: "libs/php/getNearbyWiki.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postCode: postCodeVal
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#clearChildren').children().html("");
					$('#clearChildren').children().attr("src", "");
					
					$('#responseInfo').html( 
						result['data'][0]['title'] + 
						"<br/>" + 
						result['data'][0]['summary']);
							
					$('#wikiLink').html("Read more").attr('href', "https://" + result['data'][0]['wikipediaUrl']);

					
						
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});