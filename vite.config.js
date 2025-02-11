import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig({
    build: {
        target: "esnext",
        rollupOptions: {
            treeshake: false
        }
    },
    base: "/cloth-button",
    plugins: [wasm()]
})