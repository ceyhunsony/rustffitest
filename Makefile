ifeq ($(shell uname),Darwin)
    EXT := dylib
else
    EXT := so
endif

all: target/debug/rustffitest.$(EXT) node_modules/ffi
	node src/main.js

target/debug/rustffitest.$(EXT): src/lib.rs Cargo.toml
	cargo build

node_modules/ffi:
	npm install

clean:
	rm -rf target
	rm -rf node_modules
