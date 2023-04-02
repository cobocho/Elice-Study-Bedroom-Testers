const IBU = "ibu";
const MALTY = "malty";

export const QUESTIONS = [
  {
    seq: 0,
    question: "당신이 맥주를 좋아하는 이유는 무엇인가요?",
    category: IBU,
    options: ["안주의 느끼함을 잡아주는 씁쓸함!", "음료수처럼 깔끔하게 떨어지는 맛!"],
  },
  {
    seq: 1,
    question: "맥주에 어울리는 향은 무엇이라 생각하나요?",
    category: MALTY,
    options: ["커피를 마시는 것처럼 풍겨오는 깊고 묵직한 향!", "허브나 과일같이 산뜻한 향!"],
  },
  {
    seq: 2,
    question: "만약 맥주가 없다면 나의 대안은?",
    category: IBU,
    options: ["한국인은 소주!", "달달한 하이볼이나 칵테일!"],
  },
  {
    seq: 3,
    question: "나의 카페 최애 메뉴는?",
    category: MALTY,
    options: ["코를 행복하게 해주는 에스프레소 기반 메뉴!", "신선한 생과일 스무디나 에이드!"],
  },
  {
    seq: 4,
    question: "맥주와 어울리는 안주는?",
    category: IBU,
    options: ["맵고 느끼한 자극적인 요리!", "맥주의 맛을 살리는 마른안주나 과자!"],
  },
  {
    seq: 5,
    question: "집에 있는데 갈증이 난다! 편의점에서 어떤걸 사올까?",
    category: MALTY,
    options: ["향이 좋은 보리차나 옥수수수염차!", "갈증 해소에는 탄산음료!"],
  },
];

export const TYPE_QUESTIONS = {
  type1: {
    base: {
      question: "씁쓸한 술에 대해 어떻게 생각하나요?",
      options: ["나는 소주가 달다. 쓴맛이말로 술의 매력!", "너무 쓰면 안주가 묻힌다. 뭐든지 적당한게 최고!"],
    },
    plus: {
      question: "당신의 취향은?",
      options: [
        { result: "Imperial", desc: "수 많은 맛이 느껴지는 강렬한 맥주!" },
        { result: "Stout", desc: "깔끌하게 떨어지는 맥주!" },
      ],
    },
    minus: {
      question: "당신의 취향은?",
      options: [
        { result: "Porter", desc: "묵직하면서 맛의 밸런스도 맞는 맥주!" },
        { result: "Dunkel", desc: "강렬한 흑보리를 느낄 수 있는 맥주!" },
      ],
    },
  },
  type2: {
    base: {
      question: "어떤 맥주가 더 취향인가요?",
      options: ["과일향이 많이 나는 맥주!", "밸런스 잡힌 맛의 맥주!"],
    },
    plus: {
      question: "씁쓸한 맥주가 취향인가요?",
      options: [
        { result: "IPA", desc: "맥주는 써야 제맛!" },
        { result: "Neweng", desc: "쓴 맛 보다는 향이 더 중요해!" },
      ],
    },
    minus: {
      question: "씁쓸한 맥주가 취향인가요?",
      options: [
        { result: "Pilser", desc: "맥주는 써야 제맛!" },
        { result: "PaleAle", desc: "쓴 맛 보다는 보편적인 맥주가 취향!" },
      ],
    },
  },
  type3: {
    base: {
      question: "약간 씁쓸한 맥주도 괜찮나요?",
      options: ["어느정도 씁쓸한건 괜찮아!", "최대한 쓰지 않았으면 좋겠어!"],
    },
    plus: {
      question: "당신의 취향은?",
      options: [
        { result: "Belgian", desc: "부드럽고 과일향이 강한 맥주!" },
        { result: "PaleLager", desc: "맥주 본연의 맛을 느낄 수 있는 맥주" },
      ],
    },
    minus: {
      question: "당신의 취향은",
      options: [
        { result: "Radler", desc: "츄하이나 칵테일 같은 달달한 음료같은 맥주!" },
        { result: "Geuze", desc: "특이하면서 생소한 샴페인 같은 맛!" },
      ],
    },
  },
  type4: {
    base: {
      question: "좀 더 좋아하는 맥주 취향은?",
      options: ["깔끔하고 균형적인 맥주!", "보리향이 강한 맥주!"],
    },
    plus: {
      question: "당신의 취향은?",
      options: [
        { result: "LightLager", desc: "목넘김과 맛이 깔끔한 맥주!" },
        { result: "Weizen", desc: "맥주의 재료의 향을 느낄 수 있는 맥주" },
      ],
    },
    minus: {
      question: "약간 씁쓸한 맥주도 괜찮나요?",
      options: [
        { result: "Bock", desc: "어느정도 씁쓸한건 괜찮아!" },
        { result: "DarkLager", desc: "최대한 쓰지 않았으면 좋겠어!" },
      ],
    },
  },
};
