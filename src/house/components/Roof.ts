import * as THREE from 'three';
import GUI from 'lil-gui';

export class Roof extends THREE.Mesh {
  public readonly height: number;

  constructor(gui: GUI, y: number, height = 1) {
    super();

    this.height = height;
    this.geometry = new THREE.ConeGeometry(3.5, height, 4);
    this.material = new THREE.MeshStandardMaterial({ color: '#B35F45' });
    this.rotateY(Math.PI / 4);
    this.position.y = y + this.absZero;

    gui.addColor(this.material, 'color');
    const scale = gui.addFolder('scale');
    scale.add(this.scale, 'x').max(3).min(0.5).step(0.1);
    scale.add(this.scale, 'z').max(3).min(0.5).step(0.1);
    scale
      .add(this.scale, 'y')
      .max(8)
      .min(0.5)
      .step(0.1)
      .onChange(() => {
        this.position.y = y + this.absZero * this.scale.y;
      });
  }

  get absZero() {
    return this.height / 2;
  }
}
