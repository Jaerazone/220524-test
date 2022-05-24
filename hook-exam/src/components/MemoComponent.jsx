import React, { useEffect, useMemo, useState } from 'react';

const MemoComponent = () => {
    
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const tt = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return (()=> clearInterval(tt))
    }, []);


    const [inputNum, setInputNum] = useState(0);
    const [number, setNumber] = useState([1,5,10,4]);
    const [sumNumber, setSumNumber] = useState(0);
    const [average, setAverage] = useState(0);

    const onChange = (e) => {
        setInputNum(e.target.value);
        console.log(inputNum);
    }
    const addNumber = () => {
        setNumber([...number, parseInt(inputNum)])
        setInputNum(0);
    }

    const allSum = useMemo(() => {
        setSumNumber(number.reduce((previousValue, currentValue) => previousValue+currentValue,0))
        setAverage(sumNumber/number.length)
    },[number, sumNumber])
    

    return (
        <div className='main_section'>
            <div className='contain_section'>
                <h1 className='clock_section'>{time.toLocaleTimeString()}</h1>
                <input type="number" name ={inputNum} onChange={onChange}  />
                <button onClick={addNumber} >추가</button>

                <p>합 : {sumNumber}</p>

                <h2>모든 수의 평균 : {average} </h2>
                <ul>
                    {number.map( (s,i) => (
                        <li key={i} >{s}</li>
                    ))}                
                </ul>
            </div>
        </div>
    );
};

export default MemoComponent;