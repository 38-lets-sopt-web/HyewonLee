import Chip from "./chip";
import { IMAGE_BASE_URL } from "@/shared/api/instance";
import InfoBox from "./info-box";

interface MovieInfoProps {
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  runtime: number;
  status: string;
}

const MovieInfo = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  genres,
  vote_average,
  vote_count,
  runtime,
  status,
}: MovieInfoProps) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="rounded-xl overflow-hidden bg-white">
      <img
        src={`${IMAGE_BASE_URL}/original${backdrop_path}`}
        className="w-full h-90 object-cover object-center"
        alt="backdrop"
      />
      <div className="flex p-6 gap-6">
        <img
          src={`${IMAGE_BASE_URL}/w500${poster_path}`}
          className="rounded-xl w-70"
          alt="poster"
        />
        <div className="flex flex-col gap-2">
          <p className="text-body-bold text-gray-800">{release_date}</p>
          <h3 className="text-heading">{title}</h3>
          <div className="flex gap-1 items-center">
            {genres.map((genre) => (
              <Chip key={genre.id} name={genre.name} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 mt-3">
            <InfoBox label="평점" value={`${vote_average.toFixed(1)} / 10`} />
            <InfoBox label="투표 수" value={vote_count.toLocaleString()} />
            <InfoBox label="상영 시간" value={`${hours}시간 ${minutes}분`} />
            <InfoBox label="상태" value={status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
