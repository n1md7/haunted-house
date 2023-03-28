import * as THREE from 'three';
import GUI from 'lil-gui';

export class Door extends THREE.Mesh {
  public readonly height: number;

  constructor(gui: GUI, z: number, width = 2, height = 2) {
    super();

    this.height = height;
    this.geometry = new THREE.PlaneGeometry(width, height);
    this.material = new THREE.MeshStandardMaterial({ color: '#AA7B7B' });
    this.position.y = this.absZero;
    this.position.z = z + 0.01; // Avoid Z fighting

    gui.addColor(this.material, 'color');
    const scale = gui.addFolder('scale');
    scale.add(this.scale, 'x').max(2).min(0.5).step(0.05);
    scale
      .add(this.scale, 'y')
      .max(1.2)
      .min(0.6)
      .step(0.01)
      .onChange(() => {
        this.position.y = this.absZero * this.scale.y;
      });
  }

  get absZero() {
    return this.height / 2;
  }
}
