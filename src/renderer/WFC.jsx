import {Float, OrbitControls} from '@react-three/drei'
import {useEffect, useState} from "react";
import WFC from "../wfc/WFC";
import GridDisplayer from "./GridDisplayer";
import {button, useControls} from 'leva'

export default function WfcEl({tileset, width, height, depth, offset}) {
    const [grid, setGrid] = useState([]);
    const wfc = new WFC(tileset, width, height, depth);

    useEffect(() => {
        wfc.run(tileset.forcedStart);
        setGrid(wfc.getGrid());
    }, [width, height, depth]);

    return <>
        <GridDisplayer tileset={tileset} grid={grid} offset={offset}/>
    </>
}