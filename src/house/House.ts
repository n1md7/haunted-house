import * as THREE from 'three';
import GUI from 'lil-gui';
import { Walls } from '@/src/house/components/Walls';
import { Roof } from '@/src/house/components/Roof';
import { Door } from '@/src/house/components/Door';
import { DoorLight } from '@/src/house/components/DoorLight';

export class House extends THREE.Group {
  private readonly walls: Walls;
  private readonly roof: Roof;
  private readonly door: Door;
  private readonly doorLight: DoorLight;

  constructor(gui: GUI) {
    super();

    this.walls = new Walls(gui.addFolder('Walls'));
    this.roof = new Roof(gui.addFolder('Roof'), this.walls.height);
    this.door = new Door(gui.addFolder('Door'), this.walls.width / 2, 2, 2);
    this.doorLight = new DoorLight(gui.addFolder('Door'));
    this.doorLight.position.setZ(this.door.position.z + 0.2);
    this.doorLight.position.setY(this.door.position.y + this.door.height - 0.5);
    this.walls.addEventListener('onYAxisChange', (event) => {
      this.roof.position.y = this.roof.absZero * this.roof.scale.y + event.message.height;
    });
    this.walls.addEventListener('onZAxisChange', ({ message: { z } }) => {
      this.door.position.z = z + 0.01;
      this.doorLight.position.setZ(this.door.position.z + 0.2);
    });

    this.add(this.walls, this.roof, this.door, this.doorLight);
  }
}
