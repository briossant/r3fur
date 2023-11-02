import tilesetRotatorOld from "./tilesetRotatorOld";

export default class TileSet {

    constructor(tileSet, failsafeTile, borderConstraints = [], forcedStart = []) {
        this.tileSet = tileSet;
        this.failsafeTile = failsafeTile;
        this.borderConstraints = borderConstraints;
        this.forcedStart = forcedStart;
        tilesetRotatorOld(this.tileSet);
    }

    getTileNamesList = () => {
        return Object.keys(this.tileSet);
    }

    getTile = (tileName) => {
        return this.tileSet[tileName];
    }
}