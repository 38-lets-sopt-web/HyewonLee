import { useNavigate } from "react-router-dom";
import starImg from "@/pages/movie-list/assets/star.png";
import { IMAGE_BASE_URL } from "@/shared/api/instance";
import Image from "@/shared/components/image";
interface MovieCardProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
  overview,
  vote_average,
}: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="rounded-sm bg-white w-55 transition-transform hover:scale-103"
    >
      <Image
        src={`${IMAGE_BASE_URL}/w500${poster_path}`}
        alt="posterImg"
        className="w-full aspect-2/3"
      />
      <div className="p-3">
        <h4 className="text-body-bold truncate">{title}</h4>
        <p className="text-gray-800 text-body-medium">{release_date}</p>
        <p className="text-body-bold flex">
          <img src={starImg} alt="star" className="w-7 h-7 -mt-1" /> {vote_average.toFixed(1)}
        </p>
        <p className="text-body-medium line-clamp-4">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
