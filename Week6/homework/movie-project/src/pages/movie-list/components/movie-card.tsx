import starImg from "@/assets/star.png";
interface MovieCardProps {
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const MovieCard = ({
  poster_path,
  title,
  release_date,
  overview,
  vote_average,
}: MovieCardProps) => {
  return (
    <div className="rounded-sm bg-white w-55">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="posterImg"
        className="w-full aspect-2/3"
      />
      <div className="p-3">
        <h4 className="text-body-bold truncate">{title}</h4>
        <p className="text-gray-800 text-body-medium">{release_date}</p>
        <p className="text-body-bold flex gap-1">
          <img src={starImg} alt="star" className="w-5 h-6.5 -mt-0.5" /> {vote_average.toFixed(1)}
        </p>
        <p className="text-body-medium line-clamp-4">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
