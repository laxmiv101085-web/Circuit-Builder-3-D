'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';

const Component = ({ position, color, args, label }: { position: [number, number, number], color: string, args: [number, number, number], label?: string }) => (
    <group position={position}>
        <mesh>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
        {label && (
            <Text position={[0, args[1] / 2 + 0.1, 0]} fontSize={0.15} color="black" anchorY="bottom">
                {label}
            </Text>
        )}
    </group>
);

const Wire = ({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) => {
    // Simple straight line for now, or a tube
    const length = Math.sqrt(
        Math.pow(end[0] - start[0], 2) +
        Math.pow(end[1] - start[1], 2) +
        Math.pow(end[2] - start[2], 2)
    );

    const mid = [
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (start[2] + end[2]) / 2
    ] as [number, number, number];

    // Calculate rotation to align cylinder with points
    // This is a bit complex for a quick implementation without a library like 'drei/Line', 
    // so we'll use a simple box for horizontal/vertical wires or just rely on abstract representation.
    // Actually, let's just use thin boxes for wires to keep it robust without complex math.

    return (
        <mesh position={mid}>
            <boxGeometry args={[Math.abs(end[0] - start[0]) || 0.05, Math.abs(end[1] - start[1]) || 0.05, Math.abs(end[2] - start[2]) || 0.05]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}


export default function Circuit555() {
    return (
        <div className="h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
            <Canvas camera={{ position: [4, 4, 4], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls autoRotate autoRotateSpeed={0.5} />

                <group position={[0, -0.5, 0]}>
                    {/* Breadboard */}
                    <Component position={[0, 0, 0]} args={[4, 0.2, 3]} color="#f5f5f5" />

                    {/* 555 Timer IC */}
                    <Component position={[0, 0.3, 0]} args={[0.8, 0.4, 0.8]} color="#1a1a1a" label="NE555" />

                    {/* LED */}
                    <group position={[1.5, 0.3, 0]}>
                        <mesh position={[0, 0.2, 0]}>
                            <cylinderGeometry args={[0.15, 0.15, 0.4]} />
                            <meshStandardMaterial color="red" transparent opacity={0.9} />
                        </mesh>
                        <Text position={[0, 0.6, 0]} fontSize={0.15} color="black">LED</Text>
                    </group>

                    {/* Capacitor */}
                    <group position={[-1.5, 0.3, 0.5]}>
                        <mesh position={[0, 0.25, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.5]} />
                            <meshStandardMaterial color="#1e3a8a" />
                        </mesh>
                        <Text position={[0, 0.6, 0]} fontSize={0.15} color="black">10µF</Text>
                    </group>

                    {/* Resistors */}
                    <Component position={[0.8, 0.2, 0.8]} args={[0.6, 0.1, 0.2]} color="#d4b483" label="1kΩ" />
                    <Component position={[-0.8, 0.2, -0.8]} args={[0.6, 0.1, 0.2]} color="#d4b483" label="10kΩ" />

                    {/* Wires (Abstract representation) */}
                    {/* VCC to IC */}
                    <mesh position={[0, 0.15, -1]} rotation={[0, 0, 0]}>
                        <boxGeometry args={[2, 0.05, 0.05]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                    {/* GND to IC */}
                    <mesh position={[0, 0.15, 1]} rotation={[0, 0, 0]}>
                        <boxGeometry args={[2, 0.05, 0.05]} />
                        <meshStandardMaterial color="black" />
                    </mesh>

                    {/* Connecting lines */}
                    <mesh position={[0, 0.15, -0.45]} rotation={[0, Math.PI / 2, 0]}>
                        <boxGeometry args={[0.8, 0.05, 0.05]} />
                        <meshStandardMaterial color="red" />
                    </mesh>

                </group>
            </Canvas>
        </div>
    );
}
