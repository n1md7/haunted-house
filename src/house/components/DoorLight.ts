import * as THREE from 'three';
import GUI from 'lil-gui';

export class DoorLight extends THREE.PointLight {
  constructor(gui: GUI) {
    super('#FF7D46', 2, 7);

    gui.addColor(this, 'color');
    gui.add(this, 'intensity').max(5).min(0.2).step(0.01);
  }
}
