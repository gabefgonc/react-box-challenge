import {useState} from 'react'
import './App.css'
import {Box} from './components/Box'
import {Separator} from './components/Separator'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

type BoxState = {
  color: string
  num: number

}

function App() {

  const [boxes, setBoxes] = useState<BoxState[]>([{color: '#ff0000', num: 1}, {color: '#00ff00', num: 2}, {color: '#0000ff', num: 3}])

  return (
    <div className="w-full h-full flex justify-center items-center gap-2">
      {boxes.map((box, idx) => {
        return <>
          <Separator onClick={() => {
            const boxesCopy = [...boxes]
            boxesCopy.splice(idx, 0, {color: getRandomColor(), num: boxes.length + 1})
            setBoxes(boxesCopy)

          }} />

          <Box color={box.color}>{box.num}</Box>

          {idx + 1 === boxes.length ? (
            <Separator onClick={() => {
              const boxesCopy = [...boxes]
              boxesCopy.splice(boxes.length, 0, {color: getRandomColor(), num: boxes.length + 1})
              setBoxes(boxesCopy)

            }} />
          ) : null}
        </>
      })}
    </div>
  )
}

export default App
