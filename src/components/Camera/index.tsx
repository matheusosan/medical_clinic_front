import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
}

const Camera = ({ className }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [cameraPermissionError, setCameraPermissionError] = useState("");

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Erro ao acessar a câmera: ", error);
        setCameraPermissionError(
          "Vocẽ deve permitir o acesso a câmera para realizar o cadastro."
        );
      }
    };

    if (!image) {
      getMedia();
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [image]);

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/png");
        setImage(dataUrl);
      }
    }
  };

  return (
    <div className={className}>
      {!image && (
        <>
          <video ref={videoRef} autoPlay playsInline />
          <button onClick={captureImage}>Capturar Imagem</button>
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </>
      )}
      {image && (
        <div className="flex w-full">
          <img src={image} alt="Captura da Câmera" />
          <p>A imagem ficou boa?</p>
          <button onClick={() => setImage(null)}>Não</button>
        </div>
      )}
      {cameraPermissionError && <p>{cameraPermissionError}</p>}
    </div>
  );
};

export default Camera;
