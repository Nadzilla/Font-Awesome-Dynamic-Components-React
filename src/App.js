import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import FontAwesomeLayering from './Components/FontAwesomeLayering'

// import lodash from 'lodash'
library.add(fas)

function App() {
  return (
    <div className="App">
      <i className="fas fa-book"> </i>
      <div style={{ position: 'absolute', left: '7%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['road', 'sun', 'moon', 'star']}
          colors={['black', 'yellow', 'blue', 'yellow']}
          sizes={['5x', '5x', '5x', '5x']}
          transforms={['grow-2', 'shrink-10 up-15', 'shrink-11 up-15 left-5', 'shrink-11 up-15 right-5']}
          spin={[false, true, true, true]}
          pulse={[false, true, true, true]}
          listItem={[true, true, true, true]}
          inverse={[false, false]}
          fixedWidth={[true, true, true, true]}
          border={[false, false]}
        />

      </div>

      <div style={{ position: 'absolute', left: '20%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['bookmark', 'heart']}
          colors={['black', 'red']}
          sizes={['5x', '5x', '5x', '5x']}
          transforms={['', 'shrink-10 up-2 left-2']}
        />

      </div>

      <div style={{ position: 'absolute', left: '30%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['circle', 'times']}
          colors={['tomato', 'white']}
          sizes={['5x', '4x']}
          transforms={['right-4', 'shrink-6 right-9.2']}
        />

      </div>


      <div style={{ position: 'absolute', left: '43%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['certificate', 'check']}
          colors={['black', 'white']}
          sizes={['5x', '3x']}
          transforms={['right-4', 'shrink-6 right-12']}
          spin={[false, false]}
          pulse={[false, false]}
          listItem={[false, false]}
          inverse={[false, false]}
          fixedWidth={[false, false]}
          flip={['vertical']}
          border={[false, false]}
        />

      </div>

      <div style={{ position: 'absolute', left: '56%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['square', 'certificate']}
          colors={['blue', 'black']}
          sizes={['5x', '4x']}
          transforms={['right-4', 'shrink-6 right-5.6']}
          spin={[false, true]}
          pulse={[false, false]}
          listItem={[false, false]}
          inverse={[false, false]}
          fixedWidth={[false, false]}
          border={[false, false]}
        />

      </div>

      <div style={{ position: 'absolute', left: '72%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['play', 'sun', 'moon', 'star']}
          colors={['black', 'white', 'white', 'white']}
          sizes={['5x', '5x', '5x', '5x']}
          transforms={['rotate--90 grow-2', 'shrink-10 up-2 left-1', 'shrink-11 down-4.2 left-5', 'shrink-11 down-4.2 right-2']}
        />

      </div>

      <div style={{ position: 'absolute', left: '86%', top: '50%', transform: 'translate(-50%, -50%)' }}>

        <FontAwesomeLayering
          icons={['play', 'sun', 'moon', 'star']}
          colors={['orange', 'green', 'blue', 'yellow']}
          sizes={['5x', '5x', '5x', '5x']}
          transforms={['rotate--90 grow-2', 'shrink-10 up-2 left-1', 'shrink-11 down-4.2 left-5', 'shrink-11 down-4.2 right-2']}
          spin={[true, true, true, true]}
          pulse={[true, true, true, true]}
          listItem={[true, true, true, true]}
          inverse={[false, false]}
          fixedWidth={[true, true, true, true]}
          border={[false, false]}
        />

      </div>

    </div>
  );
}

export default App;
