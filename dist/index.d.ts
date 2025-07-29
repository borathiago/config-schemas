import { z } from 'zod';
export declare const SectionAttributesSchema: z.ZodObject<{
    id: z.ZodString;
    classes: z.ZodArray<z.ZodString, "many">;
    module: z.ZodString;
    media: z.ZodOptional<z.ZodEnum<["image", "video"]>>;
    modal: z.ZodOptional<z.ZodEnum<["default"]>>;
    carousel: z.ZodOptional<z.ZodEnum<["bullets", "complete", "navigation-slides", "navigation", "numbered", "default"]>>;
    iframe: z.ZodOptional<z.ZodEnum<["full-width", "framed-width"]>>;
    contentHTML: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    classes: string[];
    module: string;
    contentHTML: string;
    media?: "image" | "video" | undefined;
    modal?: "default" | undefined;
    carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
    iframe?: "full-width" | "framed-width" | undefined;
}, {
    id: string;
    classes: string[];
    module: string;
    contentHTML: string;
    media?: "image" | "video" | undefined;
    modal?: "default" | undefined;
    carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
    iframe?: "full-width" | "framed-width" | undefined;
}>;
export declare const ConfigurationPayloadSchema: z.ZodEffects<z.ZodObject<{
    os: z.ZodString;
    name: z.ZodString;
    layout: z.ZodEnum<["electrolux", "mademsa"]>;
    modules: z.ZodNumber;
    environment: z.ZodEnum<["development", "production"]>;
    sections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        classes: z.ZodArray<z.ZodString, "many">;
        module: z.ZodString;
        media: z.ZodOptional<z.ZodEnum<["image", "video"]>>;
        modal: z.ZodOptional<z.ZodEnum<["default"]>>;
        carousel: z.ZodOptional<z.ZodEnum<["bullets", "complete", "navigation-slides", "navigation", "numbered", "default"]>>;
        iframe: z.ZodOptional<z.ZodEnum<["full-width", "framed-width"]>>;
        contentHTML: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        classes: string[];
        module: string;
        contentHTML: string;
        media?: "image" | "video" | undefined;
        modal?: "default" | undefined;
        carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
        iframe?: "full-width" | "framed-width" | undefined;
    }, {
        id: string;
        classes: string[];
        module: string;
        contentHTML: string;
        media?: "image" | "video" | undefined;
        modal?: "default" | undefined;
        carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
        iframe?: "full-width" | "framed-width" | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    os: string;
    name: string;
    layout: "electrolux" | "mademsa";
    modules: number;
    environment: "development" | "production";
    sections: {
        id: string;
        classes: string[];
        module: string;
        contentHTML: string;
        media?: "image" | "video" | undefined;
        modal?: "default" | undefined;
        carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
        iframe?: "full-width" | "framed-width" | undefined;
    }[];
}, {
    os: string;
    name: string;
    layout: "electrolux" | "mademsa";
    modules: number;
    environment: "development" | "production";
    sections: {
        id: string;
        classes: string[];
        module: string;
        contentHTML: string;
        media?: "image" | "video" | undefined;
        modal?: "default" | undefined;
        carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
        iframe?: "full-width" | "framed-width" | undefined;
    }[];
}>, {
    os: string;
    name: string;
    layout: "electrolux" | "mademsa";
    modules: number;
    environment: "development" | "production";
    sections: {
        id: string;
        classes: string[];
        module: string;
        contentHTML: string;
        media?: "image" | "video" | undefined;
        modal?: "default" | undefined;
        carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
        iframe?: "full-width" | "framed-width" | undefined;
    }[];
}, {
    os: string;
    name: string;
    layout: "electrolux" | "mademsa";
    modules: number;
    environment: "development" | "production";
    sections: {
        id: string;
        classes: string[];
        module: string;
        contentHTML: string;
        media?: "image" | "video" | undefined;
        modal?: "default" | undefined;
        carousel?: "default" | "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | undefined;
        iframe?: "full-width" | "framed-width" | undefined;
    }[];
}>;
export interface SectionAttributes {
    id: string;
    classes: string[];
    module: string;
    contentHTML: string;
    media?: "image" | "video";
    modal?: "default";
    carousel?: "bullets" | "complete" | "navigation-slides" | "navigation" | "numbered" | "default";
    iframe?: "full-width" | "framed-width";
}
export interface ConfigurationPayload {
    os: string;
    name: string;
    layout: "electrolux" | "mademsa";
    modules: number;
    environment: "development" | "production";
    sections: SectionAttributes[];
}
//# sourceMappingURL=index.d.ts.map