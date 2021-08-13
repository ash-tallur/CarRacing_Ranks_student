class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //let us assign another property for the player class called rank
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
      //let us update rank to the database
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  //write a function called getFinishedPlayers() 
  //which will go the db and fetch information about the finished players






  //lets create a static updatefinishedplayers function which basically 
  //updates the database about the list of finished players
  
}
