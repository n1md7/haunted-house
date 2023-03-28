import * as THREE from 'three';
import GUI from 'lil-gui';

export class Grave extends THREE.Mesh {
  public readonly height: number;

  constructor(width = 0.6, height = 0.8) {
    super();

    this.height = height;
    this.geometry = new THREE.BoxGeometry(width, height, 0.2);
    this.material = new THREE.MeshStandardMaterial({ color: '#B2B6B1' });
    this.position.y = this.absZero;
  }

  get absZero() {
    return this.height / 2;
  }
}
