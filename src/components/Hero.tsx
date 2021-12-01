function Hero(props: { text: string }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen -mt-16 -mb-12">
      <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-black mb-14">{props.text}</h1>
    </div>
  );
}

export default Hero;
