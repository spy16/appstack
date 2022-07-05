NAME:="appstack"
VERSION:=$(shell git describe --abbrev=0 --tags)
COMMIT:=$(shell git rev-list --abbrev-commit -1 HEAD)
BUILT_ON:=$(shell date +'%Y-%m-%d')

all: tidy generate test build

generate:
	@echo "Running go generate..."
	@go generate ./...

tidy:
	@echo "Tidying up..."
	@go mod tidy -v

test:
	@echo "Running unit tests..."
	@go test -cover ./...

clean:
	@mkdir -p ./dist
	@cp -r ./webapp/build dist/app

build:
	@echo "Running go build..."
	@go build -ldflags "-X main.Version=$(VERSION) -X main.Commit=$(COMMIT) -X main.BuiltOn=$(BUILT_ON)" -o "dist/${NAME}" ./api/

build-linux:
	@echo "Running go build..."
	@GOOS=linux go build -ldflags "-X main.Version=$(VERSION) -X main.Commit=$(COMMIT) -X main.BuiltOn=$(BUILT_ON)" -o "dist/${NAME}" ./api/

install:
	@echo "Installing tools..."
	@go install github.com/99designs/gqlgen

frontend:
	@echo "Building webapp..."
	@cd webapp && yarn install && yarn run release

release: build-linux
	@echo "Creating docker image..."
	@docker build -t appstack .
