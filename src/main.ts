import * as THREE from 'three';
import GUI from 'lil-gui';
import { Timestamp } from '@/src/setup/utils/Timestamp';
import { Performance } from '@/src/setup/utils/Performance';
import { WindowUtils } from '@/src/setup/utils/window.utils';
import { Renderer, Camera, Scene } from '@/src/setup';

(function setup() {
  const renderer = new Renderer();
  const camera = new Camera();
  const scene = new Scene();
  const gui = new GUI();

  gui.addFolder('My options').show();

  const material = new THREE.MeshStandardMaterial({ wireframe: true, color: '#AA0033' });
  const geometry = new THREE.SphereGeometry(2, 32, 32);
  const sphere = new THREE.Mesh(geometry, material);

  sphere.position.y = 2;
  scene.add(sphere);

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

        sphere.position.x = Math.sin(elapsedTime) * Math.PI;
        sphere.position.z = Math.cos(elapsedTime) * Math.PI;

        timestamp.update();
      }

      windowUtils.controlDumpingUpdate();
      requestAnimationFrame(gameLoop);
      performance.end();
    })();
  }
})();
