import {
    Buttons, Cross,
    CubicMess,
    Empty,
    Floor,
    FloorCon,
    Flower,
    FlowerBall,
    FlowerBottomBall,
    Lcon,
    Screen, Twist
} from "./gameboyModels";
import TileSet from "../../tilesets/TileSet";

const all_con = ["none"];
for (let i = 0; i < 12; i++) {
    all_con.push("a" + i)
}

const tileSet = {
    "Air": {
        constraints: [all_con, all_con, all_con, all_con, all_con, all_con], //  +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 500,
        rotateOn: ""
    },
    "Screen": {
        constraints: [["side", "none"], ["side", "none"], ["side", "none"], "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Screen/>,
        frequency: 1,
        rotateOn: "y"
    },
    "Empty": {
        constraints: [["side", "none"], ["side", "none"], "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Empty/>,
        frequency: 5,
        rotateOn: "y"
    },
    "Buttons": {
        constraints: [["side", "none"], ["side", "none"], "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Buttons/>,
        frequency: 5,
        rotateOn: "y"
    },
    "Cross": {
        constraints: [["side", "none"], ["side", "none"], "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Cross/>,
        frequency: 5,
        rotateOn: "y"
    },
    "Twist": {
        constraints: ["none", "none", "console#0101", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Twist/>,
        frequency: 5,
        rotateOn: "y"
    },
    "Lcon": {
        constraints: ["none", "none", "console#1010", "none", "console#1010", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Lcon/>,
        frequency: 3,
        rotateOn: "xy"
    },
    "Flower": {
        constraints: ["none", "none", ["none", "flower"], "flower", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Flower/>,
        frequency: 3,
        rotateOn: "y"
    },
    "FlowerBall": {
        constraints: ["none", "none", "flower", "flower", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <FlowerBall/>,
        frequency: 3,
        rotateOn: ""
    },
    "FlowerBottomBall": {
        constraints: ["none", "none", "flower", "none", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <FlowerBottomBall/>,
        frequency: 3,
        rotateOn: ""
    },
    "CubicMess": {
        constraints: ["none", "side", "none", "none", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <CubicMess/>,
        frequency: 1,
        rotateOn: "xyz"
    }
}

export default class Gameboy extends TileSet {
    constructor() {
        super(tileSet, "Air", ["ground", "none"]);
    }
};
