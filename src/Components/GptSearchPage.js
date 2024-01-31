import GptSearchBar from "./GptSearchBar";
import GptMovieRecommendation from "./GptMovieRecommendation";
import { BG_URL } from "../Utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-full"
          src={BG_URL}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieRecommendation />
    </div>
  );
};

export default GptSearchPage;

/**
 * Gpt Search bar
 * Gpt movie recommendation
 */
