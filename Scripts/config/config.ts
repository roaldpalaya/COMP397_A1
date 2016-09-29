/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAME : number = 1;
        public static SCENE2 :number=2;
        public static SCENE3 :number=3;
        public static SCENE4 :number=4;
        public static SCENE5 :number=5;
        public static SCENE6 :number=6;
        public static SCENE7 :number=7;
        public static SCENE8 :number=8;
        public static SCENE9 :number=9;
        public static SCENE10 :number=10;
        public static SCENE11 :number=11;
        public static SCENE12 :number=12;
        public static SCENE13 :number=13;
        public static SCENE14 :number=14;
        public static SCENE15 :number=15;
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}