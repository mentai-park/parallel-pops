import { useEffect, useRef, useState, useCallback } from "react"

const getSpeechRecognition = () => {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null
}

export const useSpeechRecognition = ({
  lang = "ja-JP",
  continuous = true,
  interimResults = true,
}: {
  lang?: string
  continuous?: boolean
  interimResults?: boolean
}) => {
  const [transcript, setTranscript] = useState<string>("")
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    const SpeechRecognition = getSpeechRecognition()
    if (!SpeechRecognition) {
      console.warn("SpeechRecognition is not supported in this browser.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.continuous = continuous
    recognition.interimResults = interimResults

    recognition.onresult = (event) => {
      let interim = ""
      let final = ""

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i]
        const text = result[0].transcript
        if (result.isFinal) {
          final += text
        } else {
          interim += text
        }
      }

      setTranscript(final || interim)
    }

    recognition.onerror = (event) => {
      console.error("SpeechRecognition error:", event)
    }

    recognition.onend = () => {
      if (isRecording) {
        recognition.start()
      }
    }

    recognitionRef.current = recognition

    return () => {
      recognition.stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const start = useCallback(() => {
    const rec = recognitionRef.current
    if (rec && !isRecording) {
      rec.start()
      setIsRecording(true)
    }
  }, [isRecording])

  const stop = useCallback(() => {
    const rec = recognitionRef.current
    if (rec && isRecording) {
      rec.stop()
      setIsRecording(false)
    }
  }, [isRecording])

  return {
    transcript,
    isRecording,
    start,
    stop,
  }
}
