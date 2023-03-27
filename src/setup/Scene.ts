import * as THREE from 'three';

export default class Scene extends THREE.Scene {
  constructor() {
    super();

    this.background = new THREE.Color('#1f1e1e');
    this.add(new THREE.AxesHelper(20));
    this.add(new THREE.GridHelper(60, 60, 0x888888, 0x444444));
  }
}
