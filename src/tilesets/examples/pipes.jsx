import tilesetRotator from "../tilesetRotator";

const orange = "#273B09";
const green = "#002400";
const red = "#58641D";

function Line ({color, ...props}) {
    return <mesh {...props} scale={[1,0.3,0.3]}>
        <boxGeometry />
        <meshToonMaterial color={color}/>
    </mesh>;
}

function Turn ({color, ...props}) {
    return <group {...props}>
        <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
            <boxGeometry />
            <meshToonMaterial color={color}/>
        </mesh>
        <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
            <boxGeometry />
            <meshToonMaterial color={color}/>
        </mesh>
    </group>;
}

export default tilesetRotator({
    "Air": {
        constraints: ["None", "None", "None", "None", "None", "None"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: <></>, // the r3f model to display
        frequency: 40,
        rotateOn: ""
    },

    "Line Red": {
        constraints: ["Red connection", "Red connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <Line color={red}/>,
        frequency: 1,
        rotateOn: "1235"
    },
    "Turn Red": {
        constraints: ["Red connection", "None", "Red connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <Turn color={red}/>,
        frequency: 1,
        rotateOn: "1235"
    },

    "Line Yellow": {
        constraints: ["Yellow connection", "Yellow connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <Line color={orange}/>,
        frequency: 1,
        rotateOn: "13"
    },
    "Turn Yellow": {
        constraints: ["Yellow connection", "None", "Yellow connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <Turn color={orange}/>,
        frequency: 1,
        rotateOn: "13"
    },

    "Line Green": {
        constraints: ["Green connection", "Green connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <Line color={green}/>,
        frequency: 1,
        rotateOn: "13"
    },
    "Turn Green": {
        constraints: ["Green connection", "None", "Green connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <Turn color={green}/>,
        frequency: 1,
        rotateOn: "13"
    }
});

