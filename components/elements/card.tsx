import { FC, ComponentProps } from "react"

export const Card: FC<ComponentProps<"div">> = ({ ...props }) => {
  return (
    <div
      style={{
        borderRadius: ".5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        width: "33.33%",
      }}
      {...props}
    ></div>
  )
}
