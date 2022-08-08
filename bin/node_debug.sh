#!/bin/sh
dir=$(dirname "$0")
/usr/bin/env node --inspect "$dir"/node "$@"
