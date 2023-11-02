import {getRdmInt} from "./utilities";


export default class {

    //neighbours
    neighbours = [...Array(6)];

    constructor(tileSet) {
        this.collapsed = false;
        this.tileSet = tileSet;
        this.tiles = tileSet.getTileNamesList();
        this.tile = null;
        this.entropy = 0;
        this.updateEntropie();
    }

    updateEntropie = () => {
        this.entropy = 0;
        this.tiles.forEach(name => {
            this.entropy += Math.log2(1+this.tileSet.getTile(name).frequency);
        });
    }

    collapse = () => {
        this.collapsed = true;
        if (this.tiles.length === 1) {
            this.tile = this.tiles[0];
            return;
        }
        const hist = [];
        this.tiles.forEach(name => {
            for (let i = 0; i < this.tileSet.getTile(name).frequency; i++) {
                hist.push(name);
            }
        })
        this.tile = hist[getRdmInt(0, hist.length)];
        this.tiles = [this.tile];
    }

    getLinkingConstraintIndex = (i) => {
        return i%2 === 0 ? i+1 : i-1;
    }

    isInConstraints = (name, cons, i) => {
        if (!Array.isArray(cons)) cons = [cons];

        for (let j = 0; j < cons.length; j++) {
            if (Array.isArray(this.tileSet.getTile(name).constraints[i])){
                if(this.tileSet.getTile(name).constraints[i].includes(cons[j])) return true;
            }else{
                if(cons[j] === this.tileSet.getTile(name).constraints[i]) return true
            }
        }

        return false;
    }

    applyConstraints = (constraints, i) => {
        if (this.collapsed) return;

        const new_tiles = [];

        this.tiles.forEach(tile => {
            if (constraints.some(cons => this.isInConstraints(tile, cons, this.getLinkingConstraintIndex(i)))) new_tiles.push(tile);
        });

        // no change stop propagation
        if (new_tiles.length === this.tiles.length) return;

        this.tiles = new_tiles;

        // this case only happen if the tiles rules are wrong
        if (this.tiles.length === 0) this.failsafe();

        // only one choice so the tile can be collapsed
        else if (this.tiles.length === 1) this.collapse();
        else this.updateEntropie();

        this.propagate();
    }

    failsafe = () => {
        console.log("ERROR WHILE PROPAGATING: no tile left in the frame - ("+this.neighbours.join("|")+")")
        this.tiles = [this.tileSet.failsafeTile];
        this.collapse();
    }

    propagate = () => {
        for (let i = 0; i < 6; i++) {
            if(this.neighbours[i] === undefined || this.neighbours[i].collapsed) continue;

            const constraints = this.tiles.map(name => this.tileSet.getTile(name).constraints[i]);
            this.neighbours[i].applyConstraints(constraints, i);
        }
    }
}