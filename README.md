# pixi-scenes
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)
[![dependencies](https://david-dm.org/florisdh/pixi-scenes.svg)](https://david-dm.org/florisdh/pixi-scenes)

Split your **pixi.js** application into multiple **scenes** and manage them with ease.

## Getting started

### Installation
```
npm i pixi-scenes
```

## Usage

### Setup
```ts
import {SceneManager} from "pixi-scenes";
const sceneManager: SceneManager = new SceneManager(myPixiApplication);
```

### Adding scenes
```ts
sceneManager.add('splashScreen', new SplashScreen());
```

### Switching scenes
```ts
sceneManager.start('splashScreen');
```

### Example scene
```ts
import {BaseScene} from 'pixi-scenes';

export default class SplashScreen extends BaseScene {

    private header: PIXI.Text;

    public init(): void {
        this.header = new PIXI.Text('My Game Studio');
        this.header.x = this.app.screen.width / 2;
        this.header.y = this.app.screen.height / 2;
        this.header.anchor.set(0.5);
        this.addChild(this.header);
    }

    public start(): void {
        this.header.angle = 0;
        setTimeout(() => {
            this.scenes.start('mainMenu');
        }, 5000);
    }

    public update(delta: number): void {
        this.header.angle += delta / 1000 * 45;
    }
}
```


## About
Please let me know if you're using it or have some feedback. :)

## TODO
- Document code
- Improve readme
- Add documentation pages
- Add example project
- Add tests
- Setup seperate esm export
- Bundle definitions
