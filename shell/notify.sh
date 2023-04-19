set -e

if [ ! -z "$NOTIFY_URI" ]; then
    curl $NOTIFY_URI
fi
