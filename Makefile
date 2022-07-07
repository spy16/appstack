NAME:="appstack"
VERSION:=$(shell git describe --abbrev=0 --tags)
COMMIT:=$(shell git rev-list --abbrev-commit -1 HEAD)
BUILT_ON:=$(shell date +'%Y-%m-%d')

release: frontend backend-linux
	@echo "Creating docker image..."
	@docker build -t appstack .

generate:
	@echo "[Backend] Running go generate..."
	@go generate ./...

tidy:
	@echo "[Backend] Tidying up..."
	@go mod tidy -v

backend: tidy generate
	@echo "[Backend] Running go build..."
	@go build -ldflags "-X main.Version=$(VERSION) -X main.Commit=$(COMMIT) -X main.BuiltOn=$(BUILT_ON)" -o "dist/${NAME}" ./

frontend:
	@echo "[Frontend] Building webapp..."
	@yarn install && yarn run release
	@mkdir -p ./dist/app/
	@cp -r ./build/* ./dist/app/

backend-linux: tidy generate
	@echo "[Backend] Running go build..."
	@GOOS=linux go build -ldflags "-X main.Version=$(VERSION) -X main.Commit=$(COMMIT) -X main.BuiltOn=$(BUILT_ON)" -o "dist/${NAME}" ./

install:
	@echo "[Backend] Installing tools..."
	@go install github.com/99designs/gqlgen
