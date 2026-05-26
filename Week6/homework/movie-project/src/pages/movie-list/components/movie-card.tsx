interface MovieCardProps {
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
}

const MovieCard = ({ poster_path, title, release_date, overview }: MovieCardProps) => {
  return (
    <div className="rounded-sm bg-white w-55">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="posterImg" />
      <div className="p-3">
        <h4 className="text-body-bold truncate">{title}</h4>
        <p className="text-gray-800 text-body-medium">{release_date}</p>
        <p className="text-body-medium line-clamp-4">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
