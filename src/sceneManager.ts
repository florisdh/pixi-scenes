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
        if (!name || this.contains(name)) {
            return;
        }
        this.scenes[name] = scene;
        scene.app = this.app;
        scene.scenes = this;
        scene.init();
    }

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

    public contains(name: string): boolean {
        return name in this.scenes;
    }

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
            active.start();
        }
    }

    public stop(): void {
        let active: IScene|null = this.active;
        if (active) {
            this.current = null;
            active.stop();
            this.app.stage.removeChild(active);
        }
    }

    public get active(): IScene|null {
        return this.current ? this.scenes[this.current] : null;
    }

    public get activeName(): string|null {
        return this.current;
    }
}
