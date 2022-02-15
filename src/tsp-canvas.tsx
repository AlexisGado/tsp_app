import React, { FC, useEffect, useRef } from 'react';
import { TspInstance } from './instance/instance';

interface TspCanvasProps {
    instance: TspInstance;
    solution?: unknown;
}

export const TspCanvas: FC<TspCanvasProps> = ({ instance }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasCtx = canvasRef.current?.getContext('2d');
        if (!canvasCtx) return;
        const minX = Math.min(...instance.cities.map((c) => c.x));
        const maxX = Math.max(...instance.cities.map((c) => c.x));
        const minY = Math.min(...instance.cities.map((c) => c.y));
        const maxY = Math.max(...instance.cities.map((c) => c.y));
        for (const city of instance.cities) {
            const xCanva = 10 + ((maxX - city.x) * 500) / (maxX - minX);
            const yCanva = 10 + ((maxY - city.y) * 500) / (maxY - minY);
            canvasCtx?.beginPath();
            canvasCtx?.arc(xCanva, yCanva, 5, 0, 2 * Math.PI);
            canvasCtx.fill();
        }
    }, [instance]);

    return (
        <canvas width={520} height={520} ref={canvasRef}>
            Sorry, your browser cannot display a canvas element.
        </canvas>
    );
};
