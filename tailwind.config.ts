import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { cucatsDark } from "./theme";

export default {
    darkMode: "class",
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
    ],
    theme: {
        fontFamily: {
            mono: "'JetBrains Mono', monospace",
            sans: "'Open Sans', monospace",
        },
        extend: {},
    },
    plugins: [
        skeleton({
            themes: {
                custom: [cucatsDark],
            },
        }),
    ],
} satisfies Config;
