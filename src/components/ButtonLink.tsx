import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary";
  }
>;

export function ButtonLink({
  children,
  className = "",
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  const rel =
    props.target === "_blank"
      ? [props.rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
      : props.rel;

  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      {...props}
      rel={rel}
    >
      {children}
    </a>
  );
}
