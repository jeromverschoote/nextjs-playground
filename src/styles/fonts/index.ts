export default {
  baseSize: 10,
  getSizeInRem(sizeInPoints: number): string {
    return `${sizeInPoints / this.baseSize}rem`;
  },
  weight: {
    thin: 200,
    normal: 400,
    medium: 500,
    bold: 700,
  },
};
