import * as THREE from 'three'

export const GenerateInitMaterials = (colorsMaterial) => {
    const falloutBoyTexture = new THREE.TextureLoader().load("/FalloutBoy.png");
  falloutBoyTexture.flipY = false;


    const cristalMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x8c8c8c,
        metalness: 0.0,
        roughness: 0.2,
        transparent: true,
        opacity: 1,
        envMapIntensity: 1.0,
        transmission: 1,
      });
    
      const sodaMaterial = new THREE.MeshStandardMaterial({
        color: 0x000,
        roughness: 1,
        opacity: 1,
        metalness: 1,
        transparent: false,
      });

      const brandMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
        metalness: 1,
        envMapIntensity: 1,
        transparent: true,
        map: falloutBoyTexture,
      });
    
      return { cristalMaterial, sodaMaterial, brandMaterial }
}


export const LoadTextures = (imagePaths) => {
  const textureLoader = new THREE.TextureLoader();
  const textures = {};

  imagePaths.forEach((img) => {
    const path = `/${img}.png`;
    const texture = textureLoader.load(path);
    texture.flipY = false;
    textures[img] = texture;
  });

  return textures;
};

export const GenerateAnimations = (scene, colors, cristalMaterial, sodaMaterial, brandMaterial, textures) => {
  const Animations = [// Init Animations - Page 0
  {
    target: document.getElementById("Principal1"),
    pointTime: 0.1,
    animationsProperties: {
      opacity: 1,
      left: "15%",
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("Principal2"),
    pointTime: 0.1,
    animationsProperties: {
      opacity: 1,
      left: "75%",
      onUpdate: () => {},
    },
  },
  {
    target: scene.getObjectByName("BottleGroup").position,
    pointTime: 0,
    animationsProperties: {
      x: 0,
      onUpdate: () => {},
    },
  },
  {
    target: scene.getObjectByName("BottleGroup").rotation,
    pointTime: 0,
    animationsProperties: {
      y: 8,
      onUpdate: () => {},
    },
  },
  {
    target: colors,
    pointTime: 0,
    animationsProperties: {
      cristal: "#8c8c8c",
      soda: "#000",
      onUpdate: () => {
        cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
        cristalMaterial.needsUpdate = true;

        sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
        sodaMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: colors,
    pointTime: 0.5,
    animationsProperties: {
      onUpdate: () => {
        brandMaterial.map = textures["FalloutBoy"];
        brandMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: document.getElementById("bg_container"),
    pointTime: 0.1,
    animationsProperties: {
      background: "#00FFFF",
    },
  },
  {
    target: document.getElementById("Principal1"),
    pointTime: 1,
    animationsProperties: {
      opacity: 0,
      left: "70%",
      duration: 0.9,
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("Principal2"),
    pointTime: 1,
    animationsProperties: {
      opacity: 0,
      left: "45%",
      duration: 0.9,
      onUpdate: () => {},
    },
  },

  // Nuka Cola - Page 1
  {
    target: scene.getObjectByName("BottleGroup").position,
    pointTime: 1,
    animationsProperties: {
      x: 1,
      onUpdate: () => {},
    },
  },
  {
    target: scene.getObjectByName("BottleGroup").rotation,
    pointTime: 1,
    animationsProperties: {
      y: Math.PI * 2,
      onUpdate: () => {},
    },
  },
  {
    target: colors,
    pointTime: 1,
    animationsProperties: {
      cristal: "#555555",
      soda: "#000000",
      onUpdate: () => {
        cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
        cristalMaterial.needsUpdate = true;

        sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
        sodaMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: colors,
    pointTime: 0.75,
    animationsProperties: {
      onUpdate: () => {
        brandMaterial.map = textures["Classic"];
        brandMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: document.getElementById("Classic_Card"),
    pointTime: 1.5,
    animationsProperties: {
      opacity: 1,
      left: "25%",
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("bg_container"),
    pointTime: 1.1,
    animationsProperties: {
      background: "#F37070",
    },
  },
  //   Quantum Cola - Page 2
  {
    target: scene.getObjectByName("BottleGroup").position,
    pointTime: 2,
    animationsProperties: {
      x: -1,
      onUpdate: () => {},
    },
  },
  {
    target: scene.getObjectByName("BottleGroup").rotation,
    pointTime: 2,
    animationsProperties: {
      y: -Math.PI * 2,
      onUpdate: () => {},
    },
  },
  {
    target: colors,
    pointTime: 2,
    animationsProperties: {
      cristal: "#108587",
      soda: "#D0FFFF",
      onUpdate: () => {
        cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
        cristalMaterial.needsUpdate = true;

        sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
        sodaMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: colors,
    pointTime: 2.5,
    animationsProperties: {
      onUpdate: () => {
        brandMaterial.map = textures["Quantum"];
        brandMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: document.getElementById("Quantum_Card"),
    pointTime: 2.25,
    animationsProperties: {
      opacity: 1,
      left: "65%",
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("Classic_Card"),
    pointTime: 2.45,
    animationsProperties: {
      opacity: 0,
      left: "50%",
      duration: 0.5,
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("bg_container"),
    pointTime: 2.05,
    animationsProperties: {
      background: "#71C4F4",
    },
  },
  // Sunset Sarsaparrilla - Page 3
  {
    target: scene.getObjectByName("BottleGroup").position,
    pointTime: 3,
    animationsProperties: {
      x: 1,
      onUpdate: () => {},
    },
  },
  {
    target: scene.getObjectByName("BottleGroup").rotation,
    pointTime: 3,
    animationsProperties: {
      y: Math.PI * 2,
      onUpdate: () => {},
    },
  },
  {
    target: colors,
    pointTime: 3.05,
    animationsProperties: {
      cristal: "#7E3810",
      soda: "#602A0C",
      onUpdate: () => {
        cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
        cristalMaterial.needsUpdate = true;

        sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
        sodaMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: colors,
    pointTime: 3.5,
    animationsProperties: {
      onUpdate: () => {
        brandMaterial.map = textures["Sunset"];
        brandMaterial.needsUpdate = true;
      },
    },
  },
  {
    target: document.getElementById("Sunset_Card"),
    pointTime: 3.25,
    animationsProperties: {
      opacity: 1,
      left: "25%",
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("Quantum_Card"),
    pointTime: 3.25,
    animationsProperties: {
      opacity: 0,
      left: "50%",
      duration: 0.5,
      onUpdate: () => {},
    },
  },
  {
    target: document.getElementById("bg_container"),
    pointTime: 3.05,
    animationsProperties: {
      background: "#F5C771",
    },
  },
];
  return Animations;
}