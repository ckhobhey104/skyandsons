// import React, { useState, useEffect } from "react";

// const Parallax = ({ background, children }) => {
//   const [translateY, setTranslateY] = useState(0);

//   const calculateTranslation = () => {
//     setTranslateY(window.scrollY / 5);
//   };

//   useEffect(() => {
//     document.addEventListener("scroll", calculateTranslation);

//     return () => {
//       document.removeEventListener("scroll", calculateTranslation);
//     };
//   }, []);

//   const transform = `translate3d(-50%, -${translateY}px, 0)`;

//   return (
//     <div className="parallax">
//       <img src={background} style={{ transform }} alt="Parallax Background" />
//       {children}
//     </div>
//   );
// };

// const Gallery = () => {
//   return (
//     <div className="container">
//       <div style={{ minHeight: 500 }} />
//       <Parallax background="https://placekitten.com/1200/1000">
//         <h1>Simple as F**k</h1>
//       </Parallax>
//     </div>
//   );
// };

// export default Gallery;

// PARALLAX HOVER

// import React, { useState, useRef } from "react";
// import { login_page_img } from "../data";

// const config = {
//   scale: 1.03,
//   rotation: 0.3,
//   alpha: 0.4,
//   shadow: 8,
// };

// const ParallaxHover = ({ children, width, height }) => {
//   const wrapperRef = useRef(null);
//   const [state, setState] = useState({
//     rotateX: 0,
//     rotateY: 0,
//     shadowMovement: 20,
//     shadowSize: 50,
//     scale: 1,
//     angle: 0,
//     alpha: 0,
//   });

//   const buildState = (
//     rotateX,
//     rotateY,
//     shadowMovement,
//     shadowSize,
//     scale,
//     angle,
//     alpha
//   ) => {
//     setState({
//       rotateX,
//       rotateY,
//       shadowMovement,
//       shadowSize,
//       scale,
//       angle,
//       alpha,
//     });
//   };

//   const buildTransformStrings = (rotateX, rotateY, scale) => ({
//     WebkitTransform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
//     MozTransform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
//     transform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
//   });

//   const calculateDistance = (bounds, offsetX, offsetY) => {
//     const distanceX = Math.pow(offsetX - bounds.width / 2, 2);
//     const distanceY = Math.pow(offsetY - bounds.height / 2, 2);
//     return Math.floor(Math.sqrt(distanceX + distanceY));
//   };

//   const calculateAlphaFromCenter = (current) => {
//     const max = Math.max(width, height);
//     return (current / max) * config.alpha;
//   };

//   const handleMouseMove = ({ pageX, pageY, nativeEvent }) => {
//     const bounds = wrapperRef.current.getBoundingClientRect();
//     const centerX = width / 2;
//     const centerY = height / 2;
//     const widthMultiplier = 320 / width;

//     const offsetX = 0.52 - (pageX - bounds.left - window.scrollX) / width;
//     const offsetY = 0.52 - (pageY - bounds.top - window.scrollY) / height;

//     const deltaX = pageX - bounds.left - window.scrollX - centerX;
//     const deltaY = pageY - bounds.top - window.scrollY - centerY;

//     const rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier);
//     const rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier);

//     const angleRad = Math.atan2(deltaY, deltaX);
//     const angleRaw = (angleRad * 180) / Math.PI - 90;
//     const angleDeg = angleRaw < 0 ? angleRaw + 360 : angleRaw;

//     const distanceFromCenter = calculateDistance(
//       bounds,
//       nativeEvent.offsetX,
//       nativeEvent.offsetY
//     );
//     const shadowMovement = centerY * 0.25;
//     const shadowSize = 120;
//     const alpha = calculateAlphaFromCenter(distanceFromCenter);

//     buildState(
//       rotateX,
//       rotateY,
//       shadowMovement,
//       shadowSize,
//       config.scale,
//       angleDeg,
//       alpha
//     );
//   };

//   const handleMouseLeave = () => {
//     buildState(0, 0, 20, 50, 1, 0, 0);
//   };

//   const renderChildren = (children) => {
//     const { rotateX, rotateY, scale } = state;
//     const styles = buildTransformStrings(rotateX, rotateY, scale);

//     if (!Array.isArray(children)) {
//       return (
//         <div style={styles} className="ph-layer">
//           {children}
//         </div>
//       );
//     }

//     return children.map((layer, key) => {
//       const num = key + 1;
//       const rotateX = Math.floor(state.rotateX / num);
//       const rotateY = Math.floor(state.rotateY / num);
//       let layerStyles = buildTransformStrings(rotateX, rotateY, state.scale);
//       let textClass;

//       if (layer.ref === "text") {
//         textClass = "ph-text";
//         const shadow = {
//           textShadow: `${rotateY * 0.5}px ${
//             rotateX * 0.5
//           }px 10px rgba(0, 0, 0, 0.5)`,
//         };

//         layerStyles = { ...shadow, ...layerStyles };
//       }

//       return (
//         <div key={key} style={layerStyles} className={`ph-layer ${textClass}`}>
//           {layer}
//         </div>
//       );
//     });
//   };

//   const { rotateX, rotateY, scale, shadowMovement, shadowSize, angle, alpha } =
//     state;

//   const baseTransforms = buildTransformStrings(rotateX, rotateY, scale);
//   const stylesWrapper = {
//     ...baseTransforms,
//     width,
//     height,
//   };
//   const stylesShadow = {
//     ...baseTransforms,
//     boxShadow: `0px ${shadowMovement}px ${shadowSize}px rgba(0, 0, 0, 0.6)`,
//   };
//   const stylesLighting = {
//     ...baseTransforms,
//     backgroundImage: `linear-gradient(${angle}deg, rgba(255,255,255, ${alpha}) 0%, rgba(255,255,255,0) 40%)`,
//   };

//   return (
//     <div style={{ transformStyle: "preserve-3d" }}>
//       <figure
//         ref={wrapperRef}
//         className="ph-wrapper"
//         style={stylesWrapper}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="ph-shadow" style={stylesShadow} />
//         <div className="ph-layers">{renderChildren(children)}</div>
//         <div className="ph-lighting" style={stylesLighting} />
//       </figure>
//     </div>
//   );
// };

// const Gallery = () => {
//   return (
//     <div>
//       <ParallaxHover width="500" height="300">
//         <img width={500} height={300} src={login_page_img} alt="parallax" />
//         <h1>Parallax Hover</h1>
//       </ParallaxHover>
//     </div>
//   );
// };

// export default Gallery;

import React from "react";
import "./try.css";

const SectionComponent = ({ image }) => {
  console.log(image);
  return (
    <div className="parallax-section-container">
      <div className="parallax-foreground">
        <span>No background:fixed support in 2023?</span>
        <span className="cheeky">Sent from my iPhone</span>
      </div>
      <div
        className="parallax-background"
        style={{ backgroundImage: `url(${image})`, height: 500 }}
      ></div>
    </div>
  );
};

const Gallery = () => {
  //   const images = [
  //     "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   ];

  return (
    <div className="parallax-page-container">
      <SectionComponent image="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <SectionComponent image="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <SectionComponent image="https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      {/* {images.map((image, index) => (
        <SectionComponent key={index} image={image} />
      ))} */}
    </div>
  );
};

export default Gallery;
