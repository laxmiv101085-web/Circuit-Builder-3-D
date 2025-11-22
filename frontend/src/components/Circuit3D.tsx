import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Line } from '@react-three/drei';
import type { Layout3D, Component3D } from '../types';

interface Circuit3DProps {
    layout: Layout3D;
}

const ComponentMesh: React.FC<{ component: Component3D }> = ({ component }) => {
    const { position, color, size, label, type } = component;
    const [x, y, z] = position;
    const [w, h, d] = size || [0.5, 0.5, 0.5];

    let geometry = <boxGeometry args={[w, h, d]} />;
    if (type === 'led' || type === 'capacitor') {
        geometry = <cylinderGeometry args={[w / 2, w / 2, h, 32]} />;
    }

    return (
        <group position={[x, y, z]}>
            <mesh>
                {geometry}
                <meshStandardMaterial color={color} />
            </mesh>
            {label && (
                <Text
                    position={[0, h / 2 + 0.2, 0]}
                    fontSize={0.2}
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>
            )}
        </group>
    );
};

const Circuit3D: React.FC<Circuit3DProps> = ({ layout }) => {
    return (
        <div className="h-[400px] w-full bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <gridHelper args={[10, 10]} />

                {/* Breadboard base */}
                <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 6]} />
                    <meshStandardMaterial color="#f0f0f0" />
                </mesh>

                {layout.components.map((comp, idx) => (
                    <ComponentMesh key={idx} component={comp} />
                ))}

                {layout.wires.map((wire, idx) => (
                    <Line
                        key={idx}
                        points={[wire.start, wire.end]}
                        color={wire.color}
                        lineWidth={3}
                    />
                ))}
            </Canvas>
        </div>
    );
};

export default Circuit3D;
