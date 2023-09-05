class Player implements Entity, InputListener, Renderable {
  x: number;
  y: number;
  speed: number = 10;

  input(event: InputEvent) {
    if (event.type == "keyDown") {
      if (event.key == "ArrowUp") {
        this.y -= this.speed;
      }
      if (event.key == "ArrowDown") {
        this.y += this.speed;
      }
      if (event.key == "ArrowLeft") {
        this.x -= this.speed;
      }
      if (event.key == "ArrowRight") {
        this.x += this.speed;
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 50, 50);
  }
}
