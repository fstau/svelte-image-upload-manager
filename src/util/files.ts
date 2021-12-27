export const readFileAsync = (file): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result as string);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

export const downloadBlob = (blob, name = "file.jpg") => {
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = blobUrl;
  link.download = name;

  document.body.appendChild(link);

  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );

  document.body.removeChild(link);
};
