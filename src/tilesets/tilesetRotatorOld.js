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

    return tileset;
}

function getAllRotations(arr, axis) {
    let rotations = [];

    if (axis.includes("x")){
        for (let i = 0; i < 3; i++) {
            arr = rotateX(arr);
            let rotationX = {
                rotation: [...arr],
                rotationVector: [(i + 1) * -Math.PI / 2, 0, 0]
            };
            rotations.push(rotationX);
        }
        arr = rotateX(arr);
    }

    if (axis.includes("y")){
        for (let j = 0; j < 3; j++) {
            arr = rotateY(arr);
            let rotationY = {
                rotation: [...arr],
                rotationVector: [0, (j + 1) * Math.PI / 2, 0]
            };
            rotations.push(rotationY);
        }
        arr = rotateY(arr);
    }

    if (axis.includes("z")){
        for (let k = 0; k < 3; k++) {
            arr = rotateZ(arr);
            let rotationZ = {
                rotation: [...arr],
                rotationVector: [0, 0, (k + 1) * -Math.PI / 2]
            };
            rotations.push(rotationZ);
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
    if (rotated[i].length > 4 && rotated[i][rotated[i].length - 5] === "#"){
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