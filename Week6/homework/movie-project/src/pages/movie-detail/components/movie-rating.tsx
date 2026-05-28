const MovieRating = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 gap-2 flex-1">
      <h2 className="text-body-bold">별점 남기기</h2>
      <p className="text-body-medium">0.5 ~ 10.0</p>
      <input className="border border-black/10 rounded-md p-2" />
      <div className="flex gap-2">
        <button className="bg-black text-white text-body-medium rounded-md w-25 py-1" type="submit">
          별점 저장
        </button>
        <button
          className="bg-white border border-black/20 text-body-medium rounded-md w-25 py-1"
          type="submit"
        >
          별점 삭제하기
        </button>
      </div>
    </div>
  );
};

export default MovieRating;
