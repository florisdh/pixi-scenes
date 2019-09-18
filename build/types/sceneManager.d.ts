import * as PIXI from 'pixi.js';
import IScene from "./iScene";
/**
 * Manages numerous Scenes and makes sure they function as they should.
 * @param {PIXI.Application} app The pixi application the scenes will be bound to.
 */
export default class SceneManager {
    private app;
    private scenes;
    private current;
    constructor(app: PIXI.Application);
    private update;
    /**
     * Adds the scene instance to function under this manager.
     * * If the name is already taken, it won't be added.
     * @param {string} name The name you give to this scene instance.
     * @param {Scene} scene Instance of the scene you want to add.
     */
    add(name: string, scene: IScene): void;
    /**
     * Removed a scene from this manager.
     * * If this scene is currently active, it will be stopped first.
     * @param {string} name Name given to this scene instance.
     */
    remove(name: string): boolean;
    /**
     * Checks there is a scene with this name in this manager.
     * @param {string} name
     * @returns {boolean}
     */
    contains(name: string): boolean;
    /**
     * Starts a scene and set's it to be the active scene of this manager.
     * * Stops the previous active scene first if defined.
     * @param {string} name
     */
    start(name: string): void;
    /**
     * Stops the scene and unsets it as the active scene in this manager.
     */
    stop(): void;
    /**
     * Getting the active scene in this manager.
     * @returns {Scene|null}
     */
    readonly active: IScene | null;
    /**
     * Getting the name of the active scene in this manager.
     * @returns {Scene|null}
     */
    readonly activeName: string | null;
    /**
     * Getting the names of all the scenes in this manager.
     * @returns {string[]}
     */
    readonly sceneNames: string[];
}
