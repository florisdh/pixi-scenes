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

### Accessability
You can use this library through import/require or by loading it straight into your html. After loading it you can access the library under the global declaration of the pixi namespace. ex: `PIXI.scenes.SceneManager`

### Setup
```ts
import {SceneManager} from 'pixi-scenes';
const sceneManager = new SceneManager(myPixiApplication);
```

### Using scenes
```ts
sceneManager.add('splash', new SplashScene());
sceneManager.add('menu', new MenuScene());
sceneManager.add('gameover', new GameoverScene());
sceneManager.start('splash');
```

### Example scene
```ts
import {Scene} from 'pixi-scenes';

export default class SplashScene extends Scene {

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
- Retrieving list of scenes
- Event system on manager
- Document code
- Resize integration
- Improve readme
- Add documentation pages
- Look at threeshaking
- Add example project
- Add exports/globals tests
- Bundle definitions
