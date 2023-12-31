import {OrbitControls, Sky} from '@react-three/drei'
import {useThree, useFrame} from '@react-three/fiber';
import * as THREE from 'three';
import FurMesh from "./FurMesh"
import {Perf} from 'r3f-perf'
import {useControls} from 'leva'

export default function Experience() {
    const {layers, stiffness} = useControls("Settings", {
        layers: {
            value: 42,
            step: 1,
            min: 1,
            max: 142
        },
        stiffness: {
            value: 2,
            min: 1,
            max: 10,
            step: 1
        }
    });
    const {camera} = useThree();
    const arr = [...Array(layers)].map(() => new THREE.Vector3(0, 0, 0));

    const mouse = (new THREE.Vector3(0, 0, 0));
    window.addEventListener("mousemove", (event) => {
        const dir = (new THREE.Vector3(event.clientX / window.innerWidth * 2 - 1, -event.clientY / window.innerHeight * 2 + 1, 0.5));
        dir.unproject(camera);
        dir.sub(camera.position).normalize()
        const dist = -camera.position.z / dir.z;
        mouse.copy(camera.position).add(dir.multiplyScalar(dist));
    });

    useFrame(() => {
        const offset = stiffness;
        for (let i = arr.length - 1; i > 0; i--)
            arr[i].copy(arr[Math.max(i - offset, 0)]);
        arr[0].copy(mouse);
    });


    return <>

        <Sky />
        {/*<Perf position="top-left" />*/}
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
