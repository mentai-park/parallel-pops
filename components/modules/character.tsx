import { FC, ComponentProps } from "react"

export const Character: FC<
  ComponentProps<"div"> & { type: Character; text: string }
> = ({ type, text, ...props }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "1rem" }} {...props}>
      <img
        src={`./images/${type}.png`}
        alt=""
        style={{
          width: type == "god" ? "16rem" : "6rem",
          height: type == "god" ? "16rem" : "6rem",
        }}
      />
      <div
        style={{
          position: "relative",
          background: "#ddf0f0",
          borderRadius: "1rem",
          padding: "0.75rem 1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            content: "''",
            position: "absolute",
            top: "1rem",
            left: "-0.75rem",
            width: "0",
            height: "0",
            borderTop: "0.5rem solid transparent",
            borderBottom: "0.5rem solid transparent",
            borderRight: "0.75rem solid #ddf0f0",
          }}
        />
        {text}
      </div>
    </div>
  )
}
