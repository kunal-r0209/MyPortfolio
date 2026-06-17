import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * HeroScene — a Three.js canvas that renders floating 3D geometric objects
 * (torus, icosahedron, octahedron) with wireframe material and mouse parallax.
 */
export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ──────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Scene & Camera ────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 6)

    // ── Materials ─────────────────────────────────────────
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc9a96e,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xc9a96e,
      transparent: true,
      opacity: 0.55,
    })
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x1a1200,
      roughness: 0.8,
      metalness: 0.3,
      transparent: true,
      opacity: 0.7,
    })

    // Helper: build mesh + wireframe overlay
    const makeObject = (geo, x, y, z, wireOpacity = 0.22) => {
      const mat = wireMat.clone()
      mat.opacity = wireOpacity

      const solid = new THREE.Mesh(geo, solidMat.clone())
      const wire  = new THREE.Mesh(geo, mat)
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMat.clone())

      const group = new THREE.Group()
      group.add(solid, wire, edges)
      group.position.set(x, y, z)
      scene.add(group)
      return group
    }

    // ── Objects ───────────────────────────────────────────
    const torus = makeObject(new THREE.TorusGeometry(1.1, 0.35, 16, 60), -2.2, 0.4, 0, 0.18)
    const ico   = makeObject(new THREE.IcosahedronGeometry(0.9, 0), 2.0, -0.3, -0.5, 0.3)
    const octa  = makeObject(new THREE.OctahedronGeometry(0.7, 0), 0.4, 1.6, -1.0, 0.28)
    const tetra = makeObject(new THREE.TetrahedronGeometry(0.55, 0), -0.6, -1.8, 0.5, 0.32)

    const objects = [torus, ico, octa, tetra]

    // ── Lights ────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)
    const point1 = new THREE.PointLight(0xc9a96e, 2.5, 12)
    point1.position.set(3, 3, 3)
    scene.add(point1)
    const point2 = new THREE.PointLight(0x8a6030, 1.5, 10)
    point2.position.set(-3, -2, 2)
    scene.add(point2)

    // ── Particle field ────────────────────────────────────
    const particleGeo = new THREE.BufferGeometry()
    const count = 340
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 18
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xc9a96e,
      size: 0.028,
      transparent: true,
      opacity: 0.45,
    })
    scene.add(new THREE.Points(particleGeo, particleMat))

    // ── Mouse parallax ────────────────────────────────────
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Animation loop ────────────────────────────────────
    const clock = new THREE.Clock()
    let animId

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      torus.rotation.x = t * 0.18
      torus.rotation.y = t * 0.12

      ico.rotation.x = -t * 0.15
      ico.rotation.y =  t * 0.22

      octa.rotation.x = t * 0.20
      octa.rotation.z = t * 0.14

      tetra.rotation.y = t * 0.28
      tetra.rotation.x = t * 0.16

      // Subtle floating
      objects.forEach((obj, i) => {
        obj.position.y += Math.sin(t * 0.8 + i * 1.3) * 0.0015
      })

      // Camera parallax
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.04
      camera.position.y += (-mouse.y * 0.3 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  )
}
