import * as THREE from 'three';
const SKYBOX_URL = ['row-2-column-1.png', 'row-2-column-3.png', 'row-1-column-4.png', 'row-3-column-4.png', 'row-2-column-4.png', 'row-2-column-2.png'];
function getSkyBox(index){
    let path = `/skybox/${index}/`;
    return new THREE.CubeTextureLoader().setPath(path).load(SKYBOX_URL);
}
const SKYBOXS = [
    getSkyBox(0),
    getSkyBox(1)
]
export {
    getSkyBox,
    SKYBOXS
}