build:
	ng build

deploy:
	ng build --output-path docs --base-href /dashboardcc/
	cp docs/index.html docs/404.html
	git add docs

test:
	ng test --no-watch --no-progress --code-coverage

