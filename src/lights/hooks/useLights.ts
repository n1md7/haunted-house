import GUI from 'lil-gui';
import * as THREE from 'three';
import { AmbientLight } from '@/src/lights/Ambient.light';
import { MoonLight } from '@/src/lights/Moon.light';

export function useLights(gui: GUI, scene: THREE.Scene) {
  const folder = gui.addFolder('Lights');
  const folders = {
    ambient: folder.addFolder('Ambient'),
    moonlight: folder.addFolder('Moonlight'),
  };
  const ambientLight = new AmbientLight(folders.ambient);
  const moonLight = new MoonLight(folders.moonlight);

  scene.add(ambientLight, moonLight);

  return { ambientLight, moonLight };
}
