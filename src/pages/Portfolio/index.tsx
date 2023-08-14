import calculatorImage from "../../assets/calculator.png";
import kabsahiCartImage from "../../assets/kabsahi-cart.png";

const Portfolio = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center p-10'>
      <h1 className='text-2xl'>Portfolio of Kent Jordan</h1>
      <span className='text-stone-500'>Click each of items to view</span>
      <div className='my-16 flex w-[900px] flex-wrap justify-center'>
        <div
          className='flex flex-col w-64 shadow m-2 rounded-md cursor-pointer p-4'
          onClick={() => window.open("https://calc-kjordan.vercel.app/")}>
          <div className=''>
            <h1 className='font-bold'>MDAS Calculator</h1>
            <p className='text-sm text-stone-500'>
              A basic calculator that can solve in MDAS.
            </p>
          </div>
        </div>
        <div
          className='flex flex-col w-64 shadow m-2 rounded-md cursor-pointer p-4'
          onClick={() => window.open("https://kabsahi-devlopment.vercel.app/")}>
          <div className=''>
            <h1 className='font-bold'>Kabsahi Cart</h1>
            <p className='text-sm text-stone-500'>
              Proposal website for Kabsahi
            </p>
          </div>
        </div>
        <div
          className='flex flex-col w-64 shadow m-2 rounded-md cursor-pointer p-4'
          onClick={() => window.open("https://kjordan-gallery.vercel.app/")}>
          <h1 className='font-bold'>Simple Image Gallery</h1>
          <p className='text-sm text-stone-500'>
            An image gallery was made due to practice.
          </p>
        </div>
        <div
          className='flex flex-col w-64 shadow m-2 rounded-md cursor-pointer p-4'
          onClick={() =>
            window.open(
              "https://kjordan-visualize.vercel.app/algorithms/searching/binary-search"
            )
          }>
          <h1 className='font-bold'>Binary Search Visualizer</h1>
          <p className='text-sm text-stone-500'>
            A web-based visualizer for Binary Search.
          </p>
        </div>
        <div
          className='flex flex-col w-64 shadow m-2 rounded-md cursor-pointer p-4'
          onClick={() =>
            window.open(
              "https://kjordan-visualize.vercel.app/algorithms/searching/linear-search/demo"
            )
          }>
          <h1 className='font-bold'>Linear Search Visualizer</h1>
          <p className='text-sm text-stone-500'>
            A web-based visualizer for Linear Search.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
