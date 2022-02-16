import React, { FC, useEffect, useRef } from 'react';
import { CanvasDimensions } from './instance/canvas-dims';
import { TspInstance } from './instance/instance';

interface TspCanvasProps {
    instance: TspInstance;
    solution?: unknown;
}

export const TspCanvas: FC<TspCanvasProps> = ({ instance }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasCtx = canvasRef.current?.getContext('2d');
        const canvasDim = new CanvasDimensions(500, 500, 10, instance);
        if (!canvasCtx) return;
        canvasCtx.clearRect(
            0,
            0,
            canvasDim.totalPixelWidth,
            canvasDim.totalPixelHeight
        );
        // const minX = Math.min(...instance.cities.map((c) => c.x));
        // const maxX = Math.max(...instance.cities.map((c) => c.x));
        // const minY = Math.min(...instance.cities.map((c) => c.y));
        // const maxY = Math.max(...instance.cities.map((c) => c.y));
        for (const city of instance.cities) {
            const xCanva =
                canvasDim.xOffset + city.x * canvasDim.transformRatio;
            const yCanva =
                canvasDim.yOffset + city.y * canvasDim.transformRatio;
            canvasCtx?.beginPath();
            canvasCtx?.arc(xCanva, yCanva, 5, 0, 2 * Math.PI);
            // canvasCtx?.arc(xCanva / 2, yCanva / 2, 5, 0, 2 * Math.PI);
            canvasCtx.fill();
        }
    }, [instance]);

    return (
        <canvas width={520} height={520} ref={canvasRef}>
            Sorry, your browser cannot display a canvas element.
        </canvas>
    );
};
