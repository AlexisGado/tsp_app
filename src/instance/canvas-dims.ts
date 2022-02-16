import { TspInstance } from './instance';

export class CanvasDimensions {
    public coordsWidth: number;
    public coordsHeight: number;
    public xOffset: number;
    public yOffset: number;
    public transformRatio: number;
    public totalPixelWidth: number;
    public totalPixelHeight: number;

    constructor(
        public pixelWidth: number,
        public pixelHeight: number,
        public marginSize: number,
        instance: TspInstance
    ) {
        this.totalPixelWidth = this.pixelWidth + 2 * this.marginSize;
        this.totalPixelHeight = this.pixelHeight + 2 * this.marginSize;
        this.coordsWidth = instance.maxX - instance.minX;
        this.coordsHeight = instance.maxY - instance.minY;

        // if div is too wide
        if (
            this.pixelWidth / this.pixelHeight >=
            this.coordsWidth / this.coordsHeight
        ) {
            this.transformRatio = this.pixelHeight / this.coordsHeight;
            this.xOffset =
                this.marginSize -
                instance.minX * this.transformRatio +
                (1 / 2) *
                    (this.pixelWidth -
                        (this.coordsWidth * pixelHeight) / this.coordsHeight);
            this.yOffset =
                this.marginSize - instance.minY * this.transformRatio;
        }
        // if div is too high
        else {
            this.transformRatio = this.pixelWidth / this.coordsWidth;
            this.xOffset =
                this.marginSize - instance.minX * this.transformRatio;
            this.yOffset =
                this.marginSize -
                instance.minY * this.transformRatio +
                (1 / 2) *
                    (this.pixelHeight -
                        (this.coordsHeight * pixelWidth) / this.coordsWidth);
        }
    }
}
