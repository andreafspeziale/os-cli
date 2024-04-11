FROM node:20.12.2-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN mkdir /opt/os-cli && chown -R node:node /opt/os-cli
WORKDIR /opt/os-cli

USER node

COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm pkg delete scripts.prepare

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
COPY --chown=node:node tsconfig.json tsconfig.build.json src/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS runner
COPY --from=prod-deps --chown=node:node /opt/os-cli/node_modules /opt/os-cli/node_modules
COPY --from=build --chown=node:node /opt/os-cli/dist /opt/os-cli/dist
ENTRYPOINT ["node", "dist/os-cli.js"]
