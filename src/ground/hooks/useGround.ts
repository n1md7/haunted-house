import GUI from 'lil-gui';
import * as THREE from 'three';
import { Ground } from '@/src/ground/Ground';

export function useGround(gui: GUI, scene: THREE.Scene) {
  const folder = gui.addFolder('Ground');
  const ground = new Ground(folder);

  scene.add(ground, ...ground.graves);

  return ground;
}
