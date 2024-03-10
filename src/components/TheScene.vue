<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheMainRoom from './TheMainRoom.vue';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    fog="type: linear; color: #87CEEB; near: 1; far: 30"
    background="color: #87CEEB"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="room" src="assets/GasStation.glb"></a-asset-item>
      <a-asset-item id="car" src="assets/MuscleCar.glb"></a-asset-item>
      <a-asset-item id="button" src="assets/button.glb"></a-asset-item>
      <a-asset-item id="button_pressed" src="assets/button_pressed.glb"></a-asset-item>
      <a-asset-item id="sound-1" response-type="arraybuffer" src="assets/button.mp3"></a-asset-item>
      <a-asset-item id="sound-2" response-type="arraybuffer" src="assets/BubblePop.mp3"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainRoom :scale="scale" />
    </template>

    <TheCameraRig />

  </a-scene>
</template>