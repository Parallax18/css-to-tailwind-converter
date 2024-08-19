import { StyleProperty, StyleValue } from "./lib/types";
type StyleToTailwindMap = {
    [key in StyleProperty]?: (value: StyleValue) => string | undefined;
};
export declare const styleToTailwindMap: StyleToTailwindMap;
export {};
//# sourceMappingURL=style-map.d.ts.map