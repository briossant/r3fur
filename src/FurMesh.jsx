import * as THREE from 'three';
import {TorusKnot} from '@react-three/drei'
import {useControls} from 'leva'

export default function FurMesh({height}) {

    const {resolution, spacing, gravity, color, radius} = useControls("Settings", {
        resolution: {
            value: 100,
            step: 1,
            min: 10,
            max: 300
        },
        spacing: {
            value: 0.3,
            step: 0.01,
            min: 0.01,
            max: 2
        },
        gravity: {
            value: 0.1,
            step: 0.01,
            min: 0,
            max: 0.42
        },
        color: {
            value: "#8ffffd",
        },
        radius: {
            value: 4,
            step: 0.1,
            min: 0,
            max: 20
        }
    });
    const material = new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.NormalBlending,
        //depthTest: false,
        side: THREE.DoubleSide,
        uniforms: {
            u_resolution: {value: new THREE.Vector2(10 * resolution, resolution)},
            u_height: {value: height},
            u_spacing: {value: spacing},
            u_gravity: {value: gravity},
            u_color: {value: new THREE.Color(color)},
            u_radius: {value: radius},
        },

        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent

    });

    return <>
        <TorusKnot args={[1, 0.4, 128, 16]} material={material} />
    </>;
}
