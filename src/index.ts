import { z } from 'zod'

export const SectionAttributesSchema = z.object({
    id: z.string().nonempty().regex(/^[a-zA-Z0-9_-]+$/, { message: 'ID de seção inválido. Use apenas letras, números, "-" ou "_".' }),
    classes: z.array(z.string().nonempty().regex(/^[a-zA-Z0-9_-]+$/, { message: 'Nome de classe inválido. Use apenas letras, números, "-" ou "_".' })).min(1, "O conjunto de classes de módulo não pode ser vazio."),
    module: z.string().nonempty().regex(/^[a-zA-Z0-9\/._-]+$/, { message: 'Padrão inválido. Use apenas letras, números, "/", ".", "-" ou "_".' }).min(1, "O módulo não pode ser vazio."),
    media: z.enum([
        "image", 
        "video"
    ]).optional(),
    modal: z.enum(["default"]).optional(),
    carousel: z.enum([
        "bullets",
        "complete",
        "navigation-slides",
        "navigation",
        "numbered",
        "default"
    ]).optional(),
    iframe: z.enum([
        "full-width",
        "framed-width"
    ]).optional(),
    contentHTML: z.string().min(1, "HTML de módulo não pode ser vazio.")
}).strict()

export const ConfigurationPayloadSchema = z.object({
    os: z.string().min(1, "OS é obrigatório"),
    name: z.string().min(1, "Nome do projeto é obrigatório"),
    layout: z.enum([
        "electrolux",
        "mademsa"
    ]),
    modules: z.number().int().positive(),
    environment: z.enum([
        "development",
        "production"
    ]),
    sections: z.array(SectionAttributesSchema)
}).strict().superRefine((payload, context) => {
    if (payload.sections.length !== payload.modules) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["sections"],
            message: "O número de tags <section> no HTML deve corresponder exatamente ao número de módulos do infográfico."
        })
    }
})

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