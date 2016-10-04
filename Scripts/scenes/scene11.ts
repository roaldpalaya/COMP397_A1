module scenes {
    export class Scene11 extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg:createjs.Bitmap;
        private _resetButton : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Scene 11 started");

            //BG
            this._bg=new createjs.Bitmap(assets.getResult("Screen11"));
            this.addChild(this._bg);
            //Create button for main scene
            this._resetButton=new objects.Button("Back",config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._resetButton);
            this._resetButton.on("click",this._onBackButtonClick, this);
           
            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onBackButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }

       
    }
}