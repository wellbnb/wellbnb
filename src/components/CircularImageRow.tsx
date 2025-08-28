import React from "react";

type CircularImageRowProps = {
  images: { src: string; alt: string }[];
};

export default function CircularImageRow({ images }: CircularImageRowProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        margin: "16px 0",
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          style={{
            width: 64,
            height: 64,
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #eee",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        />
      ))}
    </div>
  );
}
