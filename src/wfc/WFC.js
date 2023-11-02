import Frame from "./Frame";
import {getRdmInt} from "./utilities";

export default class {
    constructor(tileSet, width = 10, height = 10, depth = 10) {

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.size = width*height*depth;


        this.tileSet = tileSet;

        this.grid = [...Array(this.size)].map(() => new Frame(tileSet));
        this.fillFramesNeighbours();
        this.allCollapsed = false;

        if (tileSet.borderConstraints.length > 0){
            this.applyBorderConstraints(tileSet.borderConstraints)
        }
    }

    applyBorderConstraints = (borderConstraints) => {
        let i = 0;
        while (i<this.size) {
            const [x,y,z] = this.getCoordinates(i);
            if (x === 0) this.grid[i].applyConstraints(borderConstraints, 0);
            if (y === 0) this.grid[i].applyConstraints(borderConstraints, 2);
            if (z === 0) this.grid[i].applyConstraints(borderConstraints, 4);
            if (x === this.width - 1) this.grid[i].applyConstraints(borderConstraints, 1);
            if (y === this.height - 1) this.grid[i].applyConstraints(borderConstraints, 3);
            if (z === this.depth - 1) this.grid[i].applyConstraints(borderConstraints, 5);
            i++;
        }

    }

    getCoordinates = (i) => [
        Math.floor(i/this.height/this.depth),
        Math.floor((i%(this.height*this.depth))/this.depth),
        i % this.depth
    ];

    getIndex = (x, y = 0, z = 0) => {
        if (Array.isArray(x)) {
            y = x[1];
            z = x[2];
            x = x[0];
        }
        return (x*this.height + y)*this.depth + z;
    }

    fillFramesNeighbours = (i = 0, max_i = this.size) => {
        while (i<max_i) {
            const [x,y,z] = this.getCoordinates(i);
            if (x > 0) this.grid[i].neighbours[1] = this.grid[i-this.height*this.depth];
            if (y > 0) this.grid[i].neighbours[3] = this.grid[i-this.depth];
            if (z > 0) this.grid[i].neighbours[5] = this.grid[i-1];
            if (x < this.width - 1) this.grid[i].neighbours[0] = this.grid[i+this.height*this.depth];
            if (y < this.height - 1) this.grid[i].neighbours[2] = this.grid[i+this.depth];
            if (z < this.depth - 1) this.grid[i].neighbours[4] = this.grid[i+1];
            i++;
        }
    };

    /**
     * choose a random frame not collapsed in the grid
     * */
    chooseRandomFrame = () => {
        if(this.allCollapsed) throw new Error('chooseRandomFrame: cannot choose a frame if all of them are collapsed');

        let eligibleFrames = [];

        for (let i = 0; i < this.size; i++) {
            const frame = this.grid[i];
            if (!frame.collapsed){
                eligibleFrames.push(frame);
            }
        }

        if(eligibleFrames.length === 0) {
            this.allCollapsed = true;
            return;
        }

        let minEntropie = Infinity;
        let chosenFrame;

        eligibleFrames.forEach((frame) => {
            if (frame.entropy < minEntropie) {
                minEntropie = frame.entropy;
                chosenFrame = frame;
            }
        });

        return chosenFrame;
    }

    run = (forcedStart = []) => {
        forcedStart.forEach(st => {
            const i = this.getIndex(st.x, st.y, st.z)
            this.grid[i].tiles = st.tiles;
            this.grid[i].collapse();
            this.grid[i].propagate();
        });
        while (!this.allCollapsed){
            const frame = this.chooseRandomFrame();
            if (this.allCollapsed) break;
            frame.collapse();
            frame.propagate();
        }
    }

    getGrid = () => {
        if (!this.allCollapsed) return [];
        return [...Array(this.width)].map((_,x) =>
                    [...Array(this.height)].map((_,y) =>
                        [...Array(this.depth)].map((_,z) =>
                            this.grid[x*this.height*this.depth+y*this.depth+z].tile
                        )
                    )
                );
    }

}