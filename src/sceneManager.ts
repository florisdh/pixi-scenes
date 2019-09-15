import * as PIXI from 'pixi.js';
import IScene from "./iScene";

/**
 * Manages numerous Scenes and makes sure they function as they should.
 * @param {PIXI.Application} app The pixi application the scenes will be bound to.
 */
export default class SceneManager {

    private app: PIXI.Application;
    private scenes: {[name: string]: IScene};
    private current: string|null;

    constructor(app: PIXI.Application) {
        this.app = app;
        this.scenes = {};
        this.current = null;
        app.ticker.add(this.update.bind(this));
    }

    private update(delta: number): void {
        let active: IScene|null = this.active;
        if (active) {
            active.update(delta / PIXI.settings.TARGET_FPMS);
        }
    }

    /**
     * Adds the scene instance to function under this manager.
     * * If the name is already taken, it won't be added.
     * @param {string} name The name you give to this scene instance.
     * @param {Scene} scene Instance of the scene you want to add.
     */
    public add(name: string, scene: IScene): void {
        // TODO: Remove from previous manager if set
        if (!name || this.contains(name)) {
            return;
        }
        this.scenes[name] = scene;
        scene.app = this.app;
        scene.scenes = this;
        scene.init();
    }

    /**
     * Removed a scene from this manager.
     * * If this scene is currently active, it will be stopped first.
     * @param {string} name Name given to this scene instance.
     */
    public remove(name: string): boolean {
        if (!name || !this.contains(name)) {
            return false;
        }
        if (this.current === name) {
            this.stop();
        }
        const scene = this.scenes[name];
        scene.app = null;
        scene.scenes = null;
        delete this.scenes[name];
        return true;
    }

    /**
     * Checks there is a scene with this name in this manager.
     * @param {string} name 
     * @returns {boolean}
     */
    public contains(name: string): boolean {
        return name in this.scenes;
    }

    /**
     * Starts a scene and set's it to be the active scene of this manager.
     * * Stops the previous active scene first if defined.
     * @param {string} name 
     */
    public start(name: string): void {
        if (!this.contains(name) || name === this.current) {
            return;
        }
        
        this.stop();

        // Start new
        this.current = name;
        const active = this.active;
        if (active) {
            this.app.stage.addChild(active);
            active.awake();
        }
    }

    /**
     * Stops the scene and unsets it as the active scene in this manager.
     */
    public stop(): void {
        let active: IScene|null = this.active;
        if (active) {
            this.current = null;
            active.sleep();
            this.app.stage.removeChild(active);
        }
    }

    /**
     * Getting the active scene in this manager.
     * @returns {Scene|null}
     */
    public get active(): IScene|null {
        return this.current ? this.scenes[this.current] : null;
    }

    /**
     * Getting the name of the active scene in this manager.
     * @returns {Scene|null}
     */
    public get activeName(): string|null {
        return this.current;
    }

    /**
     * Getting the names of all the scenes in this manager.
     * @returns {string[]}
     */
    public get sceneNames(): string[] {
        return Object.keys(this.scenes);
    }
}
