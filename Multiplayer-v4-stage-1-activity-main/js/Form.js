class Form {
  constructor() {
    this.input=createInput("").attribute("placefolder","Enter Your Name peekaboo")
this.playButton=createButton("START the TERROR")
this.titleimage=createImg("assets/title.png","Game title")
this.greeting=createElement("h2")

  }
setElementsPosition(){
 this.input.position(width/2-110,height/2-80);
  this.titleimage.position(120,100);
  this.playButton.position(width/2-90,height/2-20);
  this.greeting.position(width/2-300,height/2-100);
}
hide()
{
  this.greeting.hide()
  this.playButton.hide()
  this.input.hide()
}
handleMousePressed(){
  this.playbutton(()=>{
    this.input.hide()
    this.playButton.hide()
    var message = `hello its a  terror horror game${this.input.value()}wait for another player to join`
    this.greeting.html(message)
  }
  )

}
display(){
  this.setElementsPosition()
  this.handleMousePressed()

}
}

//waiting........to know when mam you went to paris?background........