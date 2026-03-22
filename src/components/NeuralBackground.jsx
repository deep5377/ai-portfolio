import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function NeuralBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const container = mountRef.current
    const w = container.clientWidth
    const h = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const nodeCount = 80
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16)
    const nodes = []
    const velocities = []

    for (let i = 0; i < nodeCount; i++) {
      const nodeMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.3 + Math.random() * 0.5,
      })
      const mesh = new THREE.Mesh(nodeGeo, nodeMat)
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20
      )
      scene.add(mesh)
      nodes.push(mesh)
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.005
      ))
    }

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.06,
    })
    let connectionLines = []

    function updateConnections() {
      connectionLines.forEach(function(l) { scene.remove(l) })
      connectionLines = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = nodes[i].position.distanceTo(nodes[j].position)
          if (d < 8) {
            const geo = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position,
            ])
            const line = new THREE.Line(geo, lineMat)
            scene.add(line)
            connectionLines.push(line)
          }
        }
      }
    }

    let mouse = { x: 0, y: 0 }
    function onMouseMove(e) {
      mouse.x = (e.clientX / w - 0.5) * 2
      mouse.y = -(e.clientY / h - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    let frame = 0
    function animate() {
      frame++

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].position.add(velocities[i])
        if (Math.abs(nodes[i].position.x) > 22) velocities[i].x *= -1
        if (Math.abs(nodes[i].position.y) > 14) velocities[i].y *= -1
        if (Math.abs(nodes[i].position.z) > 12) velocities[i].z *= -1

        const pulse = Math.sin(frame * 0.02 + i) * 0.15 + 0.12
        nodes[i].scale.setScalar(1 + pulse)
      }

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      if (frame % 5 === 0) updateConnections()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    function onResize() {
      const nw = container.clientWidth
      const nh = container.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    return function() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
}

export default NeuralBackground