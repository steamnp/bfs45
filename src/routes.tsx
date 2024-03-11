import WildCard from "./components/WildCard";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import { Route } from "./types";

export const routes: Route[] = [
  {
    text: "Task 1",
    to: "/task1",
    element: <Task1 />,
  },
  {
    text: "Task 2",
    to: "/task2",
    element: <Task2 />,
  },
];

export function getRoute(route: string) {
  for (let r of routes) {
    if (r.text === route) return r;
  }

  return {
    text: "",
    to: "",
    element: <WildCard />,
  };
}
