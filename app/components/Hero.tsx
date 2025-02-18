import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <span className="heading">
          <h1 className="heroh1">
            Currency Converter
            <br />
            with Exchange Rate
            <br />
            API
          </h1>
        </span>
        <span className="text">
          <p>
            Your lightweight, frontend-only tool for converting <br className="br" />
            currencies and accessing
            <br className="showbr" /> up-to-date exchange rates. <br className="br" /> Perfect for developers and
            users alike.
          </p>
        </span>
        <button className="gets">Get Started</button>
        <div className="video">
          <Image
            src="/Assets/mainpic.png"
            alt="Currency-Exchange-How-to-use"
            width={500}
            height={300}
            className="vid"
            priority // Ensures that this image is prioritized for loading
          />
        </div>
      </div>
    </div>
  );
}
