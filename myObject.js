function NflTeam(n,w,l){
  this.name = n;
  this.wins = w;
  this.losses = l;
  this.makeplayoffs = function(){
    if(this.wins >= 11){
      return "made playoffs"
    }
    else if(this.wins < 11){
      return "did not make playoffs"
    }
  };
  this.record = function(){
    return this.wins + "-" + this.losses
  };
}

function main(){
  let ChicagoBears = new NflTeam("Chicago Bears", 5, 11);
  console.log(ChicagoBears.makeplayoffs());
  console.log(ChicagoBears.record());
}

main();
