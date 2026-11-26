import * as THREE from 'three';
import { Howl } from 'howler';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const RADIO_AUDIO_PATH = './audio/lofi_radio.wav';
const RADIO_ON_SFX_PATH = './audio/radio_on.mp3';
const RADIO_OFF_SFX_PATH = './audio/radio_off.mp3';
const RADIO_BPM = 75;
const MUSIC_VOLUME = 0.55;

export function createRadioController(scene, radioCenter = { x: 2.1, y: -0.55, z: 5.8 }) {
  let playing = false;
  let musicActive = false;
  let radioModel = null;
  let baseScale = new THREE.Vector3(10, 10, 10);

  const pannerConfig = {
    panningModel: 'HRTF',
    refDistance: 12,
    rolloffFactor: 0.6,
    distanceModel: 'inverse',
  };

  // Howler 3D spatial lofi loop anchored at the radio
  const music = new Howl({
    src: [RADIO_AUDIO_PATH],
    loop: true,
    volume: MUSIC_VOLUME,
  });
  music.pos(radioCenter.x, radioCenter.y, radioCenter.z);
  music.pannerAttr(pannerConfig);

  // Vintage radio switch turn-on & turn-off sound effects (spatialized at the radio)
  const sfxOn = new Howl({
    src: [RADIO_ON_SFX_PATH],
    volume: 0.7,
  });
  sfxOn.pos(radioCenter.x, radioCenter.y, radioCenter.z);
  sfxOn.pannerAttr(pannerConfig);

  const sfxOff = new Howl({
    src: [RADIO_OFF_SFX_PATH],
    volume: 0.7,
  });
  sfxOff.pos(radioCenter.x, radioCenter.y, radioCenter.z);
  sfxOff.pannerAttr(pannerConfig);

  // Floating glowing musical notes (CSS2D) rising from the radio while playing
  const notesRoot = document.createElement('div');
  notesRoot.className = 'radio-notes';
  notesRoot.innerHTML = `
    <span class="radio-note n1">♪</span>
    <span class="radio-note n2">♫</span>
    <span class="radio-note n3">♩</span>
  `;

  const notesObj = new CSS2DObject(notesRoot);
  notesObj.position.set(radioCenter.x, radioCenter.y + 1.4, radioCenter.z);
  notesObj.visible = false;
  scene.add(notesObj);

  function setVisualState(isOn) {
    notesRoot.classList.toggle('playing', isOn);
    notesObj.visible = isOn;
    if (!isOn && radioModel) {
      radioModel.scale.copy(baseScale);
    }
  }

  function attachModel(model) {
    radioModel = model;
    baseScale.copy(model.scale);
  }

  function toggle() {
    playing = !playing;
    sfxOn.off('end');

    if (playing) {
      musicActive = false;
      sfxOff.stop();
      music.stop();
      sfxOn.stop();

      // Wait until the turn-on switch sound finishes before starting the lofi loop from 0s
      sfxOn.once('end', () => {
        if (!playing) return;
        musicActive = true;
        music.stop();
        music.seek(0);
        music.volume(0);
        music.play();
        music.fade(0, MUSIC_VOLUME, 350);
        setVisualState(true);
      });

      sfxOn.play();
    } else {
      musicActive = false;
      sfxOn.stop();
      music.stop();
      sfxOff.stop();
      sfxOff.play();
      setVisualState(false);
    }

    return playing;
  }

  function update(elapsedSeconds) {
    if (!musicActive) return;

    // Gentle beat-synced pulse at 75 BPM (1.25 Hz)
    const beatPhase = elapsedSeconds * (RADIO_BPM / 60) * Math.PI * 2;
    const pulse = Math.pow(Math.max(0, Math.sin(beatPhase)), 3);

    if (radioModel) {
      radioModel.scale.set(
        baseScale.x * (1 + pulse * 0.025),
        baseScale.y * (1 + pulse * 0.04),
        baseScale.z * (1 + pulse * 0.025)
      );
    }
  }

  return {
    attachModel,
    toggle,
    update,
    isPlaying: () => playing,
  };
}
