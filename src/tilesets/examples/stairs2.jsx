import tilesetRotator from "../tilesetRotator";
import {useGLTF} from "@react-three/drei";

const Plane = ({color, ...props}) => {
    const { nodes, materials } = useGLTF("models/stairs_plane.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                scale={0.5}
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={materials.Material}
            />
        </group>
    );
}


const Stairs = ({color, ...props}) => {
    const { nodes, materials } = useGLTF("models/stairs_stairs.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                scale={0.5}
                castShadow
                receiveShadow
                geometry={nodes.stairs.geometry}
                material={materials.Material}
            />
        </group>
    );
}

useGLTF.preload("models/stairs_stairs.glb");
useGLTF.preload("models/stairs_plane.glb");

export default tilesetRotator({
    "Air": {
        constraints: ["none","none","none","none","none","none"], //  +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 100,
        rotateOn: ""
    },
    "floor": {
        constraints: ["floor#1234", "floor#1234", "none", "none", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Plane color={"#565656"}/>,
        frequency: 1,
        rotateOn: "123456"
    },
    "stairs": {
        constraints: ["floor#1234", "none", "none", "floor#3412", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Stairs color={"#565656"}/>,
        frequency: 1,
        rotateOn: "123456"
    },
});
