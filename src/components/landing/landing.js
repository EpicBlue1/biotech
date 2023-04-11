import axios from "axios";
import React, { useEffect, useState } from "react";
import image from "../../assets/sliderImages/image1.JPG";
import image2 from "../../assets/sliderImages/image2.JPG";
import image3 from "../../assets/sliderImages/image3.JPG";
import image4 from "../../assets/sliderImages/image4.JPG";
import image5 from "../../assets/sliderImages/image5.JPG";
import image6 from "../../assets/sliderImages/image6.JPG";
import image7 from "../../assets/sliderImages/image7.JPG";
import ButtSlider from "./BtnSlider";
import Style from "./landing.module.scss";

const Landing = () => {
  const [active, setActive] = useState(true);
  const [img, setimg] = useState(0);
  const images = [image, image2, image3, image4, image5, image7];
  function ActiveSwitch() {
    setActive(false);
  }

  function ActiveSwitchTwo() {
    setActive(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      img == images.length - 1 ? setimg(0) : setimg(img + 1);
    }, 4500);

    console.log(image);
  }, [img]);

  return (
    <div className={Style.Container}>
      <div
        className={Style.HeadSection}
        style={{ backgroundImage: `url(${images[img]})` }}
      >
        <div className={Style.SliderSec}>
          <div className={Style.SliderSubSec}>
            <h3 className={Style.welcome}>Welcome to,</h3>
            <div className={Style.logoImg}></div>
            <br></br>
            <p className={Style.SliderSubSecPar}>
              Biotech is a perfect balance of high technology and physical
              health. Using technology to help with a focus on sustainable and
              innovative solutions, Biotech has developed game-changing products
              that is set to redefine the way we think about wearable
              technology. The self-charging armband and battery charging helmet
              are a testament to Biotech's commitment to creating products that
              not only improve our lives but also reduce our carbon footprint.
              Designed to harness the power of the sun, the armband and helmet
              are equipped with solar panels that convert sunlight into energy
              to charge your devices. With their self-charging armband and
              battery charging helmet, Biotech is set to make a significant
              impact on the wearable technology market and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className={Style.BodySection}>
        <h2 className={Style.HeadingTwo}>
          Our Products
          <div
            onClick={active ? ActiveSwitch : ActiveSwitchTwo}
            className={Style.SectionOne}
          >
            <div className={Style.DispBlock}>
              <h3>Armband</h3>
              <p>Fitness phone armband that wirelessly charges your phone</p>
              <div className={active ? Style.Line : Style.LineEmpty}></div>
            </div>
            <div
              onClick={active ? ActiveSwitch : ActiveSwitchTwo}
              className={Style.DispBlockTwo}
            >
              <h3>Helmet</h3>
              <p>
                Safety helmet that keeps your devices charged and shows your
                workout
              </p>
              <div className={active ? Style.LineEmpty : Style.Line}></div>
            </div>{" "}
          </div>
          <div className={Style.Info}>
            <div
              className={
                active ? Style.InfoContainerArm : Style.InfoContainerArmHide
              }
            >
              <div className={Style.ImageOne}></div>
              <div className={Style.InstructionsContainer}>
                <h2 className={Style.Margin}>WIRELESS CHARGING ARMBAND</h2>
                <p>
                  Whether you’re on a hike or a bike, the wireless charging
                  armband ensures that your phone stays charged during any long
                  adventure or commute. This makes it the perfect addition to
                  any outdoor athlete’s life. DIRECTIONS:{" "}
                </p>
                <p>
                  1. Put on the armband by fastening the strap around your arm
                  tightly.
                </p>
                <p>
                  2. Place your smartphone or other compatible device onto the
                  charging pad. The charging pad should make contact with your
                  phone when inserted and if the batter is charged (otherwise
                  charge with helmet) the phone should charge if it has wireless
                  capabilities
                </p>
                <p>
                  3. Wait for the device to start charging. The time it takes to
                  charge will depend on the device's battery capacity and the
                  charging speed of the armband
                </p>
                <p>
                  4. Click on the relevant exercise mode. Low-, med-,
                  highintensity by clicking one of the modes on the membrane
                  buttons, it should start vibrating.
                </p>
                <p>
                  5. Short vibrations indicate rest or breathing. Long
                  vibrations indicate run/sprint or any other relevant exercise
                </p>
              </div>
            </div>

            <div
              className={
                active
                  ? Style.InfoContainerHelmetHIde
                  : Style.InfoContainerHelmet
              }
            >
              <div className={Style.ImageTwo}></div>
              <div className={Style.InstructionsContainer}>
                <h2 className={Style.Margin}>BATTERY CHARGING HELMET</h2>
                <p>
                  Whether you’re on a hike or a bike, the battery charging
                  helmet ensures that your bike lights and other devices remain
                  charged during your commute, making it a must-have accessory
                  for any outdoor athlete. Designed to harness the power of the
                  sun, the helmet is equipped with solar panels that convert
                  sunlight into energy to charge your devices. DIRECTIONS:
                </p>
                <p>
                  1. The battery get’s inserted into the holder on top of the
                  helmet.
                </p>
                <p>
                  2. Then, through the solar panel the sun charges the battery.
                </p>
                <p>
                  3. As soon as the battery is fully charged the user will be
                  notified and they can remove the battery and insert it into
                  the wireless charger, or any other item of their choice.
                </p>
                <p>
                  4. The helmet also features a display that showcases the
                  exercise status selected on the armband
                </p>
              </div>
            </div>
          </div>
        </h2>
      </div>
      <div className={Style.Footer}>
        <div className={Style.Logo}></div>
        <div className={Style.Spacer}></div>
        <p>Carmie Arpin</p>
        <p>Vian du Plessis</p>
        <p>Reinhardt de Beer</p>
        <p>Leander van Aarde</p>
      </div>
    </div>
  );
};

export default Landing;
