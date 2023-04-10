import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtSlider from "./BtnSlider";
import Style from "./landing.module.scss";

const Landing = () => {
  const [active, setActive] = useState(true);

  function ActiveSwitch() {
    setActive(false);
  }

  function ActiveSwitchTwo() {
    setActive(true);
  }

  return (
    <div className={Style.Container}>
      <div className={Style.HeadSection}>
        <div className={Style.SliderSec}>
          <div className={Style.SliderSubSec}>
            <h3>Welcome to,</h3>
            <h1>BIOTECH</h1>
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
              <p>
                Description of the service will have to go there and it will not
                be long or anything like that
              </p>
              <div className={active ? Style.Line : Style.LineEmpty}></div>
            </div>
            <div
              onClick={active ? ActiveSwitch : ActiveSwitchTwo}
              className={Style.DispBlock}
            >
              <h3>Helmet</h3>
              <p>
                Description of the service will have to go there and it will not
                be long or anything like that
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
              <h2 className={Style.Margin}>WIRELESS CHARGING ARMBAND</h2>
              <p>
                Whether you’re on a hike or a bike, the wireless charging
                armband ensures that your phone stays charged during any long
                adventure or commute. This makes it the perfect addition to any
                outdoor athlete’s life. DIRECTIONS:{" "}
              </p>
              <p>
                1. Put on the armband by sliding your arm through the opening.
                The charging pad should be on the inside of the armband and
                should be in contact with your skin.{" "}
              </p>
              <p>
                2. Place your smartphone or other compatible device onto the
                charging pad. The charging pad should be positioned so that it
                aligns with the device's charging port.{" "}
              </p>
              <p>
                3. Wait for the device to start charging. You should see a
                charging indicator light up on both the armband and the device.
                The time it takes to charge will depend on the device's battery
                capacity and the charging speed of the armband.{" "}
              </p>
              <p>
                4. Once your device is fully charged, remove it from the armband
                by sliding it off the charging pad.
              </p>
            </div>

            <div
              className={
                active
                  ? Style.InfoContainerHelmetHIde
                  : Style.InfoContainerHelmet
              }
            >
              <div className={Style.ImageOne}></div>
              <h2 className={Style.Margin}>BATTERY CHARGING HELMET</h2>
              <p>
                Whether you’re on a hike or a bike, the battery charging helmet
                ensures that your bike lights and other devices remain charged
                during your commute, making it a must-have accessory for any
                outdoor athlete. Designed to harness the power of the sun, the
                helmet is equipped with solar panels that convert sunlight into
                energy to charge your devices. DIRECTIONS:
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
                notified and they can remove the battery and insert it into the
                wireless charger, or any other item of their choice.
              </p>
              <p>4. The helmet also features a display that shows</p>
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
