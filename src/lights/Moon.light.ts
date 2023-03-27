import * as THREE from 'three';
import GUI from 'lil-gui';

export class MoonLight extends THREE.DirectionalLight {
  constructor(gui: GUI) {
    super('#ffffff', 0.5);

    this.position.set(4, 5, -2);

    gui.add(this, 'intensity').min(0).max(1).step(0.001);
    gui.add(this.position, 'x').min(-5).max(5).step(0.001);
    gui.add(this.position, 'y').min(-5).max(5).step(0.001);
    gui.add(this.position, 'z').min(-5).max(5).step(0.001);
  }
}
