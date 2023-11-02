import tilesetRotator from "../tilesetRotator";

const Cube = ({color, ...props}) => <mesh {...props}>
    <boxGeometry/>
    <meshNormalMaterial color={color}/>
</mesh>;

const Stairs = ({color, ...props}) => <group {...props} rotation={[-Math.PI/2,0,0]}>
    <mesh scale={[0.5,1,0.5]} position={[-0.25,0,-0.25]}>
        <boxGeometry/>
        <meshNormalMaterial color={color}/>
    </mesh>
    <mesh scale={[0.25,1,0.25]} position={[0.12,0,-0.37]}>
        <boxGeometry/>
        <meshNormalMaterial color={color}/>
    </mesh>
    <mesh scale={[0.25,1,0.25]} position={[-0.37,0,0.12]}>
        <boxGeometry/>
        <meshNormalMaterial color={color}/>
    </mesh>
</group>;

export default tilesetRotator({
    "Air": {
        constraints: [["air1", "air2"], ["air1", "air2"], ["air1", "air2"], ["air1", "air2"], ["air1", "air2"], ["air1", "air2"]], //  +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 100,
        rotateOn: ""
    },
    "floor": {
        constraints: ["air1", "air1", "floor", "floor", ["floor", "air1"], ["floor", "air1"]], //  +X -X +Y -Y +Z -Z
        instantiate: <Cube color={"#565656"}/>,
        frequency: 1,
        rotateOn: "xyz"
    },
    "stairs": {
        constraints: ["air1", "floor", "air1", "floor", "air2", "air2"], //  +X -X +Y -Y +Z -Z
        instantiate: <Stairs color={"#565656"}/>,
        frequency: 2,
        rotateOn: "xyz"
    },
});
