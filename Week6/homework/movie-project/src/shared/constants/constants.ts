import type { MovieBasicProps } from "@/pages/movie-detail/components/movie-basic";

export const RATING_OPTIONS = [
  { label: "전체", value: null },
  { label: "1점대", value: 1 },
  { label: "2점대", value: 2 },
  { label: "3점대", value: 3 },
  { label: "4점대", value: 4 },
  { label: "5점대", value: 5 },
  { label: "6점대", value: 6 },
  { label: "7점대", value: 7 },
  { label: "8점대", value: 8 },
  { label: "9점대", value: 9 },
];

export const BASIC_INFO = (props: MovieBasicProps) => [
  { label: "원제", value: props.original_title },
  { label: "원어", value: props.original_language },
  { label: "제작 국가", value: props.origin_country.join(", ") },
  { label: "언어", value: props.spoken_languages.map((lang) => lang.english_name).join(", ") },
  { label: "예산", value: `$${props.budget.toLocaleString()}` },
  { label: "수익", value: `$${props.revenue.toLocaleString()}` },
];
