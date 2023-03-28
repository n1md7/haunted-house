import * as THREE from 'three';
import GUI from 'lil-gui';

export default class Scene extends THREE.Scene {
  constructor(gui: GUI) {
    super();

    this.background = new THREE.Color('#262837');
    this.fog = new THREE.Fog('#262837', 1, 15);
    this.add(new THREE.AxesHelper(20));
    this.add(new THREE.GridHelper(60, 60, 0x888888, 0x444444));

    const fogFolder = gui.addFolder('Fog');
    fogFolder.addColor(this.fog, 'color');
  }
}
