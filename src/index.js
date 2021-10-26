import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Canvas } from '@react-three/fiber'

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

ReactDOM.render(
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <App />
  </Canvas>,
  document.getElementById('root')
);