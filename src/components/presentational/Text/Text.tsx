import { JSX } from "react";
import { createElement } from "react";

const TEXT_SIZES = {
  xl: 24,
  lg: 20,
  md: 16,
  sm: 14,
  xs: 12,
} as const;

const COLORS = {
  white: "var(--colors-white)",
  gray: "var(--colors-gray)",
  blue: "var(--colors-blue)",
} as const;

const TEXT_TYPES = {
  heading2: "h2",
  heading3: "h3",
  paragraph: "p",
  span: "span",
} as const;

type TextType = keyof typeof TEXT_TYPES;
type Color = keyof typeof COLORS;
type TextSize = "sm" | "md" | "lg" | "xl";

type TextProps = {
  content: string;
  type?: TextType;
  size?: TextSize;
  color?: Color;
  fw?: number;
  mb?: number;
};

const Text = ({
  content,
  type = "paragraph",
  size = "md",
  color = "white",
  fw = 600,
  mb = 0,
}: TextProps): JSX.Element => {
  const renderCorrectHtmlType = () => {
    const styles = {
      fontSize: `${TEXT_SIZES[size]}px`,
      color: COLORS[color],
      lineHeight: "20px",
      textTransform: "none",
      fontWeight: fw,
      marginBottom: mb,
    };

    return createElement(TEXT_TYPES[type], { style: styles }, content);
  };

  return renderCorrectHtmlType();
};

export default Text;
