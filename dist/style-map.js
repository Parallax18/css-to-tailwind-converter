import { colorRegex, isValidCSSValue, unitRegex, } from "./lib/css-value-validator";
export const styleToTailwindMap = {
    // Static properties
    display: (value) => {
        const displayMap = {
            flex: "flex",
            block: "block",
            inline: "inline",
            inlineBlock: "inline-block",
            grid: "grid",
            inlineGrid: "inline-grid",
            flowRoot: "flow-root",
            table: "table",
            tableCaption: "table-caption",
            tableCell: "table-cell",
            tableColumn: "table-column",
            tableColumnGroup: "table-column-group",
            tableFooterGroup: "table-footer-group",
            tableHeaderGroup: "table-header-group",
            tableRow: "table-row",
            tableRowGroup: "table-row-group",
            // Add more display values as needed
        };
        return displayMap[value] || undefined;
    },
    visibility: (value) => {
        const visibilityMap = {
            visible: "visible",
            hidden: "hidden",
            collapse: "collapse",
            // Add more visibility values as needed
        };
        return visibilityMap[value] || undefined;
    },
    textTransform: (value) => {
        const textTransformMap = {
            capitalize: "capitalize",
            lowercase: "lowercase",
            uppercase: "uppercase",
            normal: "normal-case",
            // Add more textTransform values as needed
        };
        return textTransformMap[value] || undefined;
    },
    listStyle: (value) => {
        const listStyleMap = {
            none: "list-none",
            disc: "list-disc",
            circle: "list-circle",
            square: "list-square",
            // Add more listStyle values as needed
        };
        return listStyleMap[value] || undefined;
    },
    underline: (value) => {
        const underlineMap = {
            underline: "underline",
            noUnderline: "no-underline",
        };
        return underlineMap[value] || undefined;
    },
    // More static properties
    fontWeight: (value) => {
        const fontWeightMap = {
            thin: "font-thin",
            extralight: "font-extralight",
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            extrabold: "font-extrabold",
            black: "font-black",
            // Add more fontWeight values as needed
        };
        if (value.match(/^\d+$/)) {
            return `font-${value}`;
        }
        return fontWeightMap[value] || `font-[${value}]` || undefined;
    },
    textAlign: (value) => {
        const textAlignMap = {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
            // Add more textAlign values as needed
        };
        return textAlignMap[value] || undefined;
    },
    textDecoration: (value) => {
        const textDecorationMap = {
            underline: "underline",
            lineThrough: "line-through",
            noUnderline: "no-underline",
            // Add more textDecoration values as needed
        };
        return textDecorationMap[value] || undefined;
    },
    textOverflow: (value) => {
        const textOverflowMap = {
            clip: "truncate",
            ellipsis: "truncate", // Tailwind does not have a specific class for 'ellipsis' but 'truncate' works for overflow text
            // Add more textOverflow values as needed
        };
        return textOverflowMap[value] || undefined;
    },
    whiteSpace: (value) => {
        const whiteSpaceMap = {
            nowrap: "whitespace-nowrap",
            normal: "whitespace-normal",
            pre: "whitespace-pre",
            preLine: "whitespace-pre-line",
            preWrap: "whitespace-pre-wrap",
            // Add more whiteSpace values as needed
        };
        return whiteSpaceMap[value] || undefined;
    },
    overflow: (value) => {
        const overflowMap = {
            auto: "overflow-auto",
            hidden: "overflow-hidden",
            scroll: "overflow-scroll",
            visible: "overflow-visible",
            // Add more overflow values as needed
        };
        return overflowMap[value] || undefined;
    },
    objectFit: (value) => {
        const objectFitMap = {
            contain: "object-contain",
            cover: "object-cover",
            fill: "object-fill",
            none: "object-none",
            scaleDown: "object-scale-down",
            // Add more objectFit values as needed
        };
        return objectFitMap[value] || undefined;
    },
    objectPosition: (value) => {
        const objectPositionMap = {
            bottom: "object-bottom",
            center: "object-center",
            left: "object-left",
            right: "object-right",
            top: "object-top",
            // Add more objectPosition values as needed
        };
        return objectPositionMap[value] || undefined;
    },
    cursor: (value) => {
        const cursorMap = {
            auto: "cursor-auto",
            default: "cursor-default",
            pointer: "cursor-pointer",
            wait: "cursor-wait",
            text: "cursor-text",
            move: "cursor-move",
            notAllowed: "cursor-not-allowed",
            // Add more cursor values as needed
        };
        return cursorMap[value] || undefined;
    },
    outlineStyle: (value) => {
        const outlineStyleMap = {
            none: "outline-none",
            solid: "outline-solid",
            dotted: "outline-dotted",
            dashed: "outline-dashed",
            double: "outline-double",
            groove: "outline-groove",
            ridge: "outline-ridge",
            inset: "outline-inset",
            outset: "outline-outset",
            // Add more outlineStyle values as needed
        };
        return outlineStyleMap[value] || undefined;
    },
    // Add more properties as needed
    // Dynamic properties
    // Dynamic properties
    backgroundColor: (value) => {
        if (isValidCSSValue(value, colorRegex, true)) {
            return `bg-[${value}]`;
        }
    },
    color: (value) => {
        if (isValidCSSValue(value, colorRegex, true)) {
            return `text-[${value}]`;
        }
    },
    borderColor: (value) => {
        if (isValidCSSValue(value, colorRegex, true)) {
            return `border-[${value}]`;
        }
    },
    borderRadius: (value) => {
        if (isValidCSSValue(value, unitRegex) ||
            value === "auto" ||
            value === "initial") {
            return `rounded-[${value}]`;
        }
    },
    borderWidth: (value) => {
        if (isValidCSSValue(value, unitRegex) ||
            value === "auto" ||
            value === "initial") {
            return `border-[${value}]`;
        }
    },
    padding: (value) => {
        if (isValidCSSValue(value, unitRegex) ||
            value === "auto" ||
            value === "initial") {
            return `p-[${value}]`;
        }
    },
    margin: (value) => {
        if (isValidCSSValue(value, unitRegex) ||
            value === "auto" ||
            value === "initial") {
            return `m-[${value}]`;
        }
    },
    width: (value) => {
        if (isValidCSSValue(value, unitRegex) ||
            value === "auto" ||
            value === "initial") {
            return `w-[${value}]`;
        }
    },
    height: (value) => {
        if (isValidCSSValue(value, unitRegex) ||
            value === "auto" ||
            value === "initial") {
            return `h-[${value}]`;
        }
    },
    fontSize: (value) => {
        if (isValidCSSValue(value, "^[0-9]+(px|rem|em)?$", false) ||
            value === "auto" ||
            value === "initial") {
            return `text-[${value}]`;
        }
    },
    lineHeight: (value) => {
        if (isValidCSSValue(value, "^[0-9]+(px|rem|em)?$", false) ||
            value === "auto" ||
            value === "initial") {
            return `leading-[${value}]`;
        }
    },
    letterSpacing: (value) => {
        if (isValidCSSValue(value, "^[0-9]+(px|em)?$", false) ||
            value === "auto" ||
            value === "initial") {
            return `tracking-[${value}]`;
        }
    },
    // Add more dynamic properties as needed
};
// const style = {
//   display: "inline-block",
//   backgroundColor: "#dabdab",
//   padding: "1rem",
//   marginTop: "4rem",
// };
// // display: {
// //   flex: "flex",
// //   block: "block",
// //   inlineBlock: "inline-block",
// //   // Add more mappings as needed
// // },
