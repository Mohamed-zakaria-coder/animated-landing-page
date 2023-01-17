const light = new THREE.AmbientLight(0xffffff, 40);
const scene = new THREE.Scene();
scene.add(light);
const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;

const loader = new THREE.GLTFLoader();
loader.load("./model/scene.gltf", (gltf) => {
  let model = gltf.scene;
  model.scale.set(20, 20, 20);
  gsap.to(model.position, {
    x: -6,
    duration: 0,
  });
  // gsap.to(model.scale, {
  //     x: 80,
  //     y: 80,
  //     z: 80,
  //     duration: 2,
  //     ease: "back.out(1.7)"
  //   });

  gsap.to(model.rotation, {
    y: 5.7,
    duration: 1,
    delay: 1,
  });
  gsap.to(model.rotation, {
    x: 0.5,
    duration: 1,
    delay: 2,
  });
  gsap.to(model.position, {
    x: 0.5,
    y: 0,
    duration: 1,
    delay: 0.5,
  });
  // gsap.to(model.scale, {
  //   x: 100,
  //   y: 100,
  //   z: 100,
  //   duration: 1,
  //   delay: 2,
  //   ease: "back.out(1.7)"
  // });
  if (window.innerWidth < 768 && window.innerWidth > 400) {
    gsap.to(model.scale, {
      x: 60,
      y: 60,
      z: 60,
      duration: 1,
      delay: 2,
      ease: "back.out(1.7)",
    });
  } else if (window.innerWidth > 769) {
    gsap.to(model.scale, {
      x: 100,
      y: 100,
      z: 100,
      duration: 1,
      delay: 2,
      ease: "back.out(1.7)",
    });
  } else {
    gsap.to(model.scale, {
      x: 30,
      y: 30,
      z: 30,
      duration: 1,
      delay: 2,
      ease: "back.out(1.7)",
    });
    gsap.to(model.position, {
      x: 0.1,
      y: 0,
      duration: 1,
      delay: 0.5,
    });
  }
  function handleResize() {
    if (this.window.innerWidth < 768 && this.window.innerWidth > 400) {
      gsap.to(model.scale, {
        x: 60,
        y: 60,
        z: 60,
        duration: 1,
        delay: 2,
        ease: "back.out(1.7)",
      });
    } else if (this.window.innerWidth > 769) {
      gsap.to(model.scale, {
        x: 100,
        y: 100,
        z: 100,
        duration: 1,
        delay: 2,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(model.scale, {
        x: 30,
        y: 30,
        z: 30,
        duration: 1,
        delay: 2,
        ease: "back.out(1.7)",
      });
      gsap.to(model.position, {
        x: 0.1,
        y: 0,
        duration: 1,
        delay: 0.5,
      });
    }
  }
  window.addEventListener("resize", handleResize);
  scene.add(model);
});
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClear;
let canvasContainer = document.getElementById("canvas");

renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xf6f6f8)
canvasContainer.appendChild(renderer.domElement);
// document.body.appendChild(renderer.domElement);
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01; cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
let coverHeading = document.getElementById("cover-heading");
let coverText = document.getElementById("cover-text");
let spanishBtn = document.getElementById("spanish");
let englishBtn = document.getElementById("english");
spanishBtn.addEventListener("click", function () {
  coverHeading.textContent = "El mejor reloj";
  coverText.textContent = "Lorem In Spanish -_-";
});
englishBtn.addEventListener("click", function () {
  coverHeading.textContent = "The Best Watch ";
  coverText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et
    rem similique dolorem doloribus qui dolor, est, quis sit cum nihil
    beatae, vel nisi. Ipsum eius vero in ab distinctio?`;
});
let canvas = document.getElementsByTagName("canvas")[0];
