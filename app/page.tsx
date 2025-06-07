import React, { ComponentProps, FC } from "react"

const Page: FC<ComponentProps<"section">> = ({ children, ...props }) => {
  return <React.Fragment {...props}>{children}</React.Fragment>
}

export default Page
