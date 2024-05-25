import React from "react";
import CoffeeMachine from "../../img/coffee.jpg";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden sm:h-[20rem]">
      <img
        className="absolute top-0 left-0 w-full h-auto -mt-48 brightness-50 sm:top-[250px]"
        src={CoffeeMachine}
        alt="Coffee Machine"
      />
      <div className="absolute inset-0 flex flex-col text-white text-left font-mulish left-0">
        <div className="ml-56 my-60 sm:ml-10 sm:mt-36">
          <h1 className="text-6xl mb-4 font-base tracking-wide sm:text-xl sm:font-bold">
            STARBUCKS RESERVE
          </h1>
          <p className="max-w-2xl text-xl font-light tracking-wider sm:text-sm sm:tracking-tighter ">
            Since 1971, it always has been and will always be about quality.
            <br />
            We’re passionate about ethically sourcing only the finest Arabica
            coffee beans and roasting them with great care. Our passion for
            coffee is rivaled only by our love of sharing it.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default HeroSection;
