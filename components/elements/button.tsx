import { FC, ComponentProps } from "react"

export const Button: FC<ComponentProps<"button">> = ({ ...props }) => {
  return (
    <button
      style={{
        borderRadius: ".5rem",
        border: "none",
        backgroundColor: "#966",
        color: "white",
        padding: ".5rem 1rem",
      }}
      {...props}
    />
  )
}
