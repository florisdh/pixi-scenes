"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
/**
 * Base scene class which should be extended and used to your own likings.
 */
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.app = null;
        _this.scenes = null;
        _this.hasRun = false;
        return _this;
    }
    /**
     * Called directly after this Scene is added to a SceneManager.
     * You should create all of your elements for this scene here.
     */
    Scene.prototype.init = function () { };
    /**
     * Called after this Scene is started from the SceneManager.
     * This means that this Scene is now the active scene in the SceneManager and will be rendered.
     */
    Scene.prototype.start = function () { };
    /**
     * Called after this Scene is stopped from the SceneManager.
     * The Scene is not the active scene anymore, nor will it be rendered.
     */
    Scene.prototype.stop = function () { };
    /**
     * Called with every PIXI update tick while this Scene is the active scene in the SceneManager.
     * @param {number} delta Elapsed time since the last update in milliseconds.
     */
    Scene.prototype.update = function (delta) { };
    return Scene;
}(PIXI.Container));
exports.default = Scene;
//# sourceMappingURL=scene.js.map