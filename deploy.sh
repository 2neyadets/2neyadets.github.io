#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

quasar build

cp .gitignore dist/spa

cp src/utils/README.md dist/spa

yarn deploy

$SHELL
