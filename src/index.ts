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
    os: z.string().min(1, "OS é obrigatório. Não pode estar vazio."),
    name: z.string().min(1, "Nome do projeto é obrigatório. Não pode estar vazio."),
    layout: z.enum([
        "electrolux",
        "mademsa"
    ]),
    modules: z.number({
        required_error: "Número de módulos é obrigatório.",
        invalid_type_error: "Número de módulos deve ser um número válido."
    }).int("Número de módulos deve ser um número inteiro.").positive("Número de módulos deve ser maior do que 0."),
    environment: z.enum([
        "development",
        "production"
    ]),
    figma: z.string().url().min(1, "O link do Figma não pode estar vazio e deve ser uma URL válida."),
    structure: z.enum([
        "plus",
        "light"
    ]),
    category: z.enum([
        "care",
        "wellbeing",
        "preservation",
        "preparation"
    ]),
    language: z.enum([
        "portuguese",
        "english",
        "spanish"
    ]),
    country: z.enum([
        "brasil",
        "argentina",
        "colômbia",
        "peru"
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

export const MediaSchema = SectionAttributesSchema.shape.media
export const ModalSchema = SectionAttributesSchema.shape.modal
export const CarouselSchema = SectionAttributesSchema.shape.carousel
export const IframeSchema = SectionAttributesSchema.shape.iframe

export type Media = z.infer<typeof MediaSchema>
export type Modal = z.infer<typeof ModalSchema>
export type Carousel = z.infer<typeof CarouselSchema>
export type Iframe = z.infer<typeof IframeSchema>

export interface SectionAttributes {
    id: string;
    classes: string[];
    module: string;
    contentHTML: string;
    media?: Media;
    modal?: Modal;
    carousel?: Carousel;
    iframe?: Iframe;
}

export const LayoutSchema = (ConfigurationPayloadSchema.innerType()).shape.layout
export const EnvironmentSchema = (ConfigurationPayloadSchema.innerType()).shape.environment
export const StructureSchema = (ConfigurationPayloadSchema.innerType()).shape.structure
export const CategorySchema = (ConfigurationPayloadSchema.innerType()).shape.category
export const LanguageSchema = (ConfigurationPayloadSchema.innerType()).shape.language
export const CountrySchema = (ConfigurationPayloadSchema.innerType()).shape.country

export type Layout = z.infer<typeof LayoutSchema>
export type Environment = z.infer<typeof EnvironmentSchema>
export type Structure = z.infer<typeof StructureSchema>
export type Category = z.infer<typeof CategorySchema>
export type Language = z.infer<typeof LanguageSchema>
export type Country = z.infer<typeof CountrySchema>

export interface ConfigurationPayload {
    os: string;
    name: string;
    layout: Layout;
    modules: number;
    environment: Environment;
    figma: string;
    structure: Structure;
    category: Category;
    language: Language;
    country: Country;
    sections: SectionAttributes[];
}