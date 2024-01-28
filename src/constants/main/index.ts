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
    route: "/realty",
  },
  {
    title: "적금/예금",
    route: "/deposit",
  },
  {
    title: "경제",
    route: "/common",
  },
  {
    title: "강의",
    route: "/lecture",
  },
];
