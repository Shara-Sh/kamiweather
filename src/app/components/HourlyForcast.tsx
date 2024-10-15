function HourlyForcast() {
  return (
    <div className="flex gap-10 justify-center">
      <div className="flex flex-col items-center">
        <p>Now</p>
        <img src="/assets/svg/moon.svg" alt="moon" className="size-8" />
        <p className="text-xl font-semibold">23°</p>
      </div>
      <div className="flex flex-col items-center">
        <p>7pm</p>
        <img src="/assets/svg/moon.svg" alt="moon" className="size-8" />
        <p className="text-xl font-semibold">23°</p>
      </div>
      <div className="flex flex-col items-center">
        <p>8pm</p>
        <img src="/assets/svg/moon.svg" alt="moon" className="size-8" />
        <p className="text-xl font-semibold">23°</p>
      </div>
      <div className="flex flex-col items-center">
        <p>9pm</p>
        <img src="/assets/svg/moon.svg" alt="moon" className="size-8" />
        <p className="text-xl font-semibold">23°</p>
      </div>
      <div className="flex flex-col items-center">
        <p>10pm</p>
        <img src="/assets/svg/moon.svg" alt="moon" className="size-8" />
        <p className="text-xl font-semibold">23°</p>
      </div>
    </div>
  );
}

export default HourlyForcast;
