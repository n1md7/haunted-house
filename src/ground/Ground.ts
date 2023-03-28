import * as THREE from 'three';
import GUI from 'lil-gui';
import { Grave } from '@/src/ground/components/Grave';

export class Ground extends THREE.Mesh {
  private readonly _graves: Grave[] = [];

  constructor(gui: GUI) {
    super();

    this.geometry = new THREE.PlaneGeometry(20, 20);
    this.material = new THREE.MeshStandardMaterial({ color: '#a9c388' });
    this.rotation.x = -Math.PI * 0.5;
    this.position.y = 0.01;

    gui.addColor(this.material, 'color');
    this.populateGraves(32);
    this.graves.push(new Grave());
  }

  get graves() {
    return this._graves;
  }

  private populateGraves(count: number) {
    for (let i = 0; i < count; i++) {
      const grave = new Grave();
      const angle = Math.random() * Math.PI * 2; // [0-180] random degrees
      const radius = 3 + Math.random() * 6; // [3, 9] random radius
      grave.position.setX(Math.sin(angle) * radius);
      grave.position.setZ(Math.cos(angle) * radius);
      grave.rotateY((Math.random() - 0.5) * 0.4);
      grave.rotateZ((Math.random() - 0.5) * 0.3);
      this._graves.push(grave);
    }
  }
}
