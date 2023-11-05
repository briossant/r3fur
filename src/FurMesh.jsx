import * as THREE from 'three';
import {useControls} from 'leva'
import {useMemo, useRef} from "react"
import {useFrame} from "@react-three/fiber";

const vertexShader = document.getElementById('vertexShader').textContent;
const fragmentShader = document.getElementById('fragmentShader').textContent;

const a = 100;
const maxSpeed = 100;

export default function FurMesh({height, position = new THREE.Vector3(0, 0, 0), children}) {

    const {resolution, spacing, stiffness, color, radius} = useControls("Settings", {
        resolution: {
            value: 100,
            step: 1,
            min: 10,
            max: 300
        },
        spacing: {
            value: 0.3,
            step: 0.01,
            min: 0.01,
            max: 2
        },
        stiffness: {
            value: 0.1,
            step: 0.01,
            min: 0,
            max: 0.42
        },
        color: {
            value: "#8ffffd",
        },
        radius: {
            value: 4,
            step: 0.1,
            min: 0,
            max: 20
        }
    });
    const uniforms = useMemo(
        () => ({
            u_resolution: {value: new THREE.Vector2(10 * resolution, resolution)},
            u_height: {value: height},
            u_spacing: {value: spacing},
            u_forces: {value: (new THREE.Vector3(0, 0, 0))},
            u_color: {value: new THREE.Color(color)},
            u_radius: {value: radius},
        }), []
    );
    let speed = useMemo(() => new THREE.Vector3(0, 0, 0), []);
    const mesh = useRef();
    const shader = useRef();

    useFrame((_, delta) => {
        const dir = position.clone().sub(mesh.current.position).normalize();

        speed.add(dir.multiplyScalar(a * delta));

        if (speed.length() > maxSpeed)
            speed = dir.multiplyScalar(maxSpeed);

        mesh.current.position.x += speed.x * delta;
        mesh.current.position.y += speed.y * delta;
        mesh.current.position.z += speed.z * delta;

        shader.current.uniforms.u_height.value = height;
        shader.current.uniforms.u_resolution.value = new THREE.Vector2(10 * resolution, resolution);
        shader.current.uniforms.u_spacing.value = spacing;
        //shader.current.uniforms.u_forces.value = ((new THREE.Vector3(...mov)).multiplyScalar(stiffness));
        shader.current.uniforms.u_color.value = new THREE.Color(color);
        shader.current.uniforms.u_radius.value = radius;
    });

    return <mesh ref={mesh}>
        {children}
        <shaderMaterial
            ref={shader}
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            transparent
            side={THREE.DoubleSide}
        />
    </mesh >;
}
