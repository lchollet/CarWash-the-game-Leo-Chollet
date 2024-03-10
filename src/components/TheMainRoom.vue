<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import "../aframe/life-like-automaton.js";
import "../aframe/event-set.js";
import "../aframe/clickable.js";
import "../aframe/chronometer.js";
import "../aframe/bubble-pop.js";
import "../aframe/listen-to.js";


defineProps({
  scale: Number,
  buttonIsPressed: Boolean,
});

function buttonManager() {
  console.log("Button pressed");
  document.querySelector("#button_entity").setAttribute("visible", "false");
  document
    .querySelector("#button_pressed_entity")
    .setAttribute("visible", "true");
  setTimeout(() => {
    document.querySelector("#button_entity").setAttribute("visible", "true");
    document
      .querySelector("#button_pressed_entity")
      .setAttribute("visible", "false");
  }, 1000);
  document.querySelector("#timer-box").setAttribute("chronometer", "start");
  document.querySelector("#timer-box1").setAttribute("chronometer", "start");
}
</script>

<template>
  <a-entity position="7 0 -9">
    <a-entity
      gltf-model="#room"
      rotation="0 0 0"
      position="0 0 0"
      scale="11 11 11"
    >
    </a-entity>

    <a-entity
      gltf-model="#car"
      position="-1 0.75 8.3"
      rotation="0 -90 0"
      scale="0.4 0.4 0.4"
    ></a-entity>

    <a-sphere
      id="bubble-1"
      position="-1 1.67 8.3"
      radius="0.1"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-1; on: click;"
      listen-to="target: #bubble-1; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>
    <a-sphere
      id="bubble-2"
      position="-1.2 1.67 7.7"
      radius="0.1"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-2; on: click;"
      listen-to="target: #bubble-2; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>
    <a-sphere
      id="bubble-3"
      position="-1.1 1.62 8.9"
      radius="0.07"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-3; on: click;"
      listen-to="target: #bubble-3; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>
    <a-sphere
      id="bubble-4"
      position="1 1.3 8.5"
      radius="0.1"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-4; on: click;"
      listen-to="target: #bubble-4; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>
    <a-sphere
      id="bubble-5"
      position="1 1.3 7.7"
      radius="0.1"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-5; on: click;"
      listen-to="target: #bubble-5; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>

    <a-sphere
      id="bubble-6"
      position="-2.7 1.2 7.7"
      radius="0.1"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-6; on: click;"
      listen-to="target: #bubble-6; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>

    <a-sphere
      id="bubble-7"
      position="-2.9 1.23 8.6"
      radius="0.07"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-7; on: click;"
      listen-to="target: #bubble-7; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>

    <a-sphere
      id="bubble-8"
      position="-3.2 1.2 8"
      radius="0.03"
      color="#84d1e8"
      visible="true"
      clickable
      bubble-pop="bubble: #bubble-8; on: click;"
      listen-to="target: #bubble-8; event: contactbegin; emit: click"
      physx-body="type: static; emitCollisionEvents: true"
      sound="src: #sound-2; on: click"
    >
    </a-sphere>

    <a-box
      position="-6 0.63 10"
      width="0.5"
      height="1.5"
      depth="0.5"
      color="#84d1e8"
    ></a-box>

    <a-entity
      id="button_entity"
      gltf-model="#button"
      position="-6 1.4 10"
      scale="0.3 0.3 0.3"
      visible="true"
      clickable
      @click="buttonManager"
      sound="src: #sound-1; on: click;"
    ></a-entity>
    <a-entity
      id="button_pressed_entity"
      gltf-model="#button_pressed"
      position="-6 1.4 10"
      scale="0.3 0.3 0.3"
      visible="false"
      sound="src: #sound-1; on: click;"
    ></a-entity>

    <a-text
      value="Start the game"
      position="-5.35 1.6 10.5"
      rotation="0 -180 0"
    ></a-text>

    <a-text
      scale="3 3 3"
      position="0.4 2.7 10.7"
      rotation="0 -180 0"
      value="00:00:00"
      id="timer-box"
    ></a-text>
    <a-text
      scale="3 3 3"
      position="-1.8 2.7 6"
      value="00:00:00"
      id="timer-box1"
    ></a-text>

    <a-text
      id="bubble-counter"
      scale="2 2 2"
      position="4 2.7 6"
      rotation="0 -90 0"
      value="Bubbles popped: 0"
    ></a-text>

    <a-ocean
      color="#92E2E2"
      width="100"
      height="100"
      depth="100"
      density="50"
      speed="2"
      position="0 -0.5 0"
    ></a-ocean>
  </a-entity>

  <!-- Main room navigation mesh  -->
  <a-entity
    geometry="primitive: plane; height: 24; width: 26"
    position="3.9 0 -8"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
</template>
