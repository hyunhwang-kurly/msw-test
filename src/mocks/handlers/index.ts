import { rest } from "msw";
import { users } from './data/users';

export const handlers = [
  rest.get("https://backend.dev/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json(users),
      );
  }),
];
