# Changelog

## [1.10.3](https://github.com/andreafspeziale/os-cli/compare/1.10.2...1.10.3) (2026-03-06)

### Miscellaneous

* update nestjs-log to v1.2.1 and nestjs-search to v2.0.1 ([41f4cd1](https://github.com/andreafspeziale/os-cli/commit/41f4cd1523151dc6e460290804f163c09701acec))

## [1.10.2](https://github.com/andreafspeziale/os-cli/compare/1.10.1...1.10.2) (2026-03-06)

### Miscellaneous

* enable npm publish in release-it config ([c4c3cee](https://github.com/andreafspeziale/os-cli/commit/c4c3ceed4d6a1e8afda646cf6277ddf5ac5d9f29))

## [1.10.1](https://github.com/andreafspeziale/os-cli/compare/1.10.0...1.10.1) (2026-03-06)

### Miscellaneous

* update dependency @types/node to v24.11.2 ([8646bf4](https://github.com/andreafspeziale/os-cli/commit/8646bf4545e23cfb5c8e7ebbaa35d2ecebfa82e0))
* update dependency @types/node to v24.12.0 ([be158f6](https://github.com/andreafspeziale/os-cli/commit/be158f68c4b684f8c3b0f537b8fd40a3e22a89f8))
* update dependency @types/node to v24.12.0 ([eb08a5a](https://github.com/andreafspeziale/os-cli/commit/eb08a5a59289b69aacf39eb7c15ec94a32913932))
* upgrade commitlint to v20 ([d3c0211](https://github.com/andreafspeziale/os-cli/commit/d3c021182e2885c3bb488ec9a95fa595c3c7772f))
* upgrade jest to v30 and @types/jest to v30 ([6221532](https://github.com/andreafspeziale/os-cli/commit/622153287bff7df894a43a204a0f1e07b1f12d2f))
* upgrade lint-staged to v16 ([a6d60d3](https://github.com/andreafspeziale/os-cli/commit/a6d60d3fb9ee2ce605a662228fb7da3339068522))
* upgrade minor/patch dependencies and fix vulnerabilities ([2b5382f](https://github.com/andreafspeziale/os-cli/commit/2b5382f917451f24152a6f106ccb0606cc266d93))

## [1.10.0](https://github.com/andreafspeziale/os-cli/compare/1.9.0...1.10.0) (2026-03-05)

### Features

* add exists document command ([71feb7c](https://github.com/andreafspeziale/os-cli/commit/71feb7cc2fc14d6ca858ce4003bca07161f5e687))
* add get document command ([9f63464](https://github.com/andreafspeziale/os-cli/commit/9f63464b3fc036f8a45a1cb6a141de9ce1ce33f4))
* add slices, requests-per-second, max-docs, and batch-size options to reindex command ([272b180](https://github.com/andreafspeziale/os-cli/commit/272b1802e49d2762800a7269a3c49cef9becf488))
* add zod validation for reindex optional numeric options ([902b300](https://github.com/andreafspeziale/os-cli/commit/902b300fe20fd98a85c469d9e04048c88b7fd3de))
* analyze command ([7fe4317](https://github.com/andreafspeziale/os-cli/commit/7fe431720175a7d9c7e6093ac773035b035fb809))

### Bug Fixes

* fix release workflow and upgrade release-it to v19 ([2455a3f](https://github.com/andreafspeziale/os-cli/commit/2455a3f73466bd9efb8cb316cc787ea6ce8220b2))
* properly bubble up errors from CLI bootstrap ([ffdecfa](https://github.com/andreafspeziale/os-cli/commit/ffdecfa14f03cc23689ec4739f1a40a452693805))
* remove incorrect analyzer default and fix analyze success log message ([091d235](https://github.com/andreafspeziale/os-cli/commit/091d23557f78fbdc19fba1733fedb99e8fd0e793))
* update dependency @aws-sdk/credential-providers to v3.772.0 ([ee279b9](https://github.com/andreafspeziale/os-cli/commit/ee279b97abbb7c28c7a702d2cf7d8f78310ee566))
* update dependency @aws-sdk/credential-providers to v3.775.0 ([416dae6](https://github.com/andreafspeziale/os-cli/commit/416dae6d4cf9ba6be022f738cf50a298fc40bfa1))
* update dependency @aws-sdk/credential-providers to v3.778.0 ([c4edfd6](https://github.com/andreafspeziale/os-cli/commit/c4edfd62a8bae09fed06e295c1d7e360f2ebf19a))
* use correct flag type labels for optional options and fix reindex body size placement ([c6eea19](https://github.com/andreafspeziale/os-cli/commit/c6eea1993665b9c6c03c9bd2be98abd329f9326c))

### Miscellaneous

* automerge all type of deps when minor and patch ([99489fd](https://github.com/andreafspeziale/os-cli/commit/99489fdb136dd58a035980021fead3f48f1fa51d))
* bump @types/node to 24.x and tsconfig target to ES2024 ([9e4a991](https://github.com/andreafspeziale/os-cli/commit/9e4a9914fe4a2e540dd7f7ab05940154dc8a7f34))
* recreate lock file ([a4c7081](https://github.com/andreafspeziale/os-cli/commit/a4c7081cbb27fc74e655aa7622517f058cb7cb4f))
* simplify renovate config automerge strategy ([9ef93e6](https://github.com/andreafspeziale/os-cli/commit/9ef93e6875d0e527df5f335463afaa18cb822ddd))
* update dependency @aws-sdk/credential-providers to v3.1002.0 ([4406777](https://github.com/andreafspeziale/os-cli/commit/4406777405b76152659de38ded8eadd5698157ce))
* update dependency @aws-sdk/credential-providers to v3.1003.0 ([72581f1](https://github.com/andreafspeziale/os-cli/commit/72581f18a53b703fd83fd1582e97c0888a00550f))
* update dependency @types/node to v22.13.11 ([d805fa1](https://github.com/andreafspeziale/os-cli/commit/d805fa115eb99cce946cd4b3a6fcb6f44296a652))
* update dependency @types/node to v22.13.13 ([220346e](https://github.com/andreafspeziale/os-cli/commit/220346e6825bf4a2d9209177ab71dc357c5b4145))
* update dependency @types/node to v22.13.14 ([f676524](https://github.com/andreafspeziale/os-cli/commit/f6765240f3646e517db28d9517d2208631ff274c))
* update dependency @types/node to v22.19.13 ([fe741a7](https://github.com/andreafspeziale/os-cli/commit/fe741a7c337ce53c0d4c859f5c1b6a41d805bb6f))
* update dependency @types/supertest to v6.0.3 ([59908b1](https://github.com/andreafspeziale/os-cli/commit/59908b10819367211ddf427cb7cff98e39f2606b))
* update dependency eslint-plugin-prettier to v5.2.5 ([52492f7](https://github.com/andreafspeziale/os-cli/commit/52492f796b245533af465afdbbdae77373405add))
* update dependency eslint-plugin-prettier to v5.5.5 ([85bc2b2](https://github.com/andreafspeziale/os-cli/commit/85bc2b285408319c201258571ed751308034915d))
* update dependency eslint-plugin-unused-imports to v4.4.1 ([1af0066](https://github.com/andreafspeziale/os-cli/commit/1af0066e31e921b70b02470ba740a7ea98559191))
* update dependency eslint-plugin-unused-imports to v4.4.1 ([9825921](https://github.com/andreafspeziale/os-cli/commit/98259218f7e5f7a9ab92dfb986806cbdece3fe22))
* update dependency prettier to v3.8.1 ([f09935f](https://github.com/andreafspeziale/os-cli/commit/f09935f9802ed30ae68faa3e7860f045845b8478))
* update dependency prettier to v3.8.1 ([d7e8701](https://github.com/andreafspeziale/os-cli/commit/d7e87014266fde62c0a712c23cb74508e000e9c9))
* update dependency supertest to v7.1.0 ([f8fc0ce](https://github.com/andreafspeziale/os-cli/commit/f8fc0ce20b84e92e8337dbb252b293c58fc85018))
* update dependency supertest to v7.2.2 ([4feb468](https://github.com/andreafspeziale/os-cli/commit/4feb46809e9784500b49f0843d7dc6ad6c14f1d8))
* update dependency ts-jest to v29.3.0 ([d00c8b3](https://github.com/andreafspeziale/os-cli/commit/d00c8b3060cf1c2f6c6b19b0366a837b34acd21c))
* update dependency ts-jest to v29.4.6 ([be08e72](https://github.com/andreafspeziale/os-cli/commit/be08e7283ea744be14255e187f6b772472b16b74))
* update dependency ts-jest to v29.4.6 ([54d935b](https://github.com/andreafspeziale/os-cli/commit/54d935b63ce7647d5f54669ff01ee9917e7c4dba))
* update dependency typescript-eslint to v8.28.0 ([d8c2b4d](https://github.com/andreafspeziale/os-cli/commit/d8c2b4d5571b73ee18952d101d131eff67253816))
* update dependency typescript-eslint to v8.56.1 ([853b7a4](https://github.com/andreafspeziale/os-cli/commit/853b7a4d91006f5b5b495a47e32028384d0b3639))
* update dependency typescript-eslint to v8.56.1 ([a9ea558](https://github.com/andreafspeziale/os-cli/commit/a9ea558dd916aee808f9f318662ea8f7e19079d2))
* update eslint monorepo to v9.23.0 ([18394f4](https://github.com/andreafspeziale/os-cli/commit/18394f4a233eab3df992d52ee3c6035c924ed559))
* update eslint monorepo to v9.39.3 ([109467c](https://github.com/andreafspeziale/os-cli/commit/109467cf558f1cfa58704de8a5622ae90ace24cb))
* update nest monorepo ([b502600](https://github.com/andreafspeziale/os-cli/commit/b502600b9e76a22bd21c14b523005026ca143922))
* update nest monorepo ([9fc14dd](https://github.com/andreafspeziale/os-cli/commit/9fc14ddcddc59f000d97e2342302298ac7b7a9a6))
* update node.js to v22.22.0 ([1142a9e](https://github.com/andreafspeziale/os-cli/commit/1142a9e40956b5a98caf72e9eca87c9d630048f5))
* update pnpm/action-setup version to 10 in release workflow ([6e736ae](https://github.com/andreafspeziale/os-cli/commit/6e736aebd1f5ee4b312ce932f66fa38d12acb9b8))
* upgrade nodejs to 24.14.0 and pnpm to 10.30.3 ([9e15fe9](https://github.com/andreafspeziale/os-cli/commit/9e15fe9481fda07b49ab1f380052d31f0f3e55be))

## [1.9.0](https://github.com/andreafspeziale/os-cli/compare/1.8.1...1.9.0) (2025-03-20)


### Features

* add update index flag ([d7c81bf](https://github.com/andreafspeziale/os-cli/commit/d7c81bfa700f8829c970d91af69fed68347f676a))

## [1.8.1](https://github.com/andreafspeziale/os-cli/compare/1.8.0...1.8.1) (2025-03-20)


### Bug Fixes

* shebang ([9746bf8](https://github.com/andreafspeziale/os-cli/commit/9746bf8288ec6b3aa16d5272ecc4c3f44974f9bd))
* update nest monorepo to v11.0.12 ([93e2bec](https://github.com/andreafspeziale/os-cli/commit/93e2bec5ff1888979beae66d1bf672e5f04348a8))


### Miscellaneous

* update dependency typescript-eslint to v8.27.0 ([3b33350](https://github.com/andreafspeziale/os-cli/commit/3b333509ac911bb26fe30f9701ef59c8e3ddf73b))

## [1.8.0](https://github.com/andreafspeziale/os-cli/compare/1.7.0...1.8.0) (2025-03-19)


### Features

* add nestjs-log ([ff6fbc5](https://github.com/andreafspeziale/os-cli/commit/ff6fbc5cf84ba850d82c7be1be86662b44ab03c2))
* os module from nestjs-search package ([825a7fd](https://github.com/andreafspeziale/os-cli/commit/825a7fd8c38903647101d5292a9dc50c6779183d))


### Bug Fixes

* dockerfile base image name ([bfafa88](https://github.com/andreafspeziale/os-cli/commit/bfafa883dc596cc947b1001a7bd9586e0e6a95d9))
* remove winston ([34e4419](https://github.com/andreafspeziale/os-cli/commit/34e44190b9de1cbd0222e5701591788720d270ef))
* update dependency @andreafspeziale/nestjs-log to v1.1.0 ([c5e4127](https://github.com/andreafspeziale/os-cli/commit/c5e41277eae205ee1f00e846147ef00620ed1543))
* update dependency @andreafspeziale/nestjs-log to v1.2.0 ([3dd0aa7](https://github.com/andreafspeziale/os-cli/commit/3dd0aa785b26558656b14b826e09bb33ac003ee7))
* update dependency @andreafspeziale/nestjs-search to v1.1.1 ([497a0d8](https://github.com/andreafspeziale/os-cli/commit/497a0d87dec9fd4ef2f3d7f8edae2b07ec2ff568))
* update dependency @aws-sdk/credential-providers to v3.637.0 ([ac70c8a](https://github.com/andreafspeziale/os-cli/commit/ac70c8ae98b7ccc488eddff7c1832128cdb16476))
* update dependency @aws-sdk/credential-providers to v3.699.0 ([e499c11](https://github.com/andreafspeziale/os-cli/commit/e499c11cdd4bd2740cea8a31ec98492f287e2ace))
* update dependency @aws-sdk/credential-providers to v3.758.0 ([985d611](https://github.com/andreafspeziale/os-cli/commit/985d6112236e9c46d8c4e7a495616bc6d787b2cc))
* update dependency @aws-sdk/credential-providers to v3.768.0 ([f65bc12](https://github.com/andreafspeziale/os-cli/commit/f65bc12af0ca1086d9ef0c29fd5645b3c770d94a))
* update dependency @nestjs/config to v3.3.0 ([b762862](https://github.com/andreafspeziale/os-cli/commit/b76286255a09f4fc31b2c684d62096a712ff100c))
* update dependency @opensearch-project/opensearch to v3.0.0-beta.8 ([c876816](https://github.com/andreafspeziale/os-cli/commit/c876816ceff9b8983ebf89d405ec4c5a14539a31))
* update dependency @opensearch-project/opensearch to v3.4.0 ([a87cec4](https://github.com/andreafspeziale/os-cli/commit/a87cec4b6b66966eb4eceb17fbe229ce92c794a3))
* update dependency nest-commander to v3.16.1 ([d6db5f2](https://github.com/andreafspeziale/os-cli/commit/d6db5f27e8af67fae10e36532c8c6c53b5fbd97e))
* update dependency nest-commander to v3.17.0 ([be748af](https://github.com/andreafspeziale/os-cli/commit/be748af4e98c26705daa721acd87ca0190945e35))
* update dependency winston to v3.17.0 ([df00951](https://github.com/andreafspeziale/os-cli/commit/df009517451f140d0ee4dc4f47ca23c0266e6201))
* update dependency zod to v3.24.2 ([8a10b74](https://github.com/andreafspeziale/os-cli/commit/8a10b74c5af3abbef8b6e1f53cda0042cd1101a1))
* update nest monorepo to v10.4.9 ([2060e6f](https://github.com/andreafspeziale/os-cli/commit/2060e6f5975b58813e80eb822cf9bb910bdd7a64))
* update nest monorepo to v11.0.12 ([c1107b0](https://github.com/andreafspeziale/os-cli/commit/c1107b0684ee155e6f0568f3191b6048c0862251))


### Miscellaneous

* add manual docker build and push trigger ([911c5f9](https://github.com/andreafspeziale/os-cli/commit/911c5f93915cb0edbeb6165f12ea9616e1b387bb))
* ignore ([d198940](https://github.com/andreafspeziale/os-cli/commit/d198940a4cbb1d6ec0c9e6f6b28cb41d208421e7))
* lint etc. minors ([0ca8ba5](https://github.com/andreafspeziale/os-cli/commit/0ca8ba5d3d214774354eb006c26e8cc1e77ded91))
* nestjs 11 ([c0d5a47](https://github.com/andreafspeziale/os-cli/commit/c0d5a4712f6236ea3642caa9096c1dbead1827d7))
* nodejs upgrade ([ec00aee](https://github.com/andreafspeziale/os-cli/commit/ec00aeea3907f306dddfdf465f23a4e0f8b4802b))
* pn update ([3580acd](https://github.com/andreafspeziale/os-cli/commit/3580acd7a6280815971ccc7437174abb290e9125))
* update dependency @types/jest to v29.5.14 ([9c93278](https://github.com/andreafspeziale/os-cli/commit/9c93278b57196397e0fbfa51b972968c166554c6))
* update dependency @types/node to v20.17.24 ([46ec155](https://github.com/andreafspeziale/os-cli/commit/46ec155f7011384bf654252f3ee6f6c3000f3758))
* update dependency @types/node to v20.17.9 ([9b97e9b](https://github.com/andreafspeziale/os-cli/commit/9b97e9befb40bfc4a257cd430cb61e104816dc86))
* update dependency eslint to v8.57.1 ([4c33556](https://github.com/andreafspeziale/os-cli/commit/4c335564d87f1529dfd5ec6f99494060a456c38d))
* update dependency lint-staged to v15.5.0 ([7dfa8e3](https://github.com/andreafspeziale/os-cli/commit/7dfa8e3624e620a49c9489bff55dc81bb5ae8486))
* update dependency ts-jest to v29.2.5 ([2002647](https://github.com/andreafspeziale/os-cli/commit/2002647cee8820fe0dbc3f39f11ff442fe1132cd))
* update dependency ts-jest to v29.2.6 ([a7841ec](https://github.com/andreafspeziale/os-cli/commit/a7841ec414c0497c8655e6d13fde71d3f6882278))
* update dependency ts-loader to v9.5.2 ([93872b4](https://github.com/andreafspeziale/os-cli/commit/93872b4d2523d8acc9d79c5cf8bc585dbf8c97f3))
* update dependency typescript to v5.7.2 ([2a82eaa](https://github.com/andreafspeziale/os-cli/commit/2a82eaaeec9b3b2c102f1e2bb434eb2e9053b1c5))
* update dependency typescript to v5.8.2 ([7e8452f](https://github.com/andreafspeziale/os-cli/commit/7e8452f6afd7283479803a24f8ab6978ffe978d9))
* update dependency typescript-eslint to v8.26.1 ([2de16d8](https://github.com/andreafspeziale/os-cli/commit/2de16d8728b7a0bed26212dc50fdf60a2f74a097))
* update nest monorepo to v10.4.8 ([729538e](https://github.com/andreafspeziale/os-cli/commit/729538e381351c8ec3974c9358d57c9c4da87160))
* update node.js ([3afeb53](https://github.com/andreafspeziale/os-cli/commit/3afeb53041826bc693b81cf99f45b59bb68edb6a))
* update node.js to v20.18.3 ([a3a0f7b](https://github.com/andreafspeziale/os-cli/commit/a3a0f7bec5b43948227ceeedb3234c988fa47d80))
* update pnpm to v9.15.9 ([913e053](https://github.com/andreafspeziale/os-cli/commit/913e0532c1a03d8a34d2c596417fafede12ad58d))
* update readme ([4ffde1f](https://github.com/andreafspeziale/os-cli/commit/4ffde1ffe775950bb4745ec8a0e40625288e0637))

## [1.7.0](https://github.com/andreafspeziale/os-cli/compare/1.6.1...1.7.0) (2024-04-25)


### Features

* support id prop when indexing ([b422bf1](https://github.com/andreafspeziale/os-cli/commit/b422bf183947f08079d38d100f155e3bfcbd1ebc))


### Bug Fixes

* update dependency reflect-metadata to v0.2.2 ([e3130ee](https://github.com/andreafspeziale/os-cli/commit/e3130ee2f9eecfbdf9bdb5207b7a16283de3b37d))


### Miscellaneous

* node lts - pn ([ec5f6f2](https://github.com/andreafspeziale/os-cli/commit/ec5f6f2c6a12fd1b37287d6515ad5180e52da067))
* update commitlint monorepo to v17.8.1 ([0e3402e](https://github.com/andreafspeziale/os-cli/commit/0e3402e230d92dff1d699e3cee01621e93ef4ef5))
* update dependency @nestjs/cli to v10.3.2 ([e1399a8](https://github.com/andreafspeziale/os-cli/commit/e1399a8a821c9037784de550717d283ffdf8911e))
* update dependency @release-it/conventional-changelog to v7.0.2 ([9e01336](https://github.com/andreafspeziale/os-cli/commit/9e013366bad125f8e3ae349e2925c614136ccb6c))
* update dependency @types/node to v20.12.7 ([25865a0](https://github.com/andreafspeziale/os-cli/commit/25865a0ac41da2045f8c1d4edfad3d1021928346))
* update dependency @types/supertest to v2.0.16 ([74a5f7c](https://github.com/andreafspeziale/os-cli/commit/74a5f7c4523c78f2c52f4d1c173c7bd21505b5a5))
* update dependency eslint to v8.57.0 ([b5045ab](https://github.com/andreafspeziale/os-cli/commit/b5045ab2f37f4e6d33c57f04d78a0633b7110aa4))
* update dependency eslint-config-prettier to v8.10.0 ([3d73648](https://github.com/andreafspeziale/os-cli/commit/3d73648fc79582d91415a8da1f620137150c7132))
* update dependency supertest to v6.3.4 ([97b7541](https://github.com/andreafspeziale/os-cli/commit/97b75416f0fa93e055766c3455f759fae5e79b27))
* update dependency ts-jest to v29.1.2 ([8c82f2c](https://github.com/andreafspeziale/os-cli/commit/8c82f2c98e5651f6a3f0b97f271fed00cdc1cbfd))
* update dependency ts-node to v10.9.2 ([caab1c4](https://github.com/andreafspeziale/os-cli/commit/caab1c4920afcd84ac87ad0c973611b8efa3b8f3))
* update jest monorepo ([4733879](https://github.com/andreafspeziale/os-cli/commit/473387954d781b544ebff111620f7698d351d0ea))

## [1.6.1](https://github.com/andreafspeziale/os-cli/compare/1.6.0...1.6.1) (2023-12-15)


### Bug Fixes

* error logging ([d900cdd](https://github.com/andreafspeziale/os-cli/commit/d900cdde23a559737386bdeb843c01bcde9d9b1f))


### Miscellaneous

* readme ([e34edac](https://github.com/andreafspeziale/os-cli/commit/e34edac12859e9ca660440944754f6b729c36816))
* rollback prettier and lint script ([0a9da2c](https://github.com/andreafspeziale/os-cli/commit/0a9da2cd966d5394b5dc4b799573d2178c323a3f))

## [1.6.0](https://github.com/andreafspeziale/os-cli/compare/1.5.0...1.6.0) (2023-12-14)


### Features

* add aliases command ([23ecf96](https://github.com/andreafspeziale/os-cli/commit/23ecf96072be0b517cde7e5e0799361a03c6d749))


### Bug Fixes

* update dependency reflect-metadata to ^0.2.0 ([923f38b](https://github.com/andreafspeziale/os-cli/commit/923f38bfe1e0b337153b83cee95a19cd4fc4fab8))


### Miscellaneous

* update dependency node to v20.10.0 ([2a4a547](https://github.com/andreafspeziale/os-cli/commit/2a4a5474da89ebf10b0538979fcb0adc64675677))
* update pnpm to v8.12.1 ([bc060a7](https://github.com/andreafspeziale/os-cli/commit/bc060a781cf8fd21735a42f3fdef760981021383))

## [1.5.0](https://github.com/andreafspeziale/os-cli/compare/1.4.1...1.5.0) (2023-10-20)


### Features

* add close confirmation ([49f203a](https://github.com/andreafspeziale/os-cli/commit/49f203ae9d450ba28f2302437a7f4d8a7a515693))
* add get task command ([c62c6ff](https://github.com/andreafspeziale/os-cli/commit/c62c6ff771606d73b901e7a1ec7c389bf2e905dd))
* add open confirmation ([1b30ba6](https://github.com/andreafspeziale/os-cli/commit/1b30ba66e65763d2d0db439019e51b9a05871b75))


### Miscellaneous

* reindex wait by default ([9e9f2fd](https://github.com/andreafspeziale/os-cli/commit/9e9f2fd2be51edb63cf548b743d6d221bd65f202))

## [1.4.1](https://github.com/andreafspeziale/os-cli/compare/1.4.0...1.4.1) (2023-10-19)


### Miscellaneous

* align subcommand alias ([0ac5131](https://github.com/andreafspeziale/os-cli/commit/0ac513133b1a1db7c389494a3fee9a5ec0fa3112))

## [1.4.0](https://github.com/andreafspeziale/os-cli/compare/1.3.0...1.4.0) (2023-10-19)


### Features

* add query command ([bfa7eea](https://github.com/andreafspeziale/os-cli/commit/bfa7eeaacba55a2e4254b5a440bcf1da1c6fe17a))

## [1.3.0](https://github.com/andreafspeziale/os-cli/compare/1.2.0...1.3.0) (2023-10-18)


### Features

* add create document command ([72d55e4](https://github.com/andreafspeziale/os-cli/commit/72d55e411c871adffd627c407ad18469c35ea3ca))
* add delete documents command ([37a675e](https://github.com/andreafspeziale/os-cli/commit/37a675e1776df3562beee2d43b5f9a92508525a0))
* add reindex command ([41dddb0](https://github.com/andreafspeziale/os-cli/commit/41dddb0bb6796daae3f84622d0e4c2ad45aaa8f9))


### Bug Fixes

* creation docs log ([321145f](https://github.com/andreafspeziale/os-cli/commit/321145f38334db2710b0da021c3eb2a5166d7682))


### Refactors

* delete docs args ([9395366](https://github.com/andreafspeziale/os-cli/commit/939536673a0102e171e5896642a07c132ea71dd1))
* make delete-question generic ([b8a3f4c](https://github.com/andreafspeziale/os-cli/commit/b8a3f4cb5b6e2b44deab693ab98471b1ad1d6034))


### Miscellaneous

* align choice-if pattern ([cb7bcfc](https://github.com/andreafspeziale/os-cli/commit/cb7bcfc75359409ba851aa290d12a824e255188d))
* missing updates node.js to v20.7.0 ([56d304b](https://github.com/andreafspeziale/os-cli/commit/56d304b891e77e94a2d040f33052895d7a5109e8))
* nodejs upgrade ([e5bd4cf](https://github.com/andreafspeziale/os-cli/commit/e5bd4cfd237a579c52a23dcbc430916acf4bdfdb))
* rename subcommands ([396246a](https://github.com/andreafspeziale/os-cli/commit/396246a963b302a3578e3b872998ccc1821e574a))
* update dependency node ([0fad292](https://github.com/andreafspeziale/os-cli/commit/0fad29236f666c3b4b09c0aba2b9f0cd5c39c325))
* update dependency node to v20.8.1 ([1588ae1](https://github.com/andreafspeziale/os-cli/commit/1588ae1399aa6e0bdb27d3a387317446452ff02c))
* update node in ci ([7531133](https://github.com/andreafspeziale/os-cli/commit/75311334320b0ffb9ade04795bf19410c4320df5))
* update node.js to v20.7.0 ([afe692c](https://github.com/andreafspeziale/os-cli/commit/afe692cd35a979c7faf82c45ad2f6236f5a03ca0))
* update pnpm to v8.7.6 ([39170be](https://github.com/andreafspeziale/os-cli/commit/39170be2c728fd5323eb4963a09a80e4a25239b5))
* update pnpm to v8.9.2 ([5ca8662](https://github.com/andreafspeziale/os-cli/commit/5ca8662a289a97f0ace88cab7a2abfcf15a205d9))

## [1.2.0](https://github.com/andreafspeziale/os-cli/compare/1.1.9...1.2.0) (2023-07-31)


### Features

* add version command ([98fb7e7](https://github.com/andreafspeziale/os-cli/commit/98fb7e73b4339627780bd77f5f551bb1d2f3c918))


### Miscellaneous

* update readme ([20affb9](https://github.com/andreafspeziale/os-cli/commit/20affb9a6f0fcce3c8ebf01617afd31cc5799b55))

## [1.1.9](https://github.com/andreafspeziale/os-cli/compare/1.1.8...1.1.9) (2023-07-31)


### Miscellaneous

* remove linux/arm64 ([5dd6098](https://github.com/andreafspeziale/os-cli/commit/5dd60986633924018fdd3c4048e4d9418d4bc359))

## [1.1.8](https://github.com/andreafspeziale/os-cli/compare/1.1.7...1.1.8) (2023-07-31)


### Miscellaneous

* docker multiplatform ([e86434f](https://github.com/andreafspeziale/os-cli/commit/e86434ff1f07570a7a25444ce77c744e712b32b5))

## [1.1.7](https://github.com/andreafspeziale/os-cli/compare/1.1.6...1.1.7) (2023-07-31)


### Bug Fixes

* docker build and push ([1b3c591](https://github.com/andreafspeziale/os-cli/commit/1b3c591907f22b87b2c0a8af07ac98e68bace9b5))


### Miscellaneous

* update pnpm to v8.6.11 ([c3f3842](https://github.com/andreafspeziale/os-cli/commit/c3f3842524dd6de8b751f61aea1240ab7246f867))

## [1.1.6](https://github.com/andreafspeziale/os-cli/compare/1.1.5...1.1.6) (2023-07-30)


### Miscellaneous

* update docker build and push trigger ([4c210f9](https://github.com/andreafspeziale/os-cli/commit/4c210f9adbfa4e24fb228184313c3b8e682fb1dd))

## [1.1.5](https://github.com/andreafspeziale/os-cli/compare/1.1.4...1.1.5) (2023-07-30)


### Miscellaneous

* update docker build and push trigger ([cf5cf30](https://github.com/andreafspeziale/os-cli/commit/cf5cf30a942875191f4b99318b60c55a20228f9d))

## [1.1.4](https://github.com/andreafspeziale/os-cli/compare/1.1.3...1.1.4) (2023-07-30)


### Bug Fixes

* changelog ([b329753](https://github.com/andreafspeziale/os-cli/commit/b329753117eb1f71dbbb5589328867df5ab70be0))


### Miscellaneous

* update docker build and push trigger and tag ref ([20c5cc7](https://github.com/andreafspeziale/os-cli/commit/20c5cc7cc9a39e396a8c62dcd4ae306fd1f74cda))

## [1.1.3](https://github.com/andreafspeziale/os-cli/compare/1.1.2...1.1.3) (2023-07-30)


### Bug Fixes

* release workflow ([651c1bf](https://github.com/andreafspeziale/os-cli/commit/651c1bf2a1d05b84f38e491f2869e4abbc78c086))

## [1.1.2](https://github.com/andreafspeziale/os-cli/compare/1.1.1...1.1.2) (2023-07-30)


### Features

* add docker build/push action w/ registry cache ([9748042](https://github.com/andreafspeziale/os-cli/commit/974804200be6b986dd25a103d147714ce7daff56))


### Bug Fixes

* changelog ([a6b23ef](https://github.com/andreafspeziale/os-cli/commit/a6b23ef57cf39022464d7fcc75105e9858c93a25))
* missing refactor sections in changelog ([ff05950](https://github.com/andreafspeziale/os-cli/commit/ff05950ac3d0de1b50faaf4418c1c88ad4e9dc52))

## [1.1.1](https://github.com/andreafspeziale/os-cli/compare/1.1.0...1.1.1) (2023-07-26)


### Refactors

* split local and proxy connection methods ([63beed1](https://github.com/andreafspeziale/os-cli/commit/63beed113aea666da1c005760080273fb1c9d0d3))

## [1.1.0](https://github.com/andreafspeziale/os-cli/compare/1.0.0...1.1.0) (2023-07-26)


### Features

* add config exception ([b537413](https://github.com/andreafspeziale/os-cli/commit/b5374136241906954f5408fb26926d4015ed2153))
* add dockerfile and badges ([ce8b19e](https://github.com/andreafspeziale/os-cli/commit/ce8b19e6d57a18a55314c84e1a3a111acaa06603))


### Bug Fixes

* readme ([b23113f](https://github.com/andreafspeziale/os-cli/commit/b23113f9c6ae078a467aa8d1630b0f35285e35e1))
* readme ([552bbd4](https://github.com/andreafspeziale/os-cli/commit/552bbd49aebab3c45e0a8b969c8db99a389a138c))


### Miscellaneous

* update pnpm to v8.6.10 ([b5f6f2c](https://github.com/andreafspeziale/os-cli/commit/b5f6f2c6fdac704d26dc5eb7433b11b71d93c374))

## 1.0.0 (2023-07-19)


### Features

* initial ([8596a07](https://github.com/andreafspeziale/os-cli/commit/8596a0712095ac1a00b7651a6c54b8bb6a5477d8))


### Miscellaneous

* update readme ([0ea1e5d](https://github.com/andreafspeziale/os-cli/commit/0ea1e5da7b413fe91489d438a2ff0052e7ce9647))
