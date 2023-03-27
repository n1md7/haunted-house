import * as THREE from 'three';
import GUI from 'lil-gui';
import { Walls } from '@/src/house/components/Walls';
import { Roof } from '@/src/house/components/Roof';

export class House extends THREE.Group {
  private readonly walls: Walls;
  private readonly roof: Roof;

  constructor(gui: GUI) {
    super();

    this.walls = new Walls(gui.addFolder('Walls'));
    this.roof = new Roof(gui.addFolder('Roof'), this.walls.height);

    this.walls.addEventListener('onHeightChange', (event) => {
      this.roof.position.y = this.roof.absZero * this.roof.scale.y + event.message.height;
    });

    this.add(this.walls, this.roof);
  }
}
