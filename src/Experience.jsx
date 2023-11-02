import {OrbitControls, Box} from '@react-three/drei'

export default function Experience() {

    return <>

        {/*<Perf position="top-left" />*/}


        {/*<axesHelper args={[20, 20, 20]}/>*/}

        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04} />
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />

        <Box >
            <meshStandardMaterial />
        </Box>
    </>;
}
