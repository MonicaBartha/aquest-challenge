import React, { useState } from "react";
import MiddleImage from "./MiddleImage";
import MiddleImage2 from "./MiddleImage2";
import RightImage from "./RightImage";
import Title from "./Title";
import SlideNumber from "./SlideNumber";
import LeftHeading from "./LeftHeading";
import RightParagraph from "./RightParaghaph";
import LeftDownImage from "./LeftDownImage";
import Title2 from "./Title2";
import RightImage2 from "./RightImage2";
import RightParagraph2 from "./RightParaghaph2";
import LeftDownImage2 from "./LeftDownImage2";
import "./template.css";

const Template = () => {
  const [text, setText] = useState(<Title />);

  const [img, setImage] = useState(<MiddleImage />);

  const [rightImage, setRightImage] = useState(<RightImage />);

  const [rightParagraph, setRightParagraph] = useState(<RightParagraph />);

  const [leftDownImage, setLeftDownImage] = useState(<LeftDownImage />);

  const changeToSecondView = (
    text,
    img,
    rightImage,
    rightParagraph,
    leftDownImage
  ) => {
    setText(text);
    setImage(img);
    setRightImage(rightImage);
    setRightParagraph(rightParagraph);
    setLeftDownImage(leftDownImage);
  };

  return (
      <div className="grid">
        <div className="element1">
          <LeftHeading />
        </div>
        <div className="element2">{img}</div>
        <div className="element3">{rightImage}</div>
        <div className="element4">
          {text}
          <SlideNumber />
        </div>
        <div className="element5"></div>
        <div className="element6">{rightParagraph}</div>
        <div className="element7">{leftDownImage}</div>
        <div className="element8">
          <div className="border"></div>
        </div>
        <div className="element9">
          <button
            type="button"
            onClick={() =>
              changeToSecondView(
                <Title2 />,
                <MiddleImage2 />,
                <RightImage2 />,
                <RightParagraph2 />,
                <LeftDownImage2 />
              )
            }
            className="have-a-look-btn"
          >
            HAVE A LOOK <span>&#8594;</span>
          </button>
        </div>
      </div>
  );
};

export default Template;
