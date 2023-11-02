/**
 * add the rotation of each tiles without dontRotate == true,
 * done in place
 */
export default function (tileset) {

    const keys = Object.keys(tileset);

    keys.forEach(name => {
        tileset[name].rotation = [0, 0, 0];

        getAllRotations(tileset[name].constraints, tileset[name].rotateOn).forEach(({rotation, rotationVector}, i) => {
            tileset[name + "###rot" + i] = {
                constraints: rotation,
                instantiate: tileset[name].instantiate,
                rotation: rotationVector,
                frequency: tileset[name].frequency
            }
        });
    });

    console.log(tileset)

    return tileset;
}

function getAllRotations(arr, axis) {
    let rotations = [];

    if (axis.includes("1")){
        for (let i = 0; i < 3; i++) {
            arr = rotateX(arr);
            let rotation = {
                rotation: [...arr],
                rotationVector: [(i + 1) * -Math.PI / 2, 0, 0]
            };
            rotations.push(rotation);
        }
        arr = rotateX(arr);
    }

    arr = rotateY(arr);
    if (axis.includes("2")){
        for (let j = 0; j < 4; j++) {
            let rotation = {
                rotation: [...arr],
                rotationVector: [0, -Math.PI / 2,  j * -Math.PI / 2]
            };
            rotations.push(rotation);
            arr = rotateZ(arr);
        }
    }

    arr = rotateY(arr);
    if (axis.includes("3")){
        for (let j = 0; j < 4; j++) {
            let rotation = {
                rotation: [...arr],
                rotationVector: [ j * -Math.PI / 2, Math.PI, 0]
            };
            rotations.push(rotation);
            arr = rotateX(arr);
        }
    }

    arr = rotateY(arr);
    if (axis.includes("4")){
        for (let j = 0; j < 4; j++) {
            let rotation = {
                rotation: [...arr],
                rotationVector: [0, 3 * Math.PI / 2, j * -Math.PI / 2]
            };
            rotations.push(rotation);
            arr = rotateZ(arr);
        }
    }

    arr = rotateY(arr);
    arr = rotateZ(arr);
    if (axis.includes("5")){
        for (let j = 0; j < 4; j++) {
            let rotation = {
                rotation: [...arr],
                rotationVector: [0, j * Math.PI / 2, -Math.PI / 2]
            };
            rotations.push(rotation);
            arr = rotateY(arr);
        }
    }

    arr = rotateZ(arr);
    arr = rotateZ(arr);
    if (axis.includes("6")){
        for (let j = 0; j < 4; j++) {
            let rotation = {
                rotation: [...arr],
                rotationVector: [0, j * Math.PI / 2, 3 * -Math.PI / 2]
            };
            rotations.push(rotation);
            arr = rotateY(arr);
        }
    }

    return rotations;
}


function transformString(str) {
    // Find the position of "#"
    let separatorPos = str.indexOf("#");

    // Extract the different parts of the string
    let prefix = str.substring(0, separatorPos + 1); // e.g., "test#"
    let numPart = str.substring(separatorPos + 1); // e.g., "1234"

    // Rearrange the number part
    let rearrangedNumPart = numPart.substring(1) + numPart[0]; // e.g., "2341"


    return prefix + rearrangedNumPart;
}

function checkIfTransfNeeded(rotated, i) {
    if(Array.isArray(rotated[i])) {
        const nk = [];
        rotated[i].forEach(rt => {
            if (rt.length > 4 && rt[rt.length - 5] === "#"){
                rt = transformString(rt);
            }
            nk.push(rt)
        })
        rotated[i] = nk;
    }else if (rotated[i].length > 4 && rotated[i][rotated[i].length - 5] === "#"){
        rotated[i] = transformString(rotated[i]);
    }
}

function rotateY(arr) {
    let rotated = [...arr];  // Clone array
    rotated[0] = arr[4]; // +X to +Z
    rotated[1] = arr[5]; // -X to -Z
    rotated[4] = arr[1]; // +Z to -X
    rotated[5] = arr[0]; // -Z to +X

    checkIfTransfNeeded(rotated, 2);
    checkIfTransfNeeded(rotated, 3);

    return rotated;
}

function rotateX(arr) {
    let rotated = [...arr];
    rotated[2] = arr[4]; // +Y to +Z
    rotated[3] = arr[5]; // -Y to -Z
    rotated[4] = arr[3]; // +Z to -Y
    rotated[5] = arr[2]; // -Z to +Y

    checkIfTransfNeeded(rotated, 0);
    checkIfTransfNeeded(rotated, 1);

    return rotated;
}

function rotateZ(arr) {
    let rotated = [...arr];
    rotated[0] = arr[2]; // +X to +Y
    rotated[1] = arr[3]; // -X to -Y
    rotated[2] = arr[1]; // +Y to -X
    rotated[3] = arr[0]; // -Y to +X

    checkIfTransfNeeded(rotated, 4);
    checkIfTransfNeeded(rotated, 5);

    return rotated;
}