interface NavLinks {
  path: string;
  name: string;
}

const navLinks: NavLinks[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/movies",
    name: "Movies",
  },
  {
    path: "/series",
    name: "Series",
  },
];

export { navLinks };
export type { NavLinks };
