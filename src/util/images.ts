import { downloadBlob } from "./files";

export const downloadImage = (imageData: string) => {
  let img = getHtmlImageFromBase64(imageData);
  const canvas = getCanvasWithImage(img);
  canvas.toBlob((blob) => {
    downloadBlob(blob);
  }, "image/jpeg");
};

export const rotateImage90Deg = (imageData: string): string => {
  let img = getHtmlImageFromBase64(imageData);
  const canvas = document.createElement("canvas");
  canvas.width = img.height;
  canvas.height = img.width;
  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((90 * Math.PI) / 180);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  return canvas.toDataURL("image/jpeg");
};

const getHtmlImageFromBase64 = (imageData: string): HTMLImageElement => {
  let img = new Image();
  img.src = imageData;
  return img;
};

const getCanvasWithImage = (img: HTMLImageElement): HTMLCanvasElement => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return canvas;
};
