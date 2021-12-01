import {v4 as uuid} from 'uuid';

import ImageRotation from './components/ImageRotation';

import './App.scss';

function App() {
  const BOOTSTRAP_DATA = [
    {
      id: uuid(),
      src: '/img/adam-wilson-qD6gGM5PUrk-unsplash.jpg',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
    },
    {
      id: uuid(),
      src: '/img/mia-baker-jjhvyxm34nY-unsplash.jpg',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
    },
    {
      id: uuid(),
      src: '/img/robert-bahn-kdbPeeVyV9I-unsplash.jpg',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
    },
    {
      id: uuid(),
      src: '/img/szm-4-VBizqynqyiw-unsplash.jpg',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
    },
    {
      id: uuid(),
      src: '/img/what-is-picture-perfect-yQ3raMLaLfA-unsplash.jpg',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
    },
  ];

  return (
    <div className="App">
      {BOOTSTRAP_DATA.map(item => 
      <ImageRotation key={item.id} src={item.src} description={item.description} />    
      )}
    </div>
  );
}

export default App;
