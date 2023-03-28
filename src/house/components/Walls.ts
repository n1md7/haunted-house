import * as THREE from 'three';
import GUI from 'lil-gui';

export class Walls extends THREE.Mesh {
  public readonly height: number;
  public readonly width: number;

  constructor(gui: GUI, height = 2.5, width = 4) {
    super();

    this.height = height;
    this.width = width;
    this.geometry = new THREE.BoxGeometry(width, height, 4);
    this.material = new THREE.MeshStandardMaterial({ color: '#AC8E82' });
    this.position.y = this.absZero;

    gui.addColor(this.material, 'color');
    const scale = gui.addFolder('scale');
    scale.add(this.scale, 'x').max(3).min(0.5).step(0.1);
    scale
      .add(this.scale, 'z')
      .max(2)
      .min(0.5)
      .step(0.1)
      .onChange(() => {
        this.dispatchEvent({
          type: 'onZAxisChange',
          message: {
            z: (this.scale.z * width) / 2,
          },
        });
      });
    scale
      .add(this.scale, 'y')
      .max(3)
      .min(1)
      .step(0.1)
      .onChange(() => {
        this.position.y = this.scale.y * this.absZero;
        this.dispatchEvent({
          type: 'onYAxisChange',
          message: {
            height: this.scale.y * height,
          },
        });
      });
  }

  get absZero() {
    return this.height / 2;
  }
}
