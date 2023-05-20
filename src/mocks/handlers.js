// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export const handlers = [
  rest.get('/user/:login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: req.params.login,
      }),
    );
  }),
];
