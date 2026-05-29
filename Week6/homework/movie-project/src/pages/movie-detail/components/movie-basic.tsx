import { BASIC_INFO } from "@/shared/constants/constants";

export interface MovieBasicProps {
  original_title: string;
  original_language: string;
  origin_country: string[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  budget: number;
  revenue: number;
}

const MovieBasic = (props: MovieBasicProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 gap-2 flex-1">
      <h2 className="text-body-bold">기본 정보</h2>
      <dl className="flex flex-col gap-2">
        {BASIC_INFO(props).map(({ label, value }) => (
          <div key={label} className="flex gap-2 border-b border-black/10 pb-2">
            <dt className="text-body-bold text-gray-800 w-30">{label}</dt>
            <dd className="text-body-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default MovieBasic;
