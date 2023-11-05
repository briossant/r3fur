import {OrbitControls} from '@react-three/drei'
import {useThree, useFrame} from '@react-three/fiber';
import * as THREE from 'three';
import FurMesh from "./FurMesh"
import {Perf} from 'r3f-perf'
import {useControls} from 'leva'
import {useState} from 'react';

export default function Experience() {
    const {layers} = useControls("Settings", {
        layers: {
            value: 42,
            step: 1,
            min: 1,
            max: 142
        }
    });
    const {camera} = useThree();
    const [arr, setArr] = useState([...Array(layers)].fill(new THREE.Vector3(0, 0, 0)));

    const [mouse, setMouse] = useState(new THREE.Vector3(0, 0, 0));
    window.addEventListener("mousemove", (event) => {
        setMouse(new THREE.Vector3(event.clientX / window.innerWidth * 2 - 1, 0, -event.clientY / window.innerHeight * 2 - 1));
    });

    useFrame(() => {
        const narr = [...Array(layers)].fill(new THREE.Vector3(0, 0, 0));
        for (let i = Math.min(arr.length, layers - 1); i > 0; i--)
            narr[i] = arr[i - 1];
        narr[0] = mouse.clone();
        console.log(narr[0])
        setArr(narr);
    });


    return <>

        <Perf position="top-left" />
        <OrbitControls />
        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04} />
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />
        <group>
            {arr.map((pos, i) =>
                <FurMesh height={i / layers} position={pos} key={i} >
                    <boxGeometry />
                    <torusKnotGeometry args={[1, 0.4, 128, 16]} />
                </FurMesh>
            )}
        </group>
    </>;
}
