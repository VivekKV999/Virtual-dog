var dog,sadDog,happyDog;
var Feedtime
var Lastfeed

function preload(){
  sadDog=loadImage("Dog.png");
 happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

  foodobject=new Food()
  //foodfee=new Form()

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var dof = database.ref('Food');
  dof.on("value", function(data){
    food = data.val();
    foodobject.updateFoodStock(food)
  });
  feed = createButton("FEED MILK")
  feed.position(600,100)
  feed.mousePressed(FeedDog)

  add = createButton("ADD FOOD")
  add.position(400,100)
  add.mousePressed(AddFood)

}

function draw() {
  background(46,139,87);

  
  drawSprites();
  foodobject.display()

  var fedtime=database.ref('Time')
  fedtime.on("value",function(data){ Lastfeed=data.val(); });

  
 
}
function AddFood(){
  dog.x=800;
    dog.y=200;
  dog.addImage(sadDog)

  food++
  if(food<=20){
  database.ref('/').update({
    
    Food:food
  })}}
  function FeedDog(){
    dog.x=450;
    dog.y=250;

  dog.addImage(happyDog)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),

   
  })
  
}


//function to read food Stock

//function to update food stock and last fed time


//function to add food in stock
async function gettime(){
  /*var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response)
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  //var tt = database.ref('Time');
  //tt.on("value", function(data){
  //  tt = data.val();})
 // Time.update()
  
 // if (FeedDog.mousePressed ){
   // tt.update(hour)
  ////}
}
  //backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
*/
var x = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

var tt = await x.json();


var datetime = tt.datetime;

var hour = datetime.slice(11,13);
console.log(hour)
 
}