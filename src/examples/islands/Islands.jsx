import TileSet from "../../tilesets/TileSet";

const Plane = (color) => <mesh>
    <planeGeometry/>
    <meshToonMaterial color={color}/>
</mesh>


const tileSet = {
    "Water": {
        constraints: ["water", "water", "air", "underwater", "water", "water"], // : +X -X +Y -Y +Z -Z
        instantiate: <Plane color={"blue"}/>,
        frequency: 1,
        rotateOn: ""
    },
    "Air": {
        constraints: ["air", "air", "air", "air", "air", "air"], // : +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 1,
        rotateOn: ""
    },
    "Inland": {
        constraints: ["inland", "inland", "inland", "inland", "inland", "inland"], // : +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 1,
        rotateOn: ""
    },
    "Coast": {
        constraints: ["water", "inland", "air", "underwater", "coast", "coast"], // : +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 1,
        rotateOn: "y"
    }
}

export default class TileSetTemplate extends TileSet {
    constructor() {
        super(tileSet,  "Tile name",["air", "water", "inland", "underwater"]);
    }
}
