import { motion } from 'framer-motion/three';
import { degreesToRadians } from "popmotion";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {useRef} from "react";

export function PencilIcon({ isSent, isHover }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('/pencil.gltf')
	const lights = [
		[2, 1, 4, 1],
		[8, 0, 4, 1]
	];
		
  return (
    <Canvas
      resize={{ offsetSize: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
    >
      {lights.map(([x, y, z, intensity], i) => (
        <pointLight
          key={i}
          intensity={intensity}
          position={[x / 8, y / 8, z / 8]}
          color="#fff"
        />
      ))}
						<motion.group
							ref={group}
							dispose={null}
							rotation={[-Math.PI / 2.5, -.5, 0]}
							animate={[isSent ? "sent" : "unsent", isHover ? "hover" : ""]}
							variants={{
								unsent: {
									x: [0, 0],
									y: [0, 0],
									scale: 0.25
								},
								sent: {
									x: 3,
									y: [0, -.1, 0, -.1, 0, -.1, 0],
									opacity: 0,
									transition: { duration: 0.5 },
								},
								hover: {
									rotateY: .5,
									scale: .3,
									transition: {
										rotateY: { duration: 1.5, repeat: Infinity, repeatType: 'reverse'}
									}
								}
							}}
						>
							<motion.mesh
								geometry={nodes.Object_2.geometry}
								material={materials['Material.001']}
								rotation={[Math.PI / 2, 0, degreesToRadians(360)]}
								scale={1}
							/>
						</motion.group>
    </Canvas>
  );
}
