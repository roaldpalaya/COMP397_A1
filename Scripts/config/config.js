/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.GAME = 1;
        Scene.SCENE2 = 2;
        Scene.SCENE3 = 3;
        Scene.SCENE4 = 4;
        Scene.SCENE5 = 5;
        Scene.SCENE6 = 6;
        Scene.SCENE7 = 7;
        Scene.SCENE8 = 8;
        Scene.SCENE9 = 9;
        Scene.SCENE10 = 10;
        Scene.SCENE11 = 11;
        Scene.SCENE12 = 12;
        Scene.SCENE13 = 13;
        Scene.SCENE14 = 14;
        Scene.SCENE15 = 15;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map