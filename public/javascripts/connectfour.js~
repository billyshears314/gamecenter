$(function(){

	$('.space').click(function(){

		var id = $(this).attr('id');
		
		id = parseInt(id.substring(5));		
		
		var scope = angular.element($("#board2")).scope();

		update(scope, id);
	});



	function update(scope, index){
		
		console.log("TEST");
	
		scope.$apply(function () {
		
			if($scope.playerturn === 1){
				space[index].value = 1;
				$('#space'+index).css('background-color', '#00FF00');
			}
			else{
				space[index].value = 2;
				$('#space'+index).css('background-color', '#000000');
			}	
			
		});
	
	}

});