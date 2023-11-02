import * as THREE from 'three';
import {Sphere, TorusKnot} from '@react-three/drei'

export default function FurMesh({height}) {
    const material = new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.NormalBlending,
        //depthTest: false,
        side: THREE.DoubleSide,
        uniforms: {
            u_resolution: {value: new THREE.Vector2(1000, 100)},
            u_height: {value: height}
        },

        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent

    });

    return <>
        <TorusKnot material={material} />
    </>;
}
