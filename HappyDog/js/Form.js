class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play')
    this.greeting = createElement('h3');
    this.buttoon = createButton('Feed');
    this.tips = createElement('h3');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("परम तमाशा लड़ाई");
    title.position(100, 0);
    
    this.input.position(130, 160);
    this.button.position(255, 160);
    this.buttoon.position(350,20);

    this.tips.html("खाना खिलाने के लिए कुत्ते को बुलाओ");
    this.tips.position(75,50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Welcome to the lobby  " + player.name )
      this.greeting.position(130, 160)
    });

    this.buttoon.mousePressed(()=>{
      count = count+2;
      foodslab = foodslab - 1
      var doogy = createSprite(300,300,20,20);
      doogy.addImage(happy);
      doogy.scale = 0.2
        database.ref("/").update({
            milkCount: count
        })
    
    })
  }
};
