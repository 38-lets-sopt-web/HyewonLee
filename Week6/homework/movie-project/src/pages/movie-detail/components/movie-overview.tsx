interface MovieOverviewProps {
  overview: string;
}

const MovieOverview = ({ overview }: MovieOverviewProps) => {
  return (
    <div className="rounded-xl bg-white p-6">
      <h3 className="text-body-bold">줄거리</h3>
      <p className="text-body-medium">{overview}</p>
    </div>
  );
};

export default MovieOverview;
