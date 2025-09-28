#!/usr/bin/env bash
#   Use this script to test if a given TCP host/port are available

WAITFORIT_cmdname=${0##*/}

echoerr() { if [[ $WAITFORIT_QUIET -ne 1 ]]; then echo "$@" 1>&2; fi }

usage()
{
    cat << USAGE >&2
Usage:
    $WAITFORIT_cmdname host:port [-s] [-t timeout] [-- command args]
    -h HOST | --host=HOST       Host or IP under test
    -p PORT | --port=PORT       TCP port under test
                                Alternatively, you specify the host and port as host:port
    -s | --strict               Only execute subcommand if the test succeeds
    -q | --quiet                Don't output any status messages
    -t TIMEOUT | --timeout=TIMEOUT
                                Timeout in seconds, zero for no timeout
    -- COMMAND ARGS             Execute command with args after the test finishes
USAGE
    exit 1
}

wait_for()
{
    local host="$1"
    local port="$2"
    local timeout="${WAITFORIT_TIMEOUT:-15}"
    local start_ts=$(date +%s)
    while :
    do
        (echo > /dev/tcp/$host/$port) >/dev/null 2>&1
        result=$?
        if [[ $result -eq 0 ]]; then
            end_ts=$(date +%s)
            echo "$WAITFORIT_cmdname: $host:$port is available after $((end_ts - start_ts)) seconds"
            break
        fi
        sleep 1
    done
    return $result
}

WAITFORIT_hostport=()
WAITFORIT_TIMEOUT=15
WAITFORIT_STRICT=0
WAITFORIT_QUIET=0

while [[ $# -gt 0 ]]
do
    case "$1" in
        *:* )
        WAITFORIT_hostport=(${1//:/ })
        shift 1
        ;;
        -h)
        WAITFORIT_hostport[0]="$2"
        shift 2
        ;;
        --host=*)
        WAITFORIT_hostport[0]="${1#*=}"
        shift 1
        ;;
        -p)
        WAITFORIT_hostport[1]="$2"
        shift 2
        ;;
        --port=*)
        WAITFORIT_hostport[1]="${1#*=}"
        shift 1
        ;;
        -t)
        WAITFORIT_TIMEOUT="$2"
        shift 2
        ;;
        --timeout=*)
        WAITFORIT_TIMEOUT="${1#*=}"
        shift 1
        ;;
        -s | --strict)
        WAITFORIT_STRICT=1
        shift 1
        ;;
        -q | --quiet)
        WAITFORIT_QUIET=1
        shift 1
        ;;
        --)
        shift
        break
        ;;
        --help)
        usage
        ;;
        *)
        echoerr "Unknown argument: $1"
        usage
        ;;
    esac
done

if [[ "${#WAITFORIT_hostport[@]}" -ne 2 ]]; then
    echoerr "Error: you need to provide a host and port to test."
    usage
fi

wait_for "${WAITFORIT_hostport[0]}" "${WAITFORIT_hostport[1]}"
WAITFORIT_RESULT=$?

if [[ $WAITFORIT_RESULT -ne 0 && $WAITFORIT_STRICT -eq 1 ]]; then
    echoerr "$WAITFORIT_cmdname: strict mode, refusing to execute subprocess"
    exit $WAITFORIT_RESULT
fi

if [[ $# -gt 0 ]]; then
    exec "$@"
else
    exit $WAITFORIT_RESULT
fi