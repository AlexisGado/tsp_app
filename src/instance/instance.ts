import { City } from './city';

export class TspInstance {
    public minX: number;
    public maxX: number;
    public minY: number;
    public maxY: number;

    public constructor(public id: string, public cities: City[]) {
        this.minX = Math.min(...cities.map((c) => c.x));
        this.maxX = Math.max(...cities.map((c) => c.x));
        this.minY = Math.min(...cities.map((c) => c.y));
        this.maxY = Math.max(...cities.map((c) => c.y));
    }
}
