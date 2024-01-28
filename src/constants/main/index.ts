interface HEADER_LIST_TYPE {
  title: string;
  route: string;
}

export const HEADER_LIST: HEADER_LIST_TYPE[] = [
  {
    title: "주식",
    route: "/stock",
  },
  {
    title: "부동산",
    route: "/immovables",
  },
  {
    title: "적금/예금",
    route: "/savings",
  },
  {
    title: "경제",
    route: "/economy",
  },
  {
    title: "강의",
    route: "/lecture",
  },
];
