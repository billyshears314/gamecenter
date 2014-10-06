function boardController($scope) {

 $scope.space= []; 
 $scope.playerturn = 1; 
 
 var space = $scope.space;
 
 space[0] = {"value": -1, "str": " "};
 space[1] = {"value": -1, "str": " "};
 space[2] = {"value": -1, "str": " "};
 space[3] = {"value": -1, "str": " "};
 space[4] = {"value": -1, "str": " "};
 space[5] = {"value": -1, "str": " "};
 space[6] = {"value": -1, "str": " "};
 space[7] = {"value": -1, "str": " "};
 space[8] = {"value": -1, "str": " "};

	$scope.update = function(index){

				if($scope.playerturn===1){
					$scope.space[index].value = 1;
					$scope.space[index].str = "X";
				}
				else{
					$scope.space[index].value = 0;
					$scope.space[index].str = "O";
				}				
	
		}
		
	$scope.flipPlayerTurn = function(){
		$scope.$apply(function () {
			if($scope.playerturn===1){
				$scope.playerturn = 2;
			}
			else{
				$scope.playerturn = 1;			
			}
		});
	}
	
	$scope.isWinner = function(){

		if(isWinner($scope.space)===1){
			alert("Player 1 won!");
		}
		else if(isWinner($scope.space)===0){
			alert("Player 2 won!");	
		}
		else if(noMovesLeft($scope.space)===true){
			alert('No Winner - Tie Game');	
		}
    
 	}

 	$scope.resetGame = function(){
 	
 		$scope.$apply(function () {

			for(var i=0; i<$scope.space.length; i++){
		
				$scope.space[i].value = -1;
				$scope.space[i].str = " ";			
				
			}
		
			 $scope.playerturn = 1; 
			
		});
		
		for(var i=0; i<9; i++){
			
		}
 	
 	}
 	
}

function noMovesLeft(space){

	for(var i=0; i<space.length; i++){

		if(space[i].value===-1){
			return false;
		}
	
	}
	
	return true;

}

function isWinner(space){
	
	var solutions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6];
	
	for(var i=0; i<2; i++){
		
		for(var j=0; j<8; j++){

			if((space[solutions[j*3]].value===i)&&(space[solutions[j*3+1]].value===i)&&(space[solutions[j*3+2]].value===i)){
				return i;	
			}
		
		}

	}
	
	
	return -1;

}