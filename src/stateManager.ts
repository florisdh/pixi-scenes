module PixiScenes {
    export class StateManager {

        private app: PIXI.Application;
        private states: {[name: string]: IState};
        private current: string|null;

        constructor(app: PIXI.Application) {
            this.app = app;
            this.states = {};
            this.current = null;
            // Listen for animate update
            app.ticker.add(this.update.bind(this));
        }

        private update(delta: number): void {
            let active: IState|null = this.active;
            if (active) {
                active.update(delta);
            }
        }

        public add(name: string, state: IState): void {
            if (this.contains(name)) {
                return;
            }
            this.states[name] = state;
            //state.app = this.app;
            //state.states = this;
            state.init();
        }

        public contains(name: string): boolean {
            return !!this.states[name];
        }

        public start(name: string): void {
            if (!this.contains(name) || name === this.current) {
                return;
            }

            // Stop current
            let active: IState|null = this.active;
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

        public get active(): IState|null {
            return this.current ? this.states[this.current] : null;
        }
    }
}
