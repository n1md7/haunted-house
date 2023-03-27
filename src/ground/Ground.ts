import * as THREE from 'three';
import GUI from 'lil-gui';

export class Ground extends THREE.Mesh {
  constructor(gui: GUI) {
    super();

    this.geometry = new THREE.PlaneGeometry(20, 20);
    this.material = new THREE.MeshStandardMaterial({ color: '#a9c388' });
    this.rotation.x = -Math.PI * 0.5;
    this.position.y = 0;

    gui.addColor(this.material, 'color');
  }
}
