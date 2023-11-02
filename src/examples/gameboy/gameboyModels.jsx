import {useGLTF} from "@react-three/drei";

export function Screen(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyScreen.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <group rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={materials["Material.003"]}
                />
            </group>
        </group>
    );
}

export function Buttons(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyButtons.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.buttonWgitePlastic}
                scale={[1, 1, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Red}
                position={[-0.368, -0.092, 0.088]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.254}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials.Red}
                position={[0.35, 0.192, 0.088]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.254}
            />
        </group>
    );
}

export function Lcon(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyL.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.L_connector.geometry}
                material={materials.Material}
                scale={[1, 1, 0.25]}
            />
        </group>
    );
}

export function FloorCon(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyFloorCon.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor_con.geometry}
                material={materials.WhitePlastic}
            />
        </group>
    );
}

export function Floor(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyFloor.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={materials.WhitePlastic}
                position={[0, -0.5, 0]}
                scale={[1, 0.5, 1]}
            />
        </group>
    );
}

export function Flower(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/Flower.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flower.geometry}
                material={materials["Material.002"]}
                scale={[0.1, 1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flower001.geometry}
                material={materials["Material.002"]}
                position={[-0.349, -0.195, -0.119]}
                rotation={[-0.043, -0.255, 0.732]}
                scale={[0.06, 0.596, 0.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flower002.geometry}
                material={materials["Material.002"]}
                position={[-0.087, -0.27, 0.318]}
                rotation={[-0.278, 1.362, 0.851]}
                scale={[0.06, 0.596, 0.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flower003.geometry}
                material={materials["Material.002"]}
                position={[-0.091, 0.003, -0.331]}
                rotation={[-0.127, -1.233, 0.624]}
                scale={[0.049, 0.487, 0.049]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flower004.geometry}
                material={materials["Material.002"]}
                position={[0.277, -0.392, -0.101]}
                rotation={[-3.095, -0.429, -2.379]}
                scale={[0.049, 0.487, 0.049]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flower005.geometry}
                material={materials["Material.002"]}
                position={[0.286, 0.104, 0.334]}
                rotation={[-3.005, 0.783, -2.453]}
                scale={[0.06, 0.596, 0.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001.geometry}
                material={materials["Material.003"]}
                position={[-0.654, 0.263, -0.211]}
                scale={0.419}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere002.geometry}
                material={materials["Material.003"]}
                position={[-0.194, 0.192, 0.664]}
                scale={0.419}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere003.geometry}
                material={materials["Material.003"]}
                position={[0.546, 0.011, -0.208]}
                scale={0.419}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere004.geometry}
                material={materials["Material.003"]}
                position={[0.469, 0.488, 0.632]}
                scale={0.419}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere005.geometry}
                material={materials["Material.003"]}
                position={[-0.141, 0.247, -0.589]}
                scale={0.419}
            />
        </group>
    );
}

export function FlowerBall(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/FlowerBall.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere_1.geometry}
                material={materials["Material.002"]}
            />
        </group>
    );
}

export function FlowerBottomBall(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/FlowerBottomBall.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere002.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere002_1.geometry}
                material={materials["Material.002"]}
            />
        </group>
    );
}

export function CubicMess(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/cubicMess.glb");
    return (
        <group {...props} scale={1 + Math.random()*0.1} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.CubicMess2001.geometry}
                material={materials.transparent}
                position={[-0.9, -0.9, 0.9]}
            />
        </group>
    );
}

export function Empty(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyEmpty.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.nothing.geometry}
                material={materials.WhitePlastic}
                position={[-0.004, 0, 0]}
                scale={[1, 1, 0.25]}
            />
        </group>
    );
}

export function Cross(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyCross.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cross.geometry}
                material={materials.WhitePlastic}
                position={[-0.004, 0, 0]}
                scale={[1, 1, 0.25]}
            />
            <group position={[0, 0, -0.303]} scale={0.125}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials.black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011_1.geometry}
                    material={materials.black}
                />
            </group>
        </group>
    );
}

export function Twist(props) {
    const { nodes, materials } = useGLTF("./models/gameboy/gameboyTwist.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.twsit.geometry}
                material={materials.WhitePlastic}
                position={[-0.004, 0, 0]}
                scale={[1, 1, 0.25]}
            />
        </group>
    );
}

useGLTF.preload("./models/gameboy/gameboyTwist.glb");
useGLTF.preload("./models/gameboy/gameboyCross.glb");
useGLTF.preload("./models/gameboy/gameboyEmpty.glb");
useGLTF.preload("./models/gameboy/cubicMess.glb");
useGLTF.preload("./models/gameboy/FlowerBottomBall.glb");
useGLTF.preload("./models/gameboy/FlowerBall.glb");
useGLTF.preload("./models/gameboy/Flower.glb");
useGLTF.preload("./models/gameboy/gameboyFloor.glb");
useGLTF.preload("./models/gameboy/gameboyFloorCon.glb");
useGLTF.preload("./models/gameboy/gameboyL.glb");
useGLTF.preload("./models/gameboy/gameboyButtons.glb");
useGLTF.preload("./models/gameboy/gameboyScreen.glb");


