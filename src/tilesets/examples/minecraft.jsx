import tilesetRotator from "../tilesetRotator";

const Cube = ({color, ...props}) => <mesh {...props}>
    <boxGeometry/>
    <meshToonMaterial color={color}/>
</mesh>;


export default tilesetRotator({
    "Air": {
        constraints: ["air", "air", "air", "air", "air", "air"], //  +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 1,
        rotateOn: ""
    },
    "grass": {
        constraints: [["underground", "air"], "air", "air",
            "underground", ["underground", "air"], "underground"], //  +X -X +Y -Y +Z -Z
        instantiate: <Cube color={"#54853e"}/>,
        frequency: 1,
        rotateOn: "y"
    },
    "dirt": {
        constraints: ["underground", "underground", "underground",
            "underground", "underground", "underground"], //  +X -X +Y -Y +Z -Z
        instantiate: <Cube color={"#7a5643"}/>,
        frequency: 1,
        rotateOn: ""
    },
});
