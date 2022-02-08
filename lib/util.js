import { keyframes } from "@emotion/react";

// Animation
const Spin = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg)}
`;
const SpinAnticlockwise = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(-360deg)}
`;
export const SpinAnimation = `${Spin} infinite 60s linear`;
export const SpinAnticlockwiseAnimation = `${SpinAnticlockwise} infinite 60s linear`;

// String Helper function
export const decapitalize = string => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}