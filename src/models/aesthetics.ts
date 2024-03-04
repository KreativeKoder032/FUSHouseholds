/**
 * This is the Aesthetics front-end data that dictates the appearance of the page.
 */

export interface Aesthetics {
  // Aesthetics ID Number
  id: number,
  // Aesthetics Primary Color
  primary_color: string,
  // Aesthetics Secondary Color
  secondary_color?: string,
  // Aesthetics Third Color
  third_color?: string,
  // Aesthetics Text Color
  text_primary_color: string,
  // Aesthetics Text Color Secondary
  text_secondary_color?: string,
  // Aesthetics Text Font
  text_primary_font: string,
  // Aesthetics Text Font Secondary
  text_secondary_font?: string
}