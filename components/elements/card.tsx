import { FC, ComponentProps } from "react"

type CardProps = ComponentProps<"div"> & {
  selected?: boolean
  onSelect?: () => void
}

export const Card: FC<CardProps> = ({
  selected = false,
  onSelect,
  children,
  style,
  ...props
}) => {
  return (
    <div
      aria-hidden="true"
      onClick={onSelect}
      style={{
        background: "#fefefe",
        borderRadius: ".5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        border: selected ? "2px solid #0070f3" : "2px solid transparent",
        cursor: "pointer",
        transition: "border 0.2s ease-in-out",
        maxWidth: "24rem",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
