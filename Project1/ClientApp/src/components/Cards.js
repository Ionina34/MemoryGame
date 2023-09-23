import  { useState} from 'react'
import Card from './Card'
import Timer from './Timer'
import Winner from './Winner'

function Cards({ size,setGameStart }) {
    const [game,setGame]=useState(false)
    const [items, setItems] = useState(BoardRandom())
    const [prev, setPrev] = useState(-1)
    const [win, setWin] = useState(false)
    const [number, setNumber] = useState(0)
    const [canToGo, setCanToGo] = useState(true)

    const [hour,setHour]=useState(0)
    const [minute,setMinute]=useState(0)
    const [second, setSecond] = useState(0)

    function BoardRandom() {
        if (game == false) {
            let array = [
                { id: 1, img: '/Image/1.jpg', stat: "" },
                { id: 2, img: '/Image/2.jpg', stat: "" },
                { id: 3, img: '/Image/3.jpg', stat: "" },
                { id: 4, img: '/Image/4.jpg', stat: "" },
                { id: 5, img: '/Image/5.jpg', stat: "" },
                { id: 6, img: '/Image/6.jpg', stat: "" },
                { id: 7, img: '/Image/7.jpg', stat: "" },
                { id: 8, img:   '/Image/8.jpg', stat: "" },
                { id: 9, img:  '/Image/9.jpg', stat: "" },
                { id: 10, img: '/Image/10.jpg', stat: "" },
                { id: 11, img:   '/Image/11.jpg', stat: "" },
                { id: 12, img:   '/Image/12.jpg', stat: "" },
                { id: 13, img: '/Image/13.jpg', stat: "" },
                { id: 14, img: '/Image/14.jpg', stat: "" },
                { id: 15, img: '/Image/15.jpg', stat: "" },
                { id: 16, img: '/Image/16.jpg', stat: "" },
                { id: 17, img: '/Image/17.jpg', stat: "" },
                { id: 18, img: '/Image/18.jpg', stat: "" },
                { id: 19, img: '/Image/19.jpg', stat: "" },
                { id: 20, img: '/Image/20.jpg', stat: "" },
                { id: 21, img: '/Image/21.jpg', stat: "" },
                { id: 22, img: '/Image/22.jpg', stat: "" },
                { id: 23, img: '/Image/23.jpg', stat: "" },
                { id: 24, img: '/Image/24.jpg', stat: "" },
                { id: 25, img: '/Image/25.jpg', stat: "" },
                { id: 26, img: '/Image/26.jpg', stat: "" },
                { id: 27, img: '/Image/27.jpg', stat: "" },
                { id: 28, img: '/Image/28.jpg', stat: "" },
                { id: 29, img: '/Image/29.jpg', stat: "" },
                { id: 30, img: '/Image/30.jpg', stat: "" },
                { id: 31, img: '/Image/31.jpg', stat: "" },
                { id: 32, img: '/Image/32.jpg', stat: "" }
            ]
            if (size != 8) {
                do {
                    array.shift()
                } while (array.length > (size * size)/2)
            }
            const board = JSON.parse(JSON.stringify(array))
            const arr = [...array, ...board].sort(() => Math.random() - 0.5)

            const result = Array.from({ length: Math.ceil(arr.length / size) },
                (n, i) => arr.slice(i * size, (i + 1) * size))

            setGame(true)
            return result
        }
    }

    function check(current) {
        let x = current / size
        if (!Number.isInteger(x)) {
            x = Math.floor(x)
        }

        let y = current % size

        let i = prev / size
        if (!Number.isInteger(i)) {
            i = Math.floor(i)
        }

        let j = prev % size

        if (items[x][y].id == items[i][j].id) {
            items[x][y].stat = "correct"
            items[i][j].stat = "correct"
            setItems([...items])
            setPrev(-1)
            setNumber(number + 1)
            setCanToGo(true)
            CheckWin()
        } else {
            items[x][y].stat = "wrong"
            items[i][j].stat = "wrong"
            setItems([...items])
            setNumber(number + 1)
            setTimeout(() => {
                items[x][y].stat = ""
                items[i][j].stat = ""
                setItems([...items])
                setPrev(-1)
                setCanToGo(true)
            }, 1000)
        }
    }

    function handleClick(id) {
        let x = id / size

        if (!Number.isInteger(x)) {
          x =  Math.floor(x)
        }

        let y = id % size

        if (items[x][y].stat != "correct" && id!=prev && canToGo==true) {
            if (prev === -1) {
                items[x][y].stat = "active"
                setItems([...items])
                setPrev(id)
            } else {
                setCanToGo(false)
                check(id)
            }
        }
    }

    function CheckWin() {
        var num = 0;
        
        items.forEach((item) => {
            item.forEach((i) => {
                if (i.stat == "correct")
                    num += 1;
                else
                    return;
            })
        })
        if (num == 16)
            setWin(true);

    }

    return (
        <>
            {win ? (
                <>
                    <Winner hour={hour} minutes={minute} seconds={second} num={number}
                        setGame={setGameStart}/>
                </>
            ) : (
                    <div className="container">
                        <div className="infoGame">
                            <p>Кол-во ходов: {number}</p> 
                            <Timer setHour={setHour} setMinute={setMinute} setSecond={setSecond} win={win }/>
                        </div>
                         <div>
                            {items.map((el, i) => (
                                <div className="row">
                                    {el.map((element, j) => {
                                        return (
                                            <Card key={(size*i)+j} item={element} index={(size * i) + j} handleClick={handleClick} />
                                        )
                                    })}
                            </div>
                            ))}
                        </div>
                </div>
            )}
        </>
    );
}

export default Cards

