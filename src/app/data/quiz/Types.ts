export interface Option {
  text: string
  icon?: React.ElementType
}

export interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: Option[]
}
