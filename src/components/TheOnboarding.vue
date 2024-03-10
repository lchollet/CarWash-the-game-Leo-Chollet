<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>CarWash the game, Léo Chollet</h1>
      <p v-if="!loaded">Chargement de toutes cettes histoire...</p>
      <button v-if="loaded" @click="enterScene()">Entrer sur la scène de lavage</button>
      <p>Dans ce jeux vous êtes laveur de voiture, bloqué sur un île carwash, votre seule possibilité pour sortir : laver la voiture en moins de une minutes.. Courage !</p>
      <div class="licences">
      <section>
        <h4>Movement modes support</h4>
        <ul>
          <li>
            Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
            control (Drag and drop)
          </li>
          <li>
            Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
            backward + Gaze cursor for click
          </li>
          <li>
            VR Headset – AR/VR walk + Teleport (Grip for grab and laser for
            click) + Gaze cursor for click
          </li>
        </ul>
      </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/modular-factory-button-50f3011929a247418b6c3c46614c53b8" target="_blank">Modular Factory Button 3d-models</a>
          </dt><dd>
            By somguypc under CC Attribution
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/classic-muscle-car-641efc889e5f4543bae51d0922e6f4b3" target="_blank">Classic Muscle car 3d-models</a>
          </dt><dd>
            By Lexyc16 under CC Attribution
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/gas-station-7b7e3930724c4ed28b16c1f897e63f83" target="_blank">Gas Station 3d-models</a>
          </dt><dd>
            By Yanez Designs under CC Attribution
          </dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
