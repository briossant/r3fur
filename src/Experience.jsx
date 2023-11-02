import {OrbitControls, Box} from '@react-three/drei'
import * as THREE from 'three';
import FurMesh from "./FurMesh"
import {Perf} from 'r3f-perf'


const layers = 82;

export default function Experience() {


    return <>

        <Perf position="top-left" />
        <OrbitControls />
        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04} />
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />

        {[...Array(layers)].map((_, i) => <FurMesh height={i / layers} key={i} />)}
    </>;
}
