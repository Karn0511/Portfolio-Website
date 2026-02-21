import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-hologram-bg',
  standalone: true,
  template: `<div #canvasContainer class="fixed inset-0 -z-10 opacity-30 pointer-events-none"></div>`,
  styles: [`:host { display: block; }`]
})
export class HologramBgComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef;
  
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private frameId!: number;
  private geometry!: THREE.PlaneGeometry;
  private material!: THREE.ShaderMaterial;
  private mesh!: THREE.Mesh;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initThree();
  }

  ngOnDestroy() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    // Grid Shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform float uTime;
      
      void main() {
        vec2 grid = abs(fract(vUv * 20.0 - 0.5) - 0.5) / fwidth(vUv * 20.0);
        float line = min(grid.x, grid.y);
        float color = 1.0 - min(line, 1.0);
        
        vec3 blue = vec3(0.0, 0.5, 1.0) * color * 0.2;
        float pulse = (sin(uTime * 0.5) * 0.5 + 0.5) * 0.1;
        
        gl_FragColor = vec4(blue + pulse, color * 0.1);
      }
    `;

    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = -2;
    this.scene.add(this.mesh);

    this.camera.position.z = 5;
    this.camera.position.y = 1;

    const animate = (time: number) => {
      this.frameId = requestAnimationFrame(animate);
      this.material.uniforms['uTime'].value = time * 0.001;
      this.renderer.render(this.scene, this.camera);
    };

    animate(0);

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
