import * as PIXI from 'pixi.js';
import SceneManager from "./sceneManager";
export default interface IScene extends PIXI.Container {
    app: PIXI.Application | null;
    scenes: SceneManager | null;
    hasRun: boolean;
    init(): void;
    start(): void;
    stop(): void;
    update(delta: number): void;
}
