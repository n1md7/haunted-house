import * as THREE from 'three';
import GUI from 'lil-gui';
import { Timestamp } from '@/src/setup/utils/Timestamp';
import { Performance } from '@/src/setup/utils/Performance';
import { WindowUtils } from '@/src/setup/utils/window.utils';
import { Camera, Renderer, Scene } from '@/src/setup';
import { useLights } from '@/src/lights/hooks/useLights';
import { useGround } from '@/src/ground/hooks/useGround';
import { useHouse } from '@/src/house/hooks/useHouse';

(function setup() {
  const gui = new GUI();
  const renderer = new Renderer();
  const camera = new Camera();
  const scene = new Scene(gui.addFolder('Scene'));

  const lights = useLights(gui, scene);
  const ground = useGround(gui, scene);
  const house = useHouse(gui, scene);

  const textureLoader = new THREE.TextureLoader();

  {
    const FPS = 60;
    const DELAY = 1000 / FPS;
    const clock = new THREE.Clock();
    const performance = new Performance();
    const timestamp = new Timestamp();
    const windowUtils = new WindowUtils(renderer, camera);

    (function onSetup() {
      performance.show();
      windowUtils.subscribe();
    })();

    (function gameLoop() {
      performance.start();
      const elapsedTime = clock.getElapsedTime();
      if (timestamp.delta >= DELAY) {
        renderer.render(scene, camera);

        timestamp.update();
      }

      windowUtils.controlDumpingUpdate();
      requestAnimationFrame(gameLoop);
      performance.end();
    })();
  }
})();
