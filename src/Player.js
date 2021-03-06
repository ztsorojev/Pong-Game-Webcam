import { Vec, Rect } from './Rect';

export default class Player extends Rect
{
    constructor()
    {
        super(10, 80);
        this.vel = new Vec();
        this.score = 0;

        this._lastPos = new Vec();
    }

    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }

    renderPlayer1(context) 
    {
        context.fillStyle = "#23e2f2";
		context.fillRect(this.left, this.top, this.size.x, this.size.y);
    }
	
	renderPlayer2(context) 
    {
        context.fillStyle = '#e62244';
		context.fillRect(this.left, this.top, this.size.x, this.size.y);
    }
}