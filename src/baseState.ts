import * as PIXI from "pixi.js";
import {IState} from "./iState";
import {StateManager} from "./stateManager";

export class BaseState extends PIXI.Container implements IState {

    public app: PIXI.Application|null;
    public states: StateManager|null;

    constructor() {
        super();
        this.app = null;
        this.states = null;
    }

    public init(): void {}
    public start(): void {}
    public stop(): void {}
    public update(delta: number): void {}
}
