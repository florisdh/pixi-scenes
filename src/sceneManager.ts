import * as PIXI from 'pixi.js';
import IScene from "./iScene";

export default class SceneManager {
    private app: PIXI.Application;
    private scenes: {[name: string]: IScene};
    private current: string|null;

    constructor(app: PIXI.Application) {
        this.app = app;
        this.scenes = {};
        this.current = null;
        // Listen for animate update
        app.ticker.add(this.update.bind(this));
    }

    private update(delta: number): void {
        let active: IScene|null = this.active;
        if (active) {
            active.update(delta / PIXI.settings.TARGET_FPMS);
        }
    }

    public add(name: string, scene: IScene): void {
        if (this.contains(name)) {
            return;
        }
        this.scenes[name] = scene;
        scene.app = this.app;
        scene.scenes = this;
        scene.init();
    }

    public contains(name: string): boolean {
        return !!this.scenes[name];
    }

    public start(name: string): void {
        if (!this.contains(name) || name === this.current) {
            return;
        }

        // Stop current
        let active: IScene|null = this.active;
        if (active) {
            active.stop();
            this.app.stage.removeChild(active);
        }

        // Start new
        this.current = name;
        if (active = this.active) {
            this.app.stage.addChild(active);
            active.start();
        }
    }

    public get active(): IScene|null {
        return this.current ? this.scenes[this.current] : null;
    }
}
