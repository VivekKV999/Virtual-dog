class Form {

  constructor() {
    //this.input = createInput("Name");
    this.add = createButton('add');
    this.feed = createButton('feed');
    this.doghappy= loadImage("images/happy dog.png")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("VIRTUAL_PET");
    title.position(130, 0);

    this.input.position(130, 160);
    this.add.position(250, 200);
    this.feed.position(250, 200);

    this.feed.mousePressed(()=>{
      dog.addImage(this.doghappy)
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
