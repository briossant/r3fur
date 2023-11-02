import TileSet from "../TileSet";

const tileSet = {
    "Tile name": {
        constraints: ["connector name", "connector name", "connector name",
            "connector name", "connector name", "connector name"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: <></>, // the r3f model to display
        frequency: 1, // integer, the higher the more the tile will appear
        rotateOn: "xyz" // the rotation axis for tilesetRotator
    }
}

export default class TileSetTemplate extends TileSet {
    constructor() {
        super(tileSet,  "Tile name",["connector name"]);
    }
}
