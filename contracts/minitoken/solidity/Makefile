.PHONY: build
build:
	npm run compile --all

.PHONY: install
install:
	npm install

.PHONY: proto
proto:
ifndef SOLPB_DIR
	$(error SOLPB_DIR is not specified)
else
	rm -rf ./generated2
	. ./scripts/solpb2.sh
endif

