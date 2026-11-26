import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const HINT_CONFIGS = [
  {
    id: 'computerScreen',
    label: 'Projects',
    position: { x: 9.0, y: 3.4, z: -2.5 },
  },
  {
    id: 'phone',
    label: 'Contact',
    position: { x: 17.0, y: 0.2, z: -2.0 },
  },
  {
    id: 'radio',
    label: 'Radio',
    position: { x: 2.1, y: 1.55, z: 5.8 },
  },
];

export function createObjectHints(scene, onSelect) {
  const hintMap = new Map();
  const dismissedHints = new Set();

  HINT_CONFIGS.forEach(({ id, label, position }) => {
    const wrapper = document.createElement('button');
    wrapper.type = 'button';
    wrapper.className = 'scene-hint';
    wrapper.dataset.targetId = id;
    wrapper.setAttribute('aria-label', `Open ${label}`);
    wrapper.innerHTML = `
      <span class="scene-hint-inner">
        <span class="scene-hint-pill">${label}</span>
        <span class="scene-hint-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V13M8 13L3.5 8.5M8 13L12.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </span>
    `;

    wrapper.addEventListener('click', (event) => {
      event.stopPropagation();
      if (dismissedHints.has(id)) return;
      onSelect(id);
    });

    const css2D = new CSS2DObject(wrapper);
    css2D.position.set(position.x, position.y, position.z);
    scene.add(css2D);
    hintMap.set(id, { css2D, element: wrapper });
  });

  function dismissHint(id) {
    if (dismissedHints.has(id)) return;
    dismissedHints.add(id);
    const entry = hintMap.get(id);
    if (!entry) return;
    entry.element.classList.add('dismissed');
    setTimeout(() => {
      entry.css2D.visible = false;
      entry.element.style.display = 'none';
    }, 300);
  }

  function setHintsTemporarilyHidden(hidden) {
    hintMap.forEach((entry, id) => {
      if (dismissedHints.has(id)) return;
      entry.element.classList.toggle('temporarily-hidden', hidden);
    });
  }

  return {
    dismissHint,
    setHintsTemporarilyHidden,
  };
}
