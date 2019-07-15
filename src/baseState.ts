import {StateManager} from "./stateManager";
import {IState} from "./IState";

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
