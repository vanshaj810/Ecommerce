import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/vanshaj810/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://lh3.googleusercontent.com/9IZsT3ax6_yTLBLhu9_mFKZxvexf2lPe2bgSGuxx-S1NXmhrLPwzSDR0kdc_Wo9qOWn5IZVRZTh0KrLatw_e0e1fKNdQovN180MTv7VGruvmFQBYCpg3ZjPkz5zeLUa5afh3wZEQm4pmlg37hOHtLLWygIVs7h-Ig_F6fxmGirqF7olKqorzaM06HNO_vcpxUAdltV9nPJLnft3uOLKPcZcy33Hn5h4cLFMdIULj6iOE0NOfZAksmdvWq4eNfuC6ggwKGrmkW7JFlYmi-RK9A2OKA5I0GWj42w8YJ_h0zf0Rj-C0gNmnJyydukRomOtTvXXkyEUXAgWw1XmJEhlAKFh_1MvozETvEWcjzLZj_A3M8U2jeTwI-eHfAufKooz_4MsVitVlp7D6emhCjvXZnmFDZpKbxGwtd3eTXnbHyykQQHABh16SNVs3oZoX9veIDI1NwSxS6A00GrjZqqCfn8EYNiNL_edWzXM5cL7eoHzeQXZokCfVeFHynhrfVmsUfU9Mwmojklv_pbn-MQithsbNq1kqUR7Kn_6GhtgttQuLeox8PJSYmLNW5PvJAg5xjM8-t7aapIRSpKt4EnIlr5VA3lqKgcXxUz2K3--70ysL8KYt_H6RrU9XbIVO-xI5Ocj37obEP_KqWYKFhZDvogv9UBNesWFKo274M5d5eJthSvcOxG0s6XoE1XsFuR21qKT-dNC2c_NXMaV9iwijUgdH7nE3IZoW1NwFIB-Hu0aBtfdFBclDVNoYGkExJA=w466-h938-no?authuser=0"
              alt="Founder"
            />
            <Typography>Vanshaj Bhardwaj</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This wesbite made by @vanshajbhardwaj.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCBPeEoSAnuz2qrqomdknEpA"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/vanshaj810/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
