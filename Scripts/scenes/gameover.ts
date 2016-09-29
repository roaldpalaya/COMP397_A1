/*
Game over scene
 */

module scenes {
    export class Gameover extends objects.Scene{

        private _bg:createjs.Bitmap;
        //CONSTRUCTOR
        constructor(){
            super();
        }

        //Run when the scene is started
        public start() :void{
            this._bg= new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            stage.addChild(this);
        }

        //Run on every tick
        public update():void{

        }
    }
}