import { useLoadingContext } from "../../services/loading-provider"
import React from "react"

const Loading = () => {
  const { loadingText } = useLoadingContext()

  return (
    <>
      <style>{`@keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }`}</style>
      {loadingText && (
        <section
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              border: "6px solid #ccc",
              borderTopColor: "#3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              width: "8rem",
              height: "8rem",
            }}
          ></div>
          <p style={{ textAlign: "center", lineHeight: 2 }}>{loadingText}</p>
        </section>
      )}
    </>
  )
}

export { Loading }
