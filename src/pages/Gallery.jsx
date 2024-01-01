import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { media } from "./../data";
import { mobile } from "./../responsive";

const Container = styled.div`
  background: #edf6fbbc;
  /* width: 95%; */
  padding: 10px;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  align-items: center;
  /* border: 1px solid red; */
  padding: 10px;
`;

const H1 = styled.h1`
  text-align: center;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
  ${mobile({
    fontSize: "15px",
  })}
`;
const MediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin: 20px auto;
`;

const Media = styled.div`
  height: 220px;
  width: 100%;
  border: 5px solid #eee;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  cursor: pointer;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  display: ${(props) => (props.file ? "block" : "none")};
`;
const Close = styled.span`
position: absolute;
top: 5px;
right: 20px;
font-size: 50px;
font-weight: bolder;
z-index; 100;
cursor: pointer;
color: #fff;
user-select: none;
`;
const PopupImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border: 3px solid #fff;
`;
const PopupVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border: 3px solid #fff;
`;

const Gallery = () => {
  const [file, setFile] = useState(null);

  return (
    <Container>
      <Title>
        <Left>
          <H1>Our Minning Site In The Western Region Of Ghana</H1>
        </Left>
        <Right>
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <H1>Back To Home</H1>
          </RouterLink>
        </Right>
      </Title>

      <MediaContainer>
        {media.map((file, index) => (
          <Media key={index} onClick={() => setFile(file)}>
            {file.type === "image" ? (
              <Image src={file.src} />
            ) : (
              // <Video src={`${file.src}t=0.001`} muted preload="metadata" />
              <Video src={file.src} muted />
            )}
          </Media>
        ))}
      </MediaContainer>
      <Popup file={file}>
        <Close onClick={() => setFile(null)}>&times;</Close>
        {file?.type === "video" ? (
          <PopupVideo src={file?.src} muted autoPlay controls />
        ) : (
          <PopupImage src={file?.src} />
        )}
      </Popup>
    </Container>
  );
};

export default Gallery;
