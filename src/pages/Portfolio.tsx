import Chart from 'react-apexcharts';

function Portfolio() {
  const series = [6, 80, 14];
  const options = { labels: ['国内株式', '国際株式', 'その他'] }

  return (
	  <>
      <div className="flex flex-col justify-center items-center bg-white h-screen -mt-16 -mb-12">
        <h1>Portfolio</h1>
        <Chart options={options} series={series} type="pie" width="500px" />
      </div>
    </>
  );
}

export default Portfolio;
