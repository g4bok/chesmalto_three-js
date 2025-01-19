import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scenePath = "/public/models/ImageToStl.com_human_base_meshes_bundle.gltf";

export const LoadGLTFByPath = (scene) => {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(scenePath, (gltf) => {

            scene.add(gltf.scene);

            resolve();
        }, undefined, (error) => {
            reject(error);
        })
    })
};