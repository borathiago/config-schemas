import { z } from 'zod';
export const SectionAttributesSchema = z.object({
    id: z.string().min(1, "ID de módulo não pode ser vazio."),
    classes: z.array(z.string()).min(1, "O conjunto de classes de módulo não pode ser vazio."),
    module: z.string().min(1, "O módulo não pode ser vazio."),
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
}).strict();
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
        });
    }
});
//# sourceMappingURL=index.js.map