import { Slide } from "react-slideshow-image";

const slideShow = () => {
  return (
    <div className="topSlide">
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              backgroundImage:
                "url(https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ)",
            }}
          >
            <span style={{ color: "gray", backgroundColor: "black" }}>
              Core Software Technologies, well known as CoreTech is a turnkey
              software and business solution provider. Established in 2005 to
              steer customers
              <br /> through the next generation of business innovation powered
              by technology
              <br /> with state-of-the-art business automation, software
              development and consultation services. CoreTech
              <br /> specialized in the healthcare business industry providing
              automation and solutions products in the field
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage:
                "url(https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE)",
            }}
          >
            <span>
              For companies operating in the information age we help to leverage
              new technologies to competitive advantage.
              <br /> We deliver high value innovated solutions by bridging the
              gap between business and technology.
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage:
                "url(https://i.picsum.photos/id/192/2352/2352.jpg?hmac=jN5UExysObV7_BrOYLdxoDKzm_c_lRM6QkaInKT_1Go)",
            }}
          >
            <span style={{ color: "black", backgroundColor: "gray" }}>
              Since CoreTech inception, proven, demonstrate and invent unique
              products, techniques and capabilities that far and uniquely
              distinguish us from other software provider as we are
              <br />
              specialized in developing varies automated solutions in the field
              of insurance and hospital
              <br /> management, that is tailored to utilize the international
              standard such as WHO and medical and insurance science.
            </span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default slideShow;
