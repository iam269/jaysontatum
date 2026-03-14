"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import imageUrl from "@/assets/image.png"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Initialize Three.js scene
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const scene = new THREE.Scene()

    // Load and display the image
    const loader = new THREE.TextureLoader()
    loader.load(imageUrl, (texture) => {
      const aspect = container.clientWidth / container.clientHeight
      const imageAspect = texture.image.width / texture.image.height
      
      let width = 2
      let height = 2
      
      if (aspect > imageAspect) {
        width = 2 * aspect / imageAspect
      } else {
        height = 2 * imageAspect / aspect
      }
      
      const geometry = new THREE.PlaneGeometry(width, height)
      const material = new THREE.MeshBasicMaterial({ map: texture })
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
    })

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  )
}
