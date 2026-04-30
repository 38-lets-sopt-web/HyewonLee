// 점수 내림차순 정렬
import { getScores } from "./storage";

export function getSortedRank() {
  return getScores().sort((a, b) => {
    // 레벨 다르면 레벨 내림차순(localeCompare로 문자열 비교)
    if (a.level !== b.level) return b.level.localeCompare(a.level);
    // 레벨 같으면 점수 내림차순
    return b.score - a.score;
  });
}
