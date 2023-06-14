package main

import (
	"log"

	"github.com/datachainlab/ethereum-ibc-relay-chain/pkg/relay/ethereum"
	ethprover "github.com/datachainlab/ethereum-ibc-relay-prover/relay"
	"github.com/hyperledger-labs/yui-relayer/cmd"
	mock "github.com/hyperledger-labs/yui-relayer/provers/mock/module"
)

func main() {
	if err := cmd.Execute(
		mock.Module{},
		ethprover.Module{},
		ethereum.Module{},
	); err != nil {
		log.Fatal(err)
	}
}
