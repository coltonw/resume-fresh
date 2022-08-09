# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Svg Tool

Made a quick tool that allows me to turn svgs from [DEVICON](https://devicon.dev/) into .tsx files for using in this project.

```
deno run --allow-net --allow-write --allow-run svgify.ts mocha mocha-plain.svg
```
