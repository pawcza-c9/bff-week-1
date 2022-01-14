import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  --button-star-greyscale: 100%;
  --button-star-contrast: 0%;

  appearance: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #5e5e5e;
  border-radius: 36px;
  outline: none;
  margin: 30px;
  padding: 0;
  padding-left: 90px;
  font-family: "Montserrat Alternates";
  font-size: 42px;
  letter-spacing: -2px;
  font-weight: 600;
  line-height: 40px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  box-shadow: 0px 40px 80px 0px rgba(0, 0, 0, 0.05),
  inset 0px -10px 20px 0px rgba(0, 0, 0, 0.05),
  0px 10px 20px 0px rgba(0, 0, 0, 0.05);
`

export const Icon = styled(motion.div)`
  display: block;
  width: 600px;
  height: 300px;
  z-index: 1;
  pointer-events: none;
  transform-origin: 50% 52%;
  filter: grayscale(var(--button-star-greyscale))
  contrast(var(--button-star-contrast));
  opacity: 0.3;
  position: absolute;
  top: -100px;
  left: -240px;
		
		canvas {
    position: absolute;
    width: 100%;
    height: 100%;
		}
`

export const Number = styled(motion.span)`
  padding: 30px 36px;
  position: relative;
  transform: translateZ(0);
		
		&:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: #e8e8e8;
    opacity: 0.4;
		}
`

export const Label = styled(motion.div)`
  width: 180px;
  padding: 20px 0 22px;
		left: 0;
  transform: translateZ(0);
`

export const Default = styled(motion.span)`
	display: block;
`

export const Success = styled(motion.span)`
	position: absolute;
`

export const Current = styled(motion.span)`
  color: #d9d9d9;
  opacity: 1;
  display: block;
`

export const New = styled(motion.span)`
  color: #fed600;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  display: block;
`

// Pencil

export const Change = styled(motion.span)`
	position: absolute;
`
