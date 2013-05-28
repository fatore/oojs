all: clean
	@browserify src/main.js -o bundle.js

clean:
	@rm -f bundle.js
