import GUI from 'lil-gui';
import * as THREE from 'three';
import { House } from '@/src/house/House';

export function useHouse(gui: GUI, scene: THREE.Scene) {
  const folder = gui.addFolder('House');
  const house = new House(folder);

  scene.add(house);

  return house;
}
