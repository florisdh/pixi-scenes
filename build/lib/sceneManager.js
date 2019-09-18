"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
/**
 * Manages numerous Scenes and makes sure they function as they should.
 * @param {PIXI.Application} app The pixi application the scenes will be bound to.
 */
var SceneManager = /** @class */ (function () {
    function SceneManager(app) {
        this.app = app;
        this.scenes = {};
        this.current = null;
        app.ticker.add(this.update.bind(this));
    }
    SceneManager.prototype.update = function (delta) {
        var active = this.active;
        if (active) {
            active.update(delta / PIXI.settings.TARGET_FPMS);
        }
    };
    /**
     * Adds the scene instance to function under this manager.
     * * If the name is already taken, it won't be added.
     * @param {string} name The name you give to this scene instance.
     * @param {Scene} scene Instance of the scene you want to add.
     */
    SceneManager.prototype.add = function (name, scene) {
        // TODO: Remove from previous manager if set
        if (!name || this.contains(name)) {
            return;
        }
        this.scenes[name] = scene;
        scene.app = this.app;
        scene.scenes = this;
        scene.hasRun = false;
    };
    /**
     * Removed a scene from this manager.
     * * If this scene is currently active, it will be stopped first.
     * @param {string} name Name given to this scene instance.
     */
    SceneManager.prototype.remove = function (name) {
        if (!name || !this.contains(name)) {
            return false;
        }
        if (this.current === name) {
            this.stop();
        }
        var scene = this.scenes[name];
        scene.app = null;
        scene.scenes = null;
        delete this.scenes[name];
        return true;
    };
    /**
     * Checks there is a scene with this name in this manager.
     * @param {string} name
     * @returns {boolean}
     */
    SceneManager.prototype.contains = function (name) {
        return name in this.scenes;
    };
    /**
     * Starts a scene and set's it to be the active scene of this manager.
     * * Stops the previous active scene first if defined.
     * @param {string} name
     */
    SceneManager.prototype.start = function (name) {
        if (!this.contains(name) || name === this.current) {
            return;
        }
        this.stop();
        // Start new
        this.current = name;
        var active = this.active;
        if (active) {
            if (!active.hasRun) {
                active.init();
                active.hasRun = true;
            }
            this.app.stage.addChild(active);
            active.start();
        }
    };
    /**
     * Stops the scene and unsets it as the active scene in this manager.
     */
    SceneManager.prototype.stop = function () {
        var active = this.active;
        if (active) {
            this.current = null;
            active.stop();
            this.app.stage.removeChild(active);
        }
    };
    Object.defineProperty(SceneManager.prototype, "active", {
        /**
         * Getting the active scene in this manager.
         * @returns {Scene|null}
         */
        get: function () {
            return this.current ? this.scenes[this.current] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SceneManager.prototype, "activeName", {
        /**
         * Getting the name of the active scene in this manager.
         * @returns {Scene|null}
         */
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SceneManager.prototype, "sceneNames", {
        /**
         * Getting the names of all the scenes in this manager.
         * @returns {string[]}
         */
        get: function () {
            return Object.keys(this.scenes);
        },
        enumerable: true,
        configurable: true
    });
    return SceneManager;
}());
exports.default = SceneManager;
//# sourceMappingURL=sceneManager.js.map