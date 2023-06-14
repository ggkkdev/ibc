#!/usr/bin/env bash
set -e

if [ -z "$SOLPB_DIR" ]; then
    echo "variable SOLPB_DIR must be set"
    exit 1
fi

GEN_DIR="$(pwd)/generated2"
mkdir "$GEN_DIR"
for file in $(find ./proto  -name '*.proto')
do
  echo "Generating "$file
  protoc -I "./contracts/ibc/proto/core"  -I${SOLPB_DIR}/protobuf-solidity/src/protoc/include \
    -I "/Users/guillaumequispe/thesis/code/cosmos/ethereum-ibc-relay-prover/third_party/proto" \
    -I "../../../../../cosmos/ethereum-ibc-relay-prover/proto/ibc/lightclients/ethereum/v1" \
    -I "/Users/guillaumequispe/go/bin/pkg/mod/github.com/cosmos/ibc-go/v4@v4.0.0/proto" \
    -I "/Users/guillaumequispe/go/bin/pkg/mod/github.com/cosmos/cosmos-sdk@v0.45.7/proto" \
    -I "./proto" \
    --plugin=protoc-gen-sol=${SOLPB_DIR}/protobuf-solidity/src/protoc/plugin/gen_sol.py \
    --"sol_out=gen_runtime=@hyperledger-labs/yui-ibc-solidity/contracts/proto/ProtoBufRuntime.sol&solc_version=0.8.9&ignore_protos=gogoproto/gogo.proto:$GEN_DIR" \
    $file
done

