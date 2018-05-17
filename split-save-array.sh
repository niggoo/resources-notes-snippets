#!/bin/bash

COUNT=$(cat $1 | jq ". | length")

for ((i=0; i<$COUNT; i++));
do
    NAME=$(cat $1 | jq -r ".[$i].id")
    echo $NAME
    cat $1 | jq ".[$i]" > ${NAME}.json
done
