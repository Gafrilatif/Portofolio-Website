import './style.css';
import { createSceneContext } from './scene/setup.js';
import { createMaterials } from './scene/materials.js';
import { buildEnvironment } from './scene/environment.js';
import { createGrassField } from './scene/grass.js';
import { createRadioController } from './scene/radio.js';
import { loadModels } from './scene/models.js';
import { createObjectHints } from './scene/hints.js';
import { setupInteractions } from './interactions.js';

const ctx = createSceneContext();
const materials = createMaterials(ctx.loadingManager);

buildEnvironment(ctx.scene, materials);
const grassField = createGrassField(ctx.scene);
const radioController = createRadioController(ctx.scene, { x: 2.1, y: -0.55, z: 5.8 });
const cssScreens = loadModels(ctx.gltfLoader, ctx.scene, materials, radioController);

let interactions = null;
const hints = createObjectHints(ctx.scene, (targetId) => {
  if (targetId === 'radio') {
    hints.dismissHint('radio');
    radioController.toggle();
  } else {
    interactions?.zoomToTarget(targetId);
  }
});

interactions = setupInteractions(ctx, hints, cssScreens, radioController);

function animate(timeMs) {
  requestAnimationFrame(animate);
  const elapsedSeconds = timeMs * 0.001;
  if (ctx.controls.enabled) {
    ctx.controls.update();
  }
  grassField.update(elapsedSeconds);
  radioController.update(elapsedSeconds);
  ctx.updateAudioListener();
  ctx.composer.render(ctx.scene, ctx.camera);
  ctx.cssRenderer.render(ctx.scene, ctx.camera);
  ctx.css2DRenderer.render(ctx.scene, ctx.camera);
}

requestAnimationFrame(animate);
