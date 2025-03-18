import IMAGE_DATA from "./constants/imagedata";
import ImageGrid from "./components/ImageGrid";
import ImageCarousel from "./components/ImageCarousel";
import "@fontsource/martel-sans";

function App() {
  return (
    <>
      <div className="py-8 px-5 max-w-[1200px] mx-auto mt-[78px] md:mt-[150px] md:px-4">
        <div className="flex flex-col">
          <h2 className="text-center text-[20px] font-semibold uppercase font-martel text-[#887C68] mb-10 sm:text-[28px] sm:mb-[70px]">
            Communities We Manage
          </h2>
          <ImageGrid images={IMAGE_DATA} />
          <div className="h-[350px] sm:h-[195px]"></div>
          <h2 className="text-center text-5 font-semibold uppercase font-martel text-[#887C68] mb-10 sm:text-[20px] sm:mb-[70px]">
            Our Services
          </h2>
          <ImageCarousel images={IMAGE_DATA} />
        </div>
      </div>
    </>
  );
}

export default App;
