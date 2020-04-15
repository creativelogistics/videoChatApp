import React, { createRef, useEffect } from 'react'

export default function Canvas(props) {
  const canvasRef = createRef()

  useEffect(() => {
    if (canvasRef.current && props.stream.current) {
      const interval = setInterval(() => {
        const ctx = canvasRef.current.getContext('2d')
        ctx.drawImage(props.stream.current, 0, 0, 250, 188)
      }, 100)
      return () => clearInterval(interval)
    }
  })

  return (
    <canvas ref={canvasRef} width="250" height="188" />
  )
}