THIS_MAKEFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
PROJ_ROOT := $(patsubst %/,%,$(dir $(THIS_MAKEFILE_PATH)))

DOCKER_IMG := jekyll/jekyll:latest
ME := $(shell id -u):$(shell id -g)

.PHONY: all build serve clean
all: build

build:
	docker run --rm --volume="$(PROJ_ROOT):/srv/jekyll" -it $(DOCKER_IMG) jekyll build

serve:
	@echo "http://localhost:4000/"
	docker run -p 4000:4000 --volume="$(PROJ_ROOT):/srv/jekyll" -it $(DOCKER_IMG) jekyll serve --watch --incremental --drafts

# $(DOCKER_IMG):
# 	docker build -t $(DOCKER_IMG) .

clean:
	rm -rf "$(PROJ_ROOT)/_site/"*
	rm -f "$(PROJ_ROOT)/.jekyll-metadata"
