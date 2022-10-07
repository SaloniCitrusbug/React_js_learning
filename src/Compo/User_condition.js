import React,{useEffect,useState} from 'react'

function Task_effect() {
    const [Timer, setTimer] = useState(1)
    const [TimerRev, setTimerRev] = useState(5)
    const [Show, setShow] = useState(true)
    const [Increase, setIncrease] = useState(false)
    const tick = () => {
        if (TimerRev == 1){
            setShow(false)
        }
        Increase?setTimer(PreveCount => Show?PreveCount + 1:PreveCount):setTimerRev(PreveCount => Show?PreveCount - 1:PreveCount)
      }
    useEffect(() => {

        const Interval = setInterval(tick,1000)
        return () => {
            clearInterval(Interval)
        }

    })

  return (
    <div>
        <div>
            {Timer}
        </div>
        <br />
        <div>
        {TimerRev}
        </div>
        <button onClick={() => setIncrease(true)}>submit</button>
    </div>
  )
}

export default Task_effect