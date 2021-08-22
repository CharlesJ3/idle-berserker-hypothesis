import React from 'react'
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './BattleScene.scss';
import Earthy from '../../images/earthy.jpg';
import Earthyf1 from '../../images/earthyf1.jpg';
import Earthyf2 from '../../images/earthyf2.jpg';
import Earthyf3 from '../../images/earthyf3.jpg';
import Shiny from '../../images/shiny.jpg';
import Bumpy from '../../images/bumpy.jpg';
import Cloud1 from '../../images/cloud1.jpg';
import Cloud2 from '../../images/cloud2.jpg';
import { Vector3 } from 'three';


const BattleScene = () => {

  
  const [damage, damageEnemyHealth] = useState(
    {
      e1Health: 10,
      s1Damage: 1,
      s2Damage: 1,
      s3Damage: 1,
      s4Damage: 1,
    }
  )

  const damageEnemy = ( shipDamage ) => {

    damageEnemyHealth((prevState => ({
      ...prevState,
      e1Health: damage.e1Health -= shipDamage,
    })));
  }

  const [cameraPan, updateCameraPan] = useState(
    {
      camera1: false,
      camera2: false,
      camera3: false,
      camera4: false,
      camera5: false,
    }
  )

  const allCameraPanControl = ( cameraToPan ) => {

    damageEnemyHealth((prevState => ({
      ...prevState,
      [cameraToPan]: true,
    })));

    console.log(this.useState.cameraPan);
  }

  const mountRef = useRef(null);

  useEffect(() => {

    const colorSelector = {
      thin: .1,
      thin2: .2,
      thin3: .3,
      med: .4,
      med2: .5,
      med3: .6,
      heavy: .7,
      heavy2: .8,
      heavy3: .9,
      full: 1,
      toxicGreen: 0x588222,
      plum: 0xD694E1,
      turquoise: 0x57CED7,
      studio: 0x844AAF,
      raven: 0x696F7A,
      burgundy: 0x85052F,
      jazzberry: 0xA91E60,
      amaranth: 0xE12A48
    }

    const scene = new THREE.Scene();

    var width = 4.8,
    height = 3.6,
    left = width * -1,
    right = width,
    top = height,
    bottom = height * -1,
    near = 1,
    far = 25,
    camera = new THREE.OrthographicCamera(
      left,
      right,
      top,
      bottom,
      near,
      far
    );

    camera.updateProjectionMatrix();
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const light = new THREE.DirectionalLight(0xffffff, 2)
    const light2 = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(-5, 2, 5)
    light2.position.set(5, 2, -5)
    scene.add(light, light2)

    renderer.setSize( window.innerWidth * .98, window.innerHeight * .9);
    mountRef.current.appendChild( renderer.domElement );


    let sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereLoader = new THREE.TextureLoader().load(Earthyf1);
    const sphereLoader2 = new THREE.TextureLoader().load(Earthyf1);
    const earthShinyLoader = new THREE.TextureLoader().load(Shiny);
    const earthBumpyLoader = new THREE.TextureLoader().load(Bumpy);

    const sphereMaterial = new THREE.MeshPhongMaterial({
      map: sphereLoader,
      bumpMap: earthBumpyLoader,
      specularMap: earthShinyLoader,
      specular: 1
    });

    const sphereMaterial2 = new THREE.MeshPhongMaterial({
      color: 0x632333,
      specular: 1
    });

    const laserMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFF,
      specular: 0xE858C5,
      shininess: 10,
    });

    const geometry_clouds = new THREE.SphereGeometry(2.06, 32, 32);
    const material_clouds = new THREE.MeshPhongMaterial({
      // alpha: true,
      color: colorSelector.toxicGreen,
      opacity: colorSelector.med3,
      transparent: true,
      side: THREE.DoubleSide,
    });

    material_clouds.map = new THREE.TextureLoader().load(Cloud2);
    material_clouds.side = THREE.DoubleSide ;
    material_clouds.alphaMap = new THREE.TextureLoader().load(Cloud1);
    material_clouds.transparent = true;

    const cloud_mesh = new THREE.Mesh(geometry_clouds, material_clouds);
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.set(0,0,0);

    let orbitBase = new THREE.SphereGeometry(.15, 32, 32);
    const orbit = new THREE.Mesh(orbitBase, sphereMaterial2);
    const orbit2 = new THREE.Mesh(orbitBase, sphereMaterial2);
    const orbit3 = new THREE.Mesh(orbitBase, sphereMaterial2);
    const orbit4 = new THREE.Mesh(orbitBase, sphereMaterial2);

    let laserBase = new THREE.CylinderGeometry( 6, 1, 9, 12, 1, 0, 6.3);
    const laser = new THREE.Mesh(laserBase, laserMaterial);
    const laser2 = new THREE.Mesh(laserBase, laserMaterial);
    const laser3 = new THREE.Mesh(laserBase, laserMaterial);
    const laser4 = new THREE.Mesh(laserBase, laserMaterial);
    laser.scale.set(.02, .02, .02);
    laser2.scale.set(.02, .02, .02);
    laser3.scale.set(.02, .02, .02);
    laser4.scale.set(.02, .02, .02);
    laser.rotation.set(360, 90, 0);
    laser2.rotation.set(360, 90, 0);
    laser3.rotation.set(360, 90, 0);
    laser4.rotation.set(360, 90, 0);

    // Add main objects
    scene.add( sphere, cloud_mesh, orbit, orbit2, orbit3, orbit4 );

    // Add secondary objects
    scene.add( laser, laser2, laser3, laser4 );
    // scene.add( laser );

    camera.position.z = 12;

    let attachOrbitalControl = renderer.domElement;
    let orbitalControl = new OrbitControls( camera, attachOrbitalControl );

    orbit.position.set(1,1,2);
    orbit2.position.set(1,-1,-2);
    orbit3.position.set(-1,1,-2);
    orbit4.position.set(1,-1,2);

    laser.position.set(
      orbit.position.x,
      orbit.position.y,
      orbit.position.z,
    );
    laser2.position.set(
      orbit2.position.x,
      orbit2.position.y,
      orbit2.position.z,
    );
    laser3.position.set(
      orbit3.position.x,
      orbit3.position.y,
      orbit3.position.z,
    );
    laser4.position.set(
      orbit4.position.x,
      orbit4.position.y,
      orbit4.position.z,
    );

    const cameraChange = function () {
      camera.position.lerp(new THREE.Vector3(3.50,0.71,12.30), 0.0325);
    }

    const animate = function () {
      requestAnimationFrame( animate );
      cloud_mesh.rotation.x += 0.0003;
      cloud_mesh.rotation.y += 0.0003;
      sphere.rotation.y += 0.0005;
      renderer.render( scene, camera );

      // Orbit Controls
      let date = Date.now() * 0.0003;
      orbit.position.set(
        Math.cos(date) * 5,
        Math.sin(date) * -1.5,
        Math.sin(date) * 3
      );

      orbit2.position.set(
        Math.cos(date) * 3,
        Math.cos(date) * 2,
        Math.sin(date) * 3
      );

      orbit3.position.set(
        Math.cos(date) * 3,
        Math.cos(date),
        Math.sin(date) * 4
      );

      orbit4.position.set(
        Math.cos(date) * -3,
        Math.cos(date) * -2,
        Math.sin(date) * -3
      );

      if (laser2.position.x <= .15 && laser2.position.y <= .1 && laser2.position.z <= .2) {
        laser.position.set(
          orbit.position.x,
          orbit.position.y,
          orbit.position.z,
        );
      }

      if (laser2.position.x <= .15 && laser2.position.y <= .1 && laser2.position.z <= .2) {
        laser2.position.set(
          orbit2.position.x,
          orbit2.position.y,
          orbit2.position.z,
        );
      }

      if (laser3.position.x <= .15 && laser3.position.y <= .1&& laser3.position.z <= .2) {
        laser3.position.set(
          orbit3.position.x,
          orbit3.position.y,
          orbit3.position.z,
        );
      } 

      if (laser4.position.x <= .15 && laser4.position.y <= .1 && laser4.position.z <= .2) {
        laser4.position.set(
          orbit4.position.x,
          orbit4.position.y,
          orbit4.position.z,
        );
      }

      laser.position.lerp(new THREE.Vector3(0,0,0), 0.0325);
      laser2.position.lerp(new THREE.Vector3(0,0,0), 0.0325);
      laser3.position.lerp(new THREE.Vector3(0,0,0), 0.0325);
      laser4.position.lerp(new THREE.Vector3(0,0,0), 0.0325);

      cameraChange();
    }

    animate();

    return () => mountRef.current.removeChild( renderer.domElement );
  }, []);

  return (
    <div className="battleScene" ref={mountRef}>
      <div className="floatingInterface">
        <span className="floatingInterface__health">{  }</span>
      </div>
    </div>
  );
}

export default BattleScene
