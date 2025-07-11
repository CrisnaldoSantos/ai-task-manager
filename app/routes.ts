import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/dashboard.tsx"),
    route("tasks", "routes/tasks.tsx"),
    route("task/new", "routes/task-new.tsx"),
    route("task/edit/:id", "routes/task-edit.tsx"),
  ]),
] satisfies RouteConfig;
