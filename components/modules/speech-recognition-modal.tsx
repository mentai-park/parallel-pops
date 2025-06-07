import { ComponentProps, FC } from "react"
import { Button } from "../elements/button"
import { useSpeechRecognition } from "../../hooks/hooks/use-speech-recognition"

export const SpeechRecognitionModal: FC<
  ComponentProps<"div"> & { onClose: (text?: string) => void }
> = ({ onClose, ...props }) => {
  const { transcript, isRecording, start, stop } = useSpeechRecognition({
    lang: "ja-JP",
    continuous: true,
    interimResults: true,
  })
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={() => onClose()}
      {...props}
    >
      <div
        aria-hidden="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          borderRadius: "1rem",
          padding: "2rem",
          maxWidth: "90vw",
          maxHeight: "90vh",
          minWidth: "24rem",
          minHeight: "16rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <textarea
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            flexGrow: 1,
            fontSize: "1.5rem",
            padding: "1rem",
          }}
          disabled={true}
          value={transcript}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 0,
          }}
        >
          <Button onClick={() => start()} disabled={isRecording}>
            録音開始
          </Button>
          <Button onClick={() => stop()} disabled={!isRecording}>
            録音停止
          </Button>
          {transcript && !isRecording && (
            <Button onClick={() => onClose(transcript)}>OK</Button>
          )}
        </div>
      </div>
    </div>
  )
}
