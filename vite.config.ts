import path from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import CleanCss from "vite-plugin-clean-css";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
				about: path.resolve(__dirname, "pages/about/index.html"),
				err404: path.resolve(__dirname, "pages/error/index.html"),
			},
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@scss": fileURLToPath(new URL("./src/assets/scss", import.meta.url)),
		},
	},
	plugins: [
		CleanCss({
			level: 2,
		}),
	],
	css: {
		devSourcemap: true,
	},
});
