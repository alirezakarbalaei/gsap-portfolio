
"use client";

import React, { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

type ZoomableImageProps = {
  src: string;
  alt?: string;
  wrapperClassName?: string;
};

export const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt = "",
  wrapperClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={wrapperClassName}>
      <img
        src={src}
        alt={alt}
        className="zoomable-thumbnail max-w-full cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-50 text-3xl text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close image viewer"
          >
            &times;
          </button>

          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit
          >
            <TransformComponent
              wrapperStyle={{
                width: "100vw",
                height: "100vh",
              }}
              contentStyle={{
                width: "100%",
                height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
              }}
            >
              <img
                src={src}
                alt={alt}
                className="max-h-screen max-w-full object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </div>
  );
};

export default ZoomableImage;
