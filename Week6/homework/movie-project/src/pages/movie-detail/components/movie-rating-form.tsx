import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRating, deleteRating } from "@/pages/movie-detail/api/movie-rating";
import z from "zod";
import toast from "react-hot-toast";
interface MovieRatingFormProps {
  id: number;
  currentRating: number | undefined;
  guestSessionId: string;
}

const MovieRatingForm = ({ id, currentRating, guestSessionId }: MovieRatingFormProps) => {
  const [rating, setRating] = useState(currentRating ? String(currentRating) : "");
  const [successMessage, setSuccessMessage] = useState("");
  const queryClient = useQueryClient();

  const { mutate: saveRating } = useMutation({
    mutationFn: () => postRating(id, guestSessionId, Number(rating)),
    onSuccess: () => {
      setSuccessMessage("별점이 저장되었습니다!");
      queryClient.invalidateQueries({ queryKey: ["ratedMovies", guestSessionId] });
    },
  });

  const { mutate: deleteRatingMutate } = useMutation({
    mutationFn: () => deleteRating(id, guestSessionId),
    onSuccess: () => {
      setSuccessMessage("별점이 삭제되었습니다!");
      setRating("");
      queryClient.invalidateQueries({ queryKey: ["ratedMovies", guestSessionId] });
    },
  });

  const ratingSchema = z
    .number()
    .min(0.5, "0.5 이상 입력해주세요.")
    .max(10, "10 이하로 입력해주세요.")
    .multipleOf(0.5, "0.5 단위로 입력해주세요.");

  const handleSave = () => {
    const value = ratingSchema.safeParse(Number(rating));
    if (!value.success) {
      toast.error(value.error.issues[0].message);
      return;
    }
    saveRating();
  };

  return (
    <div className="flex flex-col rounded-xl bg-white p-6 gap-2 flex-1">
      <h2 className="text-body-bold">별점 남기기</h2>
      <p className="text-body-medium">0.0 ~ 10.0</p>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder={currentRating ? String(currentRating) : "별점을 입력해주세요."}
        min={0}
        max={10}
        className="border border-black/10 rounded-md p-2"
      />
      <div className="flex gap-2">
        <button
          onClick={handleSave}
          className="bg-black text-white text-body-medium rounded-md w-25 py-1"
          type="submit"
        >
          별점 저장
        </button>
        <button
          onClick={() => deleteRatingMutate()}
          className="bg-white border border-black/20 text-body-medium rounded-md w-25 py-1"
          type="submit"
        >
          별점 삭제하기
        </button>
      </div>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default MovieRatingForm;
