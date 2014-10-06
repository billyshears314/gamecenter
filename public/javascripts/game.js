$(function(){

	$('.space').click(function(e){
		e.preventDefault();
		console.log("BUTTON PRESSED");
		
		var id = $(this).attr('id');
		
		id = parseInt(id.substring(5));		
		
		var scope = angular.element($("#board")).scope();
 	
			scope.update(id);
 		//	$('#space'+id).prop('disabled', true);
 			$('#space'+id).off();
 			scope.flipPlayerTurn();
 			scope.isWinner();
	});
	
	
	$('#new_game_btn').click(function(){
	
		var scope = angular.element($("#board")).scope();	
	
		scope.resetGame();
	
	});

});