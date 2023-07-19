FROM node:18.17.0-alpine3.18 as base

RUN npm i -g pnpm@8.6.9

RUN mkdir /opt/os-cli && chown -R node:node /opt/os-cli
WORKDIR /opt/os-cli

USER node

COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm pkg delete scripts.prepare
RUN pnpm fetch --prod
RUN pnpm install -r --offline --prod

FROM base as builder
COPY --chown=node:node . .
RUN pnpm install -r --offline --dev
RUN pnpm build

FROM base as runner
COPY --from=builder --chown=node:node /opt/os-cli/dist /opt/os-cli/dist
ENTRYPOINT ["node", "dist/os-cli.js"]