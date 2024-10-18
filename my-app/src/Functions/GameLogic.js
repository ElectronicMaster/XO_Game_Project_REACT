import React, { useState,useEffect } from "react";

const GameLogic = () => {
    const [buttonVal,setButtonVal] = useState(Array(9).fill(""));
    const [buttonColor,setButtonColor] = useState(Array(9).fill(""));
    const [buttonValCol,setButtonValColor] = useState("white");
    const [startButton,setStartbutton] = useState(false);
    const [turn,setTurn] = useState("---");
    const [x,setX] = useState([]);
    const [o,setO] = useState([]);
    const [X_WinsCount, setX_WinsCount] = useState(0);
    const [O_WinsCount, setO_WinsCount] = useState(0);
    const [X_WinsCount_Color, setX_WinsCount_Color] = useState(Array(10).fill("white"));
    const [O_WinsCount_Color, setO_WinsCount_Color] = useState(Array(10).fill("white"));

    const HandleReset = () => {
        setTurn("X");
        return {ResetButtonVal:Array(9).fill(""),ResetButtonColor:Array(9).fill("")}
    }

    const StartButtonHandler = () => {
        let starter_x = Math.floor(Math.random() * 9);
        let tempX = []; 
        let tempButtonVal = [...buttonVal];
        tempButtonVal[starter_x] = "X"; 
        let tempColor = [...buttonColor];
        tempColor[starter_x] = "red";
        tempX.push(starter_x);
        setButtonColor(tempColor)
        setButtonVal(tempButtonVal); 
        setStartbutton(true);
        setX(tempX);
        setO([]);
        setTurn("O")
        setButtonValColor("white");
    }

    const ResetButtonHandler = () => {
        let {ResetButtonVal,ResetButtonColor} = HandleReset();
        setButtonColor(ResetButtonColor);
        setButtonVal(ResetButtonVal);
        setStartbutton(false);
        setO([])
        setX([])
        setTurn("---")
    }

    const HandleButtonClick = (position) => {
        if(startButton == false){
            return;
        }
        let tempButtonVal = [...buttonVal];
        let tempColor = [...buttonColor];
        let tempX = [...x];
        let tempO = [...o];
        if(turn === "X"){
            tempButtonVal[position] = turn;
            tempColor[position] = "red";
            tempX.push(position);
            setTurn("O");
        }else{
            tempButtonVal[position] = turn;
            tempColor[position] = "blue";
            tempO.push(position);
            setTurn("X");
        }
        setButtonVal(tempButtonVal);
        setButtonColor(tempColor);
        setX(tempX);
        setO(tempO);
    }

    useEffect(() => {
        let winXpos = FindingWinner([...x]);
        let tempX = [...x];
        if(tempX.length == 5){
            let tempColor = [...buttonColor];
            for(let i=0;i<9;i++){
                tempColor[i] = "yellow";
            }
            setButtonColor(tempColor);
            setButtonValColor("black");
            setTurn("---");
        }
        if(winXpos){
            setX_WinsCount((prevValue) => prevValue+1);
            setX_WinsCount_Color((prevValue) => {
                const newColors = [...prevValue];
                newColors[O_WinsCount+X_WinsCount] = "green";
                return newColors; 
            })
            setO_WinsCount_Color((prevValue) => {
                const newColors = [...prevValue];
                newColors[X_WinsCount+O_WinsCount] = "red";
                return newColors; 
            })
            let tempButtonVal = [...buttonVal];
            let tempColor = [...buttonColor];
            for(let i=0;i<3;i++){
                tempColor[winXpos[i]] = "green";
            }
            for(let i=0;i<9;i++){
                if((tempColor[i] == "green")){
                    continue;
                }
                tempColor[i] = "blue";
                if(tempButtonVal[i]=="X" || tempButtonVal[i]=="O"){
                    continue;
                }
                tempButtonVal[i] = "-";
            }
            setButtonVal(tempButtonVal);
            setButtonColor(tempColor);
        }
    }, [x]);
    useEffect(() => {
        let winOpos = FindingWinner([...o]);
        console.log(winOpos);
        if(winOpos){
            setO_WinsCount((prevValue) => prevValue+1);
            setO_WinsCount_Color((prevValue) => {
                const newColors = [...prevValue];
                newColors[O_WinsCount+X_WinsCount] = "green";
                return newColors; 
            })
            setX_WinsCount_Color((prevValue) => {
                const newColors = [...prevValue];
                newColors[X_WinsCount+O_WinsCount] = "red";
                return newColors; 
            })
            let tempButtonVal = [...buttonVal];
            let tempColor = [...buttonColor];
            for(let i=0;i<3;i++){
                tempColor[winOpos[i]] = "green";
            }
            for(let i=0;i<9;i++){
                if((tempColor[i] == "green")){
                    continue;
                }
                tempColor[i] = "blue";
                if(tempButtonVal[i]=="X" || tempButtonVal[i]=="O"){
                    continue;
                }
                tempButtonVal[i] = "-";
            }
            setButtonVal(tempButtonVal);
            setButtonColor(tempColor);
        }
    }, [o]);

    const FindingWinner = (tempVal) => {
        if(tempVal.length < 3){
            return;
        }
        return findWhowins(tempVal.sort());
    }
    const findWhowins = (arr) => {
        let winPos =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
        let arr_toString = arr.join();
        for(let j=0;j<winPos.length;j++){
            let flag = 0;
            for(let k=0;k<3;k++){
                if(arr_toString.includes(winPos[j][k])){
                    flag++;
                }else{
                    break;
                }
            }
            if(flag == 3){
                return winPos[j];
            }
        }
    }

    return {HandleReset,StartButtonHandler,ResetButtonHandler,HandleButtonClick,FindingWinner,X_WinsCount,X_WinsCount_Color,turn,buttonColor,buttonValCol,buttonVal,O_WinsCount,O_WinsCount_Color,startButton};
}

export default GameLogic;