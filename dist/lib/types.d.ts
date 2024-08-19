export type StyleProperty = "display" | "visibility" | "textTransform" | "listStyle" | "underline" | "fontWeight" | "textAlign" | "textDecoration" | "textOverflow" | "whiteSpace" | "overflow" | "objectFit" | "objectPosition" | "cursor" | "outlineStyle" | "backgroundColor" | "color" | "borderColor" | "borderRadius" | "borderWidth" | "padding" | "margin" | "width" | "height" | "fontSize" | "lineHeight" | "letterSpacing";
export type StyleValue = string;
export type StyleObject = {
    [property in StyleProperty]: StyleValue;
};
//# sourceMappingURL=types.d.ts.map