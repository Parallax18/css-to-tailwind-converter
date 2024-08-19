import { styleToTailwindMap } from "./style-map";
import { InvalidColorError, InvalidUnitError } from "./lib/errors";
export function convertStyleToTailwind(style) {
    let classes = [];
    for (const [property, value] of Object.entries(style)) {
        const prop = property;
        if (typeof value === "string" || typeof value === "number") {
            if (styleToTailwindMap[prop]) {
                try {
                    const className = styleToTailwindMap[prop](value);
                    if (className) {
                        classes.push(className);
                    }
                    else {
                        console.warn(`No matching Tailwind class for property '${property}' with value '${value}'`);
                    }
                }
                catch (error) {
                    if (error instanceof InvalidColorError) {
                        console.error(`Invalid color format for property '${property}': ${error.message}`);
                    }
                    else if (error instanceof InvalidUnitError) {
                        console.error(`Invalid unit format for property '${property}': ${error.message}`);
                    }
                    else {
                        console.error(`Error processing property '${property}': ${error}`);
                    }
                }
            }
            else {
                console.warn(`No mapping found for property '${property}'`);
            }
        }
        else {
            console.warn(`Skipping unsupported value type for property '${property}': ${value}`);
        }
    }
    return classes.join(" ");
}
