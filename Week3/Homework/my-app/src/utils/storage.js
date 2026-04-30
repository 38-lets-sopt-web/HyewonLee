// localStorage에 저장
const STORAGE_KEY = "mole_scores";

export function saveScore(level, score) {
  // 점수가 0 이하면 저장 안 함
  if (score <= 0) return;

  // 기록 불러오기
  const scores = getScores();
  scores.push({
    level,
    score,
    timestamp: new Date().toISOString(),
  });

  // 배열을 문자열로 변환해서 저장
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

// 저장된 기록 가져오기
export function getScores() {
  // 문자열로 가져와서 배열로 변환
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

// 기록 초기화
export function clearScores() {
  // 키에 접근해서 삭제
  localStorage.removeItem(STORAGE_KEY);
}
