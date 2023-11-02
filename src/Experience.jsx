import {OrbitControls, Box} from '@react-three/drei'
import * as THREE from 'three';


export default function Experience() {

    const material = new THREE.ShaderMaterial({

        uniforms: {
            u_resolution: {value: new THREE.Vector2(100, 100)}

        },

        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent

    });

    return <>

        {/*<Perf position="top-left" />*/}


        {/*<axesHelper args={[20, 20, 20]}/>*/}
        <OrbitControls />
        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04} />
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />

        <Box material={material} />
    </>;
}
