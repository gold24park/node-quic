#!/bin/bash -ex

_docker() {
    docker "$@"
}

_dkc() {
    local DKC="docker compose"
    if which docker-compose 2>&1 > /dev/null; then
        DKC="docker-compose"
    fi
    $DKC "$@"
}

_start() {
    _dkc up --build -d && _logs
}

_restart() {
    _stop && _dkc up -d && _logs
}

_rebuild() {
    _stop && _start
}

_stop() {
    _dkc down
}

_logs() {
    _dkc logs -f
}

CMD=$1
shift 1
_$CMD "$@"