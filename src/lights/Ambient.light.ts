import * as THREE from 'three';
import GUI from 'lil-gui';

export class AmbientLight extends THREE.AmbientLight {
  constructor(gui: GUI) {
    super('#B9D5FF', 0.12);

    gui.add(this, 'intensity').min(0).max(1).step(0.001);
  }
}
