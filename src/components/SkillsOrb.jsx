import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * SkillsOrb — A 3D rotating sphere with floating text-like nodes
 * representing different tech skills, using Three.js.
 */
export default function SkillsOrb() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)
    camera.position.set(0, 0, 5)

    // Central glowing sphere
    const sphereGeo = new THREE.SphereGeometry(1.2, 32, 32)
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x0e0900,
      roughness: 0.9,
      metalness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.5,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    scene.add(sphere)

    // Wireframe overlay on sphere
    const wireGeo = new THREE.SphereGeometry(1.22, 14, 14)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc9a96e,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    scene.add(new THREE.Mesh(wireGeo, wireMat))

    // Orbiting ring 1
    const ring1Geo = new THREE.TorusGeometry(1.9, 0.012, 8, 100)
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xc9a96e, transparent: true, opacity: 0.3 })
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat)
    ring1.rotation.x = Math.PI / 2.5
    scene.add(ring1)

    // Orbiting ring 2
    const ring2Geo = new THREE.TorusGeometry(2.2, 0.008, 8, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xc9a96e, transparent: true, opacity: 0.18 })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = -Math.PI / 3.5
    ring2.rotation.z = Math.PI / 5
    scene.add(ring2)

    // Orbiting nodes (small spheres on ring paths)
    const nodeCount = 12
    const nodes = []
    const nodeGeo = new THREE.SphereGeometry(0.055, 8, 8)

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2
      const radius = i % 2 === 0 ? 1.9 : 2.2
      const tilt   = i % 2 === 0 ? Math.PI / 2.5 : -Math.PI / 3.5

      const nodeMat = new THREE.MeshBasicMaterial({
        color: 0xc9a96e,
        transparent: true,
        opacity: 0.7 + Math.random() * 0.3,
      })
      const node = new THREE.Mesh(nodeGeo, nodeMat)

      // Start position on ring (rotated by tilt)
      node.userData = { angle, radius, tilt, speed: 0.3 + Math.random() * 0.3 }
      nodes.push(node)
      scene.add(node)
    }

    // Floating particles inside
    const partCount = 200
    const partGeo = new THREE.BufferGeometry()
    const partPos = new Float32Array(partCount * 3)
    for (let i = 0; i < partCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 0.5 + Math.random() * 0.65
      partPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      partPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      partPos[i * 3 + 2] = r * Math.cos(phi)
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3))
    const partMat = new THREE.PointsMaterial({ color: 0xc9a96e, size: 0.022, transparent: true, opacity: 0.6 })
    scene.add(new THREE.Points(partGeo, partMat))

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const pt = new THREE.PointLight(0xc9a96e, 3, 10)
    pt.position.set(2, 2, 3)
    scene.add(pt)

    // Mouse
    const mouse = { x: 0, y: 0 }
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    const clock = new THREE.Clock()
    let animId

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      sphere.rotation.y = t * 0.08
      sphere.rotation.x = t * 0.04

      ring1.rotation.z = t * 0.18
      ring2.rotation.z = -t * 0.12

      // Update node positions on rings
      nodes.forEach((node) => {
        const { radius, tilt, speed } = node.userData
        node.userData.angle += speed * 0.01
        const a = node.userData.angle
        const x = radius * Math.cos(a)
        const y = radius * Math.sin(a) * Math.cos(tilt)
        const z = radius * Math.sin(a) * Math.sin(tilt)
        node.position.set(x, y, z)
      })

      // Camera parallax
      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05
      camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}
