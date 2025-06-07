import { FC, ComponentProps } from "react"

export const Button: FC<ComponentProps<"button">> = ({ ...props }) => {
  return (
    <button
      style={{
        borderRadius: ".5rem",
        border: "none",
        background: "linear-gradient(90deg, #3b82f6, #1e40af)",
        color: "white",
        padding: ".5rem 1rem",
      }}
      {...props}
    />
  )
}
