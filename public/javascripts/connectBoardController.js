function connectBoardController($scope) {

 $scope.space= []; 
 $scope.playerturn = 1; 
 
 var space = $scope.space;
 
	$scope.init = function(){
			
		for(var i=0; i<6; i++){
			
			for(var j=0; j<7; j++){
			
				space[i*7+j] = {};				
				
				space[i*7+j].x=j;
				space[i*7+j].y=i;
		
				space[i*7+j].value = -1;
			}

		}
		
	}
	
		 
 $scope.init();
	
	$scope.update = function(index){
	
	console.log("update");	
	
		if($scope.playerturn === 1){
			space[index].value = 1;
			$('#space'+index).css('background-color', '#00FF00');
		}
		else{
			space[index].value = 2;
			$('#space'+index).css('background-color', '#000000');
		}
	
	}


}

