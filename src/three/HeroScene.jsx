import { useEffect, useRef } from 'react'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from 'three'

const EMBER = new Color('#ff6b3d')
const BONE = new Color('#edeae4')
const SKY = new Color('#7da2ff')

/** Soft round dot — without this, PointsMaterial renders hard squares. */
function dotTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.3, 'rgba(255,255,255,0.6)')
  g.addColorStop(0.65, 'rgba(255,255,255,0.14)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

function sphereGeometry(count, radius, spread) {
  const pos = new Float32Array(count * 3)
  const col = new Float32Array(count * 3)
  const golden = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    const j = 1 - spread / 2 + Math.random() * spread

    pos[i * 3] = Math.cos(theta) * r * radius * j
    pos[i * 3 + 1] = y * radius * j
    pos[i * 3 + 2] = Math.sin(theta) * r * radius * j

    const t = Math.random()
    const c = t > 0.94 ? SKY : t > 0.78 ? EMBER : BONE
    const fade = 0.5 + Math.random() * 0.5
    col[i * 3] = c.r * fade
    col[i * 3 + 1] = c.g * fade
    col[i * 3 + 2] = c.b * fade
  }

  const g = new BufferGeometry()
  g.setAttribute('position', new BufferAttribute(pos, 3))
  g.setAttribute('color', new BufferAttribute(col, 3))
  return g
}

function pointsCloud(count, radius, size, opacity, spread = 0.16, tex) {
  const geo = sphereGeometry(count, radius, spread)
  const mat = new PointsMaterial({
    size,
    map: tex,
    alphaTest: 0.01,
    vertexColors: true,
    transparent: true,
    opacity,
    sizeAttenuation: true,
    depthWrite: false,
    blending: AdditiveBlending,
  })
  return new Points(geo, mat)
}

function ring(radius, tube, tilt, color, opacity, speed) {
  const geo = new TorusGeometry(radius, tube, 6, 240)
  const mat = new MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: AdditiveBlending,
  })
  const mesh = new Mesh(geo, mat)
  mesh.rotation.set(...tilt)
  mesh.userData.spin = speed
  return mesh
}

export default function HeroScene() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dense = window.innerWidth > 768

    let renderer
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
    renderer.setClearAlpha(0)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    host.appendChild(renderer.domElement)

    const scene = new Scene()
    const camera = new PerspectiveCamera(46, 1, 0.1, 100)
    camera.position.set(0, 0, 6.4)

    const swarm = new Group()
    swarm.position.set(dense ? 1.5 : 0, 0.1, 0)
    scene.add(swarm)

    const tex = dotTexture()
    const near = pointsCloud(dense ? 2600 : 900, 1.86, 0.055, 0.62, 0.14, tex)
    const far = pointsCloud(dense ? 260 : 90, 1.96, 0.13, 0.42, 0.2, tex)
    swarm.add(near, far)

    const coreGeo = new IcosahedronGeometry(1.28, 1)
    const coreMat = new MeshBasicMaterial({
      color: '#ff8a5c',
      wireframe: true,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      blending: AdditiveBlending,
    })
    const core = new Mesh(coreGeo, coreMat)
    swarm.add(core)

    const rings = [
      ring(2.62, 0.0035, [1.18, 0.22, 0.35], '#ff6b3d', 0.22, 0.06),
      ring(3.06, 0.0028, [1.44, 0.95, 0.12], '#edeae4', 0.08, -0.04),
      ring(3.48, 0.0025, [0.72, 0.4, 1.12], '#7da2ff', 0.11, 0.03),
    ]
    rings.forEach((r) => swarm.add(r))

    const pointer = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }

    const resize = () => {
      const w = host.clientWidth || window.innerWidth
      const h = host.clientHeight || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(host)

    let raf = 0
    let running = true
    const start = performance.now()

    const render = () => {
      if (!running) return
      const t = (performance.now() - start) / 1000

      pointer.x += (target.x - pointer.x) * 0.05
      pointer.y += (target.y - pointer.y) * 0.05

      swarm.rotation.y += 0.0011
      swarm.rotation.x += (pointer.y * 0.24 - swarm.rotation.x) * 0.035
      swarm.rotation.z += (pointer.x * 0.1 - swarm.rotation.z) * 0.035

      const breathe = 1 + Math.sin(t * 0.45) * 0.014
      swarm.scale.setScalar(breathe)

      core.rotation.y -= 0.002
      core.rotation.x += 0.0008
      core.scale.setScalar(1 + Math.sin(t * 0.8) * 0.03)

      for (const r of rings) r.rotation.z += r.userData.spin * 0.01

      renderer.render(scene, camera)
      raf = requestAnimationFrame(render)
    }

    const onVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(raf)
      }
    }

    if (!reduced) {
      window.addEventListener('pointermove', onPointer, { passive: true })
      document.addEventListener('visibilitychange', onVisibility)
      raf = requestAnimationFrame(render)
    } else {
      renderer.render(scene, camera)
    }

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) o.material.dispose()
      })
      tex.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={hostRef} className="h-full w-full" aria-hidden />
}
