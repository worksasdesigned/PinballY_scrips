// ############################################## AWI Random Game ################################################
// Choose a random table from current selection 
// AWI 2021

// in the main menu, add "Start random Game" after the
// Play command
let RandomGameCommand = command.allocate("RandomGameStart");
mainWindow.on("menuopen", ev => {
    if (ev.id == "main") {
        // main menu add item
        ev.addMenuItem({ after: command.PlayGame },
			//	{ title: "Start Random Table", cmd: RandomGameCommand }); 
                { title: "Start Random Game", cmd: RandomGameCommand }); //<-- Change title if you like
        
    }
});

mainWindow.on("command", ev => {
	// Random start found
	if (ev.id == RandomGameCommand) {
      //get all the currently shown tables/games 		
	  let games = gameList.getAllWheelGames(); 
      // how many found? 
      let game_count = games.length; 
      //lets pick one
	  var choosenGame = Math.floor(Math.random() * (game_count + 1));
      //start choosen game  
	  mainWindow.playGame(games[choosenGame]);
	}

});	