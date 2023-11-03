import {OrbitControls} from '@react-three/drei'
import FurMesh from "./FurMesh"
import {Perf} from 'r3f-perf'
import {useControls} from 'leva'


export default function Experience() {
    const {layers} = useControls("Settings", {
        layers: {
            value: 42,
            step: 1,
            min: 1,
            max: 142
        }
    });

    return <>

        <Perf position="top-left" />
        <OrbitControls />
        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04} />
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />

        {[...Array(layers)].map((_, i) => <FurMesh height={i / layers} key={i} />)}
    </>;
}
