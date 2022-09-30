import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import * as THREE from 'three';
import gsap from 'gsap';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { ClampToEdgeWrapping } from 'three';
import { ceilPowerOfTwo } from 'three/src/math/MathUtils';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.TorusGeometry(12,0.6,16,100);

const material = new THREE.MeshToonMaterial({color: 0xFE4365});

const geometry2 = new THREE.TorusGeometry(9,0.6,16,100);

const material2 = new THREE.MeshToonMaterial({color: 0xF9CDAD});

const geometry3 = new THREE.TorusGeometry(10.5,0.6,16,100);

const material3 = new THREE.MeshToonMaterial({color: 0xFC9D9A});

const pointLight = new THREE.PointLight(0xffffff, 1.3, 200);
pointLight.position.z = 30;
pointLight.decay = 0;
const pointLight2 = new THREE.PointLight(0xffffff);
const pointLight3 = new THREE.PointLight(0xffffff);

scene.add(pointLight);

const light = new THREE.DirectionalLight(0xffffff,1.5);
// const light2 = new THREE.DirectionalLight(0xffffff,1);
// scene.add(light);
light.position.set(0,-1,1);
// light2.position.set(0,-1,0);

const torus = new THREE.Mesh(geometry,material);
const torus2 = new THREE.Mesh(geometry2,material2);
const torus3 = new THREE.Mesh(geometry3,material3);

const t = document.body.getBoundingClientRect().top;

const meGeometry = new THREE.PlaneGeometry(42,22,40,40);
const meTexture = new THREE.TextureLoader().load('img/for.png');
const meMaterial = new THREE.MeshStandardMaterial({map: meTexture});
const me = new THREE.Mesh(meGeometry, meMaterial);

scene.add(me)
me.position.x -= 20;
me.position.z -= 10;

torus.position.x += 20;
torus2.position.x += 20;
torus3.position.x += 20;

torus.position.z -= 10;
torus2.position.z -= 10;
torus3.position.z -= 10;

const spaceTexture = new THREE.TextureLoader().load('img/space.jpg');
scene.background = spaceTexture;

scene.add(torus); 
scene.add(torus2);
scene.add(torus3); 

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24,24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() =>THREE.MathUtils.randFloatSpread(200))

  star.position.set(x,y,z);
  scene.add(star);
}

const moonTexture = new THREE.TextureLoader().load('img/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('img/normal.jpg');

const willTexture = new THREE.TextureLoader().load('img/me.png');
const will = new THREE.Mesh(
  new THREE.BoxGeometry(11,11,11),
  new THREE.MeshBasicMaterial({map: willTexture})
)

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map: moonTexture,
     normalMap: normalTexture
    })
)

will.position.x += 20;
will.position.z -= 10;

const photoGeometry = new THREE.PlaneGeometry(12.5,12.5,40,40);

const symbol1Texture = new THREE.TextureLoader().load('img/1.png');
const photo1Material = new THREE.MeshStandardMaterial({map: symbol1Texture});
const photo1 = new THREE.Mesh(photoGeometry, photo1Material);

const symbol2Texture = new THREE.TextureLoader().load('img/2.png');
const photo2Material = new THREE.MeshStandardMaterial({map: symbol2Texture});
const photo2 = new THREE.Mesh(photoGeometry, photo2Material);

const symbol3Texture = new THREE.TextureLoader().load('img/3.png');
const photo3Material = new THREE.MeshStandardMaterial({map: symbol3Texture});
const photo3 = new THREE.Mesh(photoGeometry, photo3Material);

const symbol4Texture = new THREE.TextureLoader().load('img/4.png');
const photo4Material = new THREE.MeshStandardMaterial({map: symbol4Texture});
const photo4 = new THREE.Mesh(photoGeometry, photo4Material);

const symbol5Texture = new THREE.TextureLoader().load('img/5.png');
const photo5Material = new THREE.MeshStandardMaterial({map: symbol5Texture});
const photo5 = new THREE.Mesh(photoGeometry, photo5Material);

const symbol6Texture = new THREE.TextureLoader().load('img/6.png');
const photo6Material = new THREE.MeshStandardMaterial({map: symbol6Texture});
const photo6 = new THREE.Mesh(photoGeometry, photo6Material);

const jobGeometry = new THREE.PlaneGeometry(52,20,40,40);
const job1Texture = new THREE.TextureLoader().load('img/job1.png');
const job1Material = new THREE.MeshStandardMaterial({map: job1Texture});
const job1 = new THREE.Mesh(jobGeometry, job1Material);

const job2Geometry = new THREE.PlaneGeometry(40,20,40,40);
const job2Texture = new THREE.TextureLoader().load('img/job2.png');
const job2Material = new THREE.MeshStandardMaterial({map: job2Texture});
const job2 = new THREE.Mesh(job2Geometry, job2Material);

const job3Geometry = new THREE.PlaneGeometry(45,20,40,40);
const job3Texture = new THREE.TextureLoader().load('img/job3.png');
const job3Material = new THREE.MeshStandardMaterial({map: job3Texture});
const job3 = new THREE.Mesh(job3Geometry, job3Material);

const job4Texture = new THREE.TextureLoader().load('img/job4.png');
const job4Material = new THREE.MeshStandardMaterial({map: job4Texture});
const job4 = new THREE.Mesh(job2Geometry, job4Material);

const letterGeometry = new THREE.BoxGeometry(3,3,3);

const eTexture = new THREE.TextureLoader().load('img/e.png');
const eMaterial = new THREE.MeshStandardMaterial({map: eTexture});
const e = new THREE.Mesh(letterGeometry, eMaterial);
const e2 = new THREE.Mesh(letterGeometry, eMaterial);
const e3 = new THREE.Mesh(letterGeometry, eMaterial);
const e4 = new THREE.Mesh(letterGeometry, eMaterial);

const rTexture = new THREE.TextureLoader().load('img/r.png');
const rMaterial = new THREE.MeshStandardMaterial({map: rTexture});
const r = new THREE.Mesh(letterGeometry, rMaterial);

const iTexture = new THREE.TextureLoader().load('img/i.png');
const iMaterial = new THREE.MeshStandardMaterial({map: iTexture});
const i = new THREE.Mesh(letterGeometry, iMaterial);

const nTexture = new THREE.TextureLoader().load('img/n.png');
const nMaterial = new THREE.MeshStandardMaterial({map: nTexture});
const n = new THREE.Mesh(letterGeometry, nMaterial);

const xTexture = new THREE.TextureLoader().load('img/x.png');
const xMaterial = new THREE.MeshStandardMaterial({map: xTexture});
const x = new THREE.Mesh(letterGeometry, xMaterial);

const pTexture = new THREE.TextureLoader().load('img/p.png');
const pMaterial = new THREE.MeshStandardMaterial({map: pTexture});
const p = new THREE.Mesh(letterGeometry, pMaterial);

const cTexture = new THREE.TextureLoader().load('img/c.png');
const cMaterial = new THREE.MeshStandardMaterial({map: cTexture});
const c = new THREE.Mesh(letterGeometry, cMaterial);

scene.add(e);
scene.add(e2);
scene.add(e3);
scene.add(r);
scene.add(i);
scene.add(n);
scene.add(x);
scene.add(p);
scene.add(c);
scene.add(e4);

const letters = [e,x,p,e2,r,i,e3,n,c,e4];

let position = -27;
let increment = 6;

for (let letter of letters) {
  letter.position.z += 70;
  letter.rotation.x -= 3;
  letter.position.y -= 23;
  letter.position.x += position;
  position += increment;
}


job1.position.z += 70;
job1.rotation.x -= 3;
job1.position.x -= 22;
job1.position.y -= 8;

job2.position.z += 70;
job2.rotation.x -= 3;
job2.position.x += 28;
job2.position.y -= 8;

job3.position.z += 70;
job3.rotation.x -= 3;
job3.position.x += 22;
job3.position.y += 14;

job4.position.z += 70;
job4.rotation.x -= 3;
job4.position.x -= 24
job4.position.y += 14;

scene.add(job1);
scene.add(job2);
scene.add(job3);
scene.add(job4)

const pokerGeometry = new THREE.PlaneGeometry(32,25,40,40);
const pokerOddsTexture = new THREE.TextureLoader().load('img/poker.png');
const pokerOddsMaterial = new THREE.MeshStandardMaterial({map: pokerOddsTexture});
const poker = new THREE.Mesh(pokerGeometry, pokerOddsMaterial);

scene.add(poker);

poker.position.x += 50;
poker.rotation.x+= 1.55;
poker.position.y += 50;
poker.position.z += 42;


const creativityGeometry = new THREE.PlaneGeometry(38,38,40,40);
const creativityTexture = new THREE.TextureLoader().load('img/paper.png');
const creativityMaterial = new THREE.MeshStandardMaterial({map: creativityTexture});
const creativity = new THREE.Mesh(creativityGeometry, creativityMaterial);

scene.add(creativity);

creativity.position.x -= 60;
creativity.rotation.x += 1.55;
creativity.position.y += 60;
creativity.position.z -= 2;

const onnightGeometry = new THREE.PlaneGeometry(32,48,40,40);
const onnightTexture = new THREE.TextureLoader().load('img/on-night.gif');
const onnightMaterial = new THREE.MeshStandardMaterial({map: onnightTexture});
const onnight = new THREE.Mesh(onnightGeometry, onnightMaterial);

scene.add(onnight);

onnight.position.x += 57;
onnight.rotation.x += 1.55;
onnight.position.y += 60;
onnight.position.z += 2;

const musicGeometry = new THREE.PlaneGeometry(25,25,40,40);
const musicTexture = new THREE.TextureLoader().load('img/evolution_of_music.png');
const musicMaterial = new THREE.MeshStandardMaterial({map: musicTexture});
const music = new THREE.Mesh(musicGeometry, musicMaterial);

scene.add(music);

music.position.x -= 39.6;
music.rotation.x += 1.55;
music.position.y += 40;
music.position.z += 37;

const epGeometry = new THREE.PlaneGeometry(24,24,40,40);
const epTexture = new THREE.TextureLoader().load('img/ep.png');
const epMaterial = new THREE.MeshStandardMaterial({map: epTexture});
const ep = new THREE.Mesh(epGeometry, epMaterial);

const personGeometry = new THREE.PlaneGeometry(50,54,40,40);
const personTexture = new THREE.TextureLoader().load('img/personalprojects.png');
const personMaterial = new THREE.MeshStandardMaterial({map: personTexture});
const person = new THREE.Mesh(personGeometry, personMaterial);

scene.add(person);

person.rotation.x += 1.55;
person.position.y += 40;
person.position.z += 23;

const abGeometry = new THREE.PlaneGeometry(120,40,40,40);
const abTexture = new THREE.TextureLoader().load('img/ab.png');
const abMaterial = new THREE.MeshStandardMaterial({map: abTexture});
const ab = new THREE.Mesh(abGeometry, abMaterial);

scene.add(ab);

ab.rotation.x -= 1.5;
ab.position.z += 16;

const logoGeometry = new THREE.CircleGeometry(10,32);
const linkedinTexture = new THREE.TextureLoader().load('img/linkedin.png');
const linkedinMaterial = new THREE.MeshStandardMaterial({map: linkedinTexture});
const linkedin = new THREE.Mesh(logoGeometry, linkedinMaterial);

scene.add(linkedin);

linkedin.rotation.x -= 1.5;
linkedin.position.z += 50;
linkedin.position.x -= 30;

const githubTexture = new THREE.TextureLoader().load('img/github.png');
const githubMaterial = new THREE.MeshStandardMaterial({map: githubTexture});
const github = new THREE.Mesh(logoGeometry, githubMaterial);

scene.add(github);

github.rotation.x -= 1.5;
github.position.z += 50;

const emailTexture = new THREE.TextureLoader().load('img/e-mail.png');
const emailMaterial = new THREE.MeshStandardMaterial({map: emailTexture});
const email = new THREE.Mesh(logoGeometry, emailMaterial);

scene.add(email);

email.rotation.x -= 1.5;
email.position.z += 50;
email.position.x += 30;

const rayCaster = new THREE.Raycaster();

const mouse = {
  x: undefined,
  y: undefined
}

addEventListener('mousemove', event => {
  mouse.x = event.clientX / innerWidth * 2 - 1;
  mouse.y = -event.clientY / innerHeight * 2 + 1;
});

ep.position.y = t * -0.06 - 43;
ab.position.y = - 65;
linkedin.position.y -= 65;

github.position.y -= 65;
email.position.y -= 65;



function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.rotation.x = 0.005*t;
}
document.body.onscroll = moveCamera


moon.position.z = 30;
moon.position.setX(-10);
scene.add(will);



const planeGeometry = new THREE.PlaneGeometry(400,400,50,50);
const planeMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, flatShading: true, vertexColors: true});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);
planeMesh.position.z -= 40;

const plane2Mesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane2Mesh);
plane2Mesh.rotation.x -= 1.57;
plane2Mesh.position.y -= 70;

const plane3Mesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane3Mesh);
plane3Mesh.position.z += 100;

const plane4Mesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane4Mesh);
plane4Mesh.rotation.x -= 1.57;
plane4Mesh.position.y += 70;

const arr = planeMesh.geometry.attributes.position.array
const randomValues = []
for (let i = 0; i < arr.length; i += 1) {
  if (i % 3 == 0) {
    const x = arr[i];
    const y = arr[i+1];
    const z = arr[i+2];
    arr[i] = x + Math.random() - 0.5;
    arr[i+1] = y + Math.random() - 0.5;
    arr[i+2] = z + Math.random() * 2;
  }
  randomValues.push(Math.random()-0.5);
}

const colors = []
for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
  colors.push(0,0.19,0.4); 
}

let overCreativity = false;
let overMusic = false;
let overOnnight = false;
let overPoker = false;
let overGithub = false;
let overEmail = false;
let overLinkedin = false;

addEventListener('click', event => {

if (overCreativity) {
  window.open("https://github.com/william-toth/lyrical-creativity-score");
} 
if (overPoker) {
  window.open("https://github.com/william-toth/poker-outs");
} 
if (overMusic) {
  window.open("https://github.com/william-toth/Data_Analysis_Evolution_of_Popular_Music");
} 
if (overOnnight) {
  window.open("https://apps.apple.com/us/app/onnight/id1612553554");
}
if (overGithub) {
  window.open("https://github.com/william-toth");
}
if (overLinkedin) {
  window.open("https://www.linkedin.com/in/william-toth-054388198/")
}
if (overEmail) {
  window.location.href = "mailto:william.a.toth.23@dartmouth.edu";
}
});

planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

planeMesh.geometry.attributes.position.originalPostion = planeMesh.geometry.attributes.position.array;

let frame = 0
function animate() {
  frame += 0.004
  requestAnimationFrame(animate);
  rayCaster.setFromCamera(mouse,camera);
  let intersection = [];
  intersection.push(rayCaster.intersectObject(planeMesh));
  intersection.push(rayCaster.intersectObject(plane2Mesh));
  intersection.push(rayCaster.intersectObject(plane3Mesh));
  intersection.push(rayCaster.intersectObject(plane4Mesh));

  let mouseoverCreativity = rayCaster.intersectObject(creativity);
  if (mouseoverCreativity.length > 0) {
    overCreativity = true;
  } else {
    overCreativity = false;
  }
  let mouseoverMusic = rayCaster.intersectObject(music);
  if (mouseoverMusic.length > 0) {
    overMusic = true;
  } else {
    overMusic = false;
  }

  let mouseoverPoker = rayCaster.intersectObject(poker);
  if (mouseoverPoker.length > 0) {
    overPoker = true;
  } else {
    overPoker = false;
  }

  let mouseoverOnnight = rayCaster.intersectObject(onnight);
  if (mouseoverOnnight.length > 0) {
    overOnnight = true;
  } else {
    overOnnight = false;
  }

  let mouseoverGithub = rayCaster.intersectObject(github);
  if (mouseoverGithub.length > 0) {
    overGithub = true;
  } else {
    overGithub = false;
  }

  let mouseoverEmail = rayCaster.intersectObject(email);
  if (mouseoverEmail.length > 0) {
    overEmail = true;
  } else {
    overEmail = false;
  }

  let mouseoverLinkedin = rayCaster.intersectObject(linkedin);
  if (mouseoverLinkedin.length > 0) {
    overLinkedin = true;
  } else {
    overLinkedin = false;
  }

  if (mouseoverCreativity.length > 0 || mouseoverPoker.length > 0 || mouseoverMusic.length > 0 || 
    mouseoverOnnight.length > 0 || mouseoverGithub.length > 0 || 
    mouseoverLinkedin.length > 0 || mouseoverEmail.length > 0) {
    document.body.style.cursor = 'pointer';
  } else {
    document.body.style.cursor = 'default';
  }
  for (let intersects of intersection) {
    if (intersects.length > 0) {
      const {color} = intersects[0].object.geometry.attributes;
  
      color.setX(intersects[0].face.a,0.1);
      color.setY(intersects[0].face.a,0.5);
      color.setZ(intersects[0].face.a,1);
      color.setX(intersects[0].face.b,0.1);
      color.setY(intersects[0].face.b,0.5);
      color.setZ(intersects[0].face.b,1);
      color.setX(intersects[0].face.c,0.1);
      color.setY(intersects[0].face.c,0.5);
      color.setZ(intersects[0].face.c,1);
      color.needsUpdate = true;
  
      const initialColor = {r: 0, g: 0.19, b: 0.4};
      const hoverColor = {
        r: 0.1,
        g: 0.5,
        b: 1
      }
  
      gsap.to(hoverColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        onUpdate: () => {
          color.setX(intersects[0].face.a,hoverColor.r);
          color.setY(intersects[0].face.a,hoverColor.g);
          color.setZ(intersects[0].face.a,hoverColor.b);
          color.setX(intersects[0].face.b,hoverColor.r);
          color.setY(intersects[0].face.b,hoverColor.g);
          color.setZ(intersects[0].face.b,hoverColor.b);
          color.setX(intersects[0].face.c,hoverColor.r);
          color.setY(intersects[0].face.c,hoverColor.g);
          color.setZ(intersects[0].face.c,hoverColor.b);
        }
      })
    }
  }
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.0025;
  torus.rotation.z += 0.005;
  torus2.rotation.x += 0.0025;
  torus2.rotation.y += 0.005;
  torus2.rotation.z += 0.005;
  torus3.rotation.x += 0.005;
  torus3.rotation.y += 0.005;
  torus3.rotation.z += 0.0025;

  const array = planeMesh.geometry.attributes.position.array
  const oriarray = planeMesh.geometry.attributes.position.originalPostion

  for (let i = 0; i < planeMesh.geometry.attributes.position.array.length; i += 3) {
    array[i] = oriarray[i] + Math.cos(frame + randomValues[i]) * 0.02
    array[i+1] = oriarray[i+1] + Math.sin(frame + randomValues[i+1]) * 0.02
  }

  e.rotation.x += Math.cos(frame*7) * 0.001;
  e.rotation.y += Math.sin(frame*7) * 0.001;
  x.rotation.x += Math.cos(frame*4) * 0.00125;
  x.rotation.y += Math.sin(frame*4) * 0.00125;
  p.rotation.x += Math.sin(frame*6) * 0.001;
  p.rotation.y += Math.cos(frame*6) * 0.001;
  e2.rotation.x += Math.cos(frame*7) * 0.001;
  e2.rotation.y += Math.sin(frame*7) * 0.001;
  r.rotation.x += Math.cos(frame*10) * 0.001;
  r.rotation.y += Math.sin(frame*10) * 0.001;
  i.rotation.x += Math.cos(frame*4) * 0.00125;
  i.rotation.y += Math.sin(frame*4) * 0.00125;
  e3.rotation.x += Math.sin(frame*6) * 0.001;
  e3.rotation.y += Math.cos(frame*6) * 0.001;
  n.rotation.x += Math.cos(frame*7) * 0.001;
  n.rotation.y += Math.sin(frame*7) * 0.001;
  c.rotation.x += Math.sin(frame*6) * 0.001;
  c.rotation.y += Math.cos(frame*6) * 0.001;
  e4.rotation.x += Math.cos(frame*7) * 0.001;
  e4.rotation.y += Math.sin(frame*7) * 0.001;

  photo1.rotation.x += Math.cos(frame*7) * 0.002;
  photo1.rotation.y += Math.sin(frame*7) * 0.002;
  photo2.rotation.x += Math.cos(frame*10) * 0.002;
  photo2.rotation.y += Math.sin(frame*10) * 0.002;
  photo3.rotation.x += Math.cos(frame*4) * 0.002;
  photo3.rotation.y += Math.sin(frame*4) * 0.002;
  photo4.rotation.x += Math.cos(frame*10) * 0.002;
  photo4.rotation.y += Math.sin(frame*10) * 0.002;
  photo5.rotation.x += Math.cos(frame*2) * 0.002;
  photo5.rotation.y += Math.sin(frame*2) * 0.002;
  photo6.rotation.x += Math.cos(frame*7) * 0.002;
  photo6.rotation.y += Math.sin(frame*7) * 0.002;
  poker.rotation.x += Math.cos(frame*7) * 0.0001;
  poker.rotation.y += Math.sin(frame*7) * 0.0001;
  poker.position.z += Math.sin(frame*10) * 0.002;
  creativity.rotation.x += Math.cos(frame*4) * 0.0002;
  creativity.rotation.y += Math.sin(frame*4) * 0.0002;
  creativity.position.z += Math.sin(frame*10) * 0.002;
  onnight.rotation.x += Math.cos(frame*4) * 0.0002;
  onnight.rotation.y += Math.sin(frame*4) * 0.0002;
  onnight.position.z += Math.sin(frame*10) * 0.002;
  music.rotation.x += Math.cos(frame*7) * 0.0001;
  music.rotation.y += Math.sin(frame*7) * 0.0001;
  music.position.z += Math.sin(frame*10) * 0.002;
  ep.position.z += Math.cos(frame*8.5) * 0.01;
  ab.position.y += Math.sin(frame*6) * 0.01;
  me.rotation.x += Math.cos(frame*7) * 0.00065;
  me.rotation.y += Math.sin(frame*7) * 0.00065;
  will.position.z += Math.sin(frame*8.5) * 0.05;
  torus.position.z += Math.sin(frame*8.5) * 0.05;
  torus2.position.z += Math.sin(frame*8.5) * 0.05;
  torus3.position.z += Math.sin(frame*8.5) * 0.05;

  job1.rotation.x += Math.cos(frame*7) * 0.0003;
  job1.rotation.y += Math.sin(frame*7) * 0.0003;
  job2.rotation.x += Math.sin(frame*6) * 0.0003;
  job2.rotation.y += Math.cos(frame*6) * 0.0003;
  job3.rotation.x += Math.sin(frame*7) * 0.0003;
  job3.rotation.y += Math.cos(frame*7) * 0.0003;
  job4.rotation.x += Math.cos(frame*4) * 0.0003;
  job4.rotation.y += Math.sin(frame*4) * 0.0003;

  github.rotation.x += Math.cos(frame*7) * 0.0012;
  github.rotation.y += Math.sin(frame*7) * 0.0012;
  email.rotation.x += Math.sin(frame*6) * 0.0012;
  email.rotation.y += Math.cos(frame*6) * 0.0012;
  linkedin.rotation.x += Math.sin(frame*7) * 0.0012;
  linkedin.rotation.y += Math.cos(frame*7) * 0.0012;

  


  planeMesh.geometry.attributes.position.needsUpdate = true;
  plane2Mesh.geometry.attributes.position.needsUpdate = true;

  will.rotation.y += 0.001;
  will.rotation.z += 0.005;

  controls.update;

  renderer.render(scene,camera);
}

animate();