$(document).ready(function(){

	listArticles();
});

//Client side API call using AJAX
function listArticles(){
	
	$.ajax({
		url: "../WekaInsightAPI/rest/articles/result/",
		type: 'GET',
		dataType : "json",
        contentType: "application/json",
	}).fail(function(response) {
		console.log(JSON.stringify(response));

    }).done(function(response){

    	$.each(response, function(key, value) {
    		
    //		var lstResults = "<tr><td>"+value.testID+"</td><td>"+value.userID+"</td><td>"+value.testTitle+"</td><td>"+value.testResult+"</td></tr>";
    		var lstResults = "<tr><td>"+value.testResult+"</td></tr>";
       		
    		

	
    		document.getElementById('postBody').innerHTML += lstResults;
    	});
	});
}	

function getResult(){
	var testTitle = $("#testTitle").val();
//	var categoryID = $("#categoryID").val();
//	var userID = $("#userID").val();
	var testResult = $("#testResult").val();
	
//	var parms = { testTitle:testTitle, categoryID:categoryID, userID:userID, testResult:testResult}
	var parms = { testTitle:testTitle, testResult:testResult}
	var result = ClassifyInstance.getTestResult;
	$.ajax({
		url: "../WekaInsightAPI/rest/articles/result/",
		type: 'GET',
		dataType : "json",
        contentType: "application/json",
        data: JSON.stringify(result)
	}).fail(function(response) {
		console.log(JSON.stringify(response));

    }).done(function(response){

    	alert(response.message);
	});
}