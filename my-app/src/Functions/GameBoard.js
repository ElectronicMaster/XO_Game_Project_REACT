import React, { useState,useEffect } from "react";
import './Functions_Styles/GameBoard_style.css';
import GameLogic from "./GameLogic";
import Popup_Win from "./Popup_Win";

const GameBoard = () => {
    const {HandleReset,StartButtonHandler,ResetButtonHandler,HandleButtonClick,FindingWinner,X_WinsCount,X_WinsCount_Color,turn,buttonColor,buttonValCol,buttonVal,O_WinsCount,O_WinsCount_Color,startButton} = GameLogic();

    return (
        <div className="Container">
                <table className="X_ScoreBoard">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                SCORE[X]
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="Main_Score"><td colSpan="2">{X_WinsCount}</td></tr>
                        <tr>
                            <td style={{backgroundColor:X_WinsCount_Color[0]}}>{X_WinsCount_Color[0] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:X_WinsCount_Color[5]}}>{X_WinsCount_Color[5] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:X_WinsCount_Color[1]}}>{X_WinsCount_Color[1] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:X_WinsCount_Color[6]}}>{X_WinsCount_Color[6] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:X_WinsCount_Color[2]}}>{X_WinsCount_Color[2] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:X_WinsCount_Color[7]}}>{X_WinsCount_Color[7] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:X_WinsCount_Color[3]}}>{X_WinsCount_Color[3] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:X_WinsCount_Color[8]}}>{X_WinsCount_Color[8] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:X_WinsCount_Color[4]}}>{X_WinsCount_Color[4] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:X_WinsCount_Color[9]}}>{X_WinsCount_Color[9] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                    </tbody>
                </table>
            <div className="GamePlay">
                <div className="ShowTurn">
                    <label>
                        It's Turn off : <span>{turn}</span>
                    </label>
                </div>
                <div className="Board">
                    <div>
                        <div className='Square_top_left'><button onClick={() => HandleButtonClick(0)} style={{backgroundColor:buttonColor[0],color:buttonValCol}} disabled={buttonVal[0]}>{buttonVal[0]}</button></div>
                        <div className='Square_left'><button onClick={() => HandleButtonClick(1)} style={{backgroundColor:buttonColor[1],color:buttonValCol}} disabled={buttonVal[1]}>{buttonVal[1]}</button></div>
                        <div className='Square_left'><button onClick={() => HandleButtonClick(2)} style={{backgroundColor:buttonColor[2],color:buttonValCol}} disabled={buttonVal[2]}>{buttonVal[2]}</button></div>
                    </div>
                    <div> 
                        <div className='Square_top'><button onClick={() => HandleButtonClick(3)} style={{backgroundColor:buttonColor[3],color:buttonValCol}} disabled={buttonVal[3]}>{buttonVal[3]}</button></div>
                        <div className='Square'><button onClick={() => HandleButtonClick(4)} style={{backgroundColor:buttonColor[4],color:buttonValCol}} disabled={buttonVal[4]}>{buttonVal[4]}</button></div>
                        <div className='Square'><button onClick={() => HandleButtonClick(5)} style={{backgroundColor:buttonColor[5],color:buttonValCol}} disabled={buttonVal[5]}>{buttonVal[5]}</button></div>
                    </div>
                    <div>
                        <div className='Square_top'><button onClick={() => HandleButtonClick(6)} style={{backgroundColor:buttonColor[6],color:buttonValCol}} disabled={buttonVal[6]}>{buttonVal[6]}</button></div>
                        <div className='Square'><button onClick={() => HandleButtonClick(7)} style={{backgroundColor:buttonColor[7],color:buttonValCol}} disabled={buttonVal[7]}>{buttonVal[7]}</button></div>
                        <div className='Square'><button onClick={() => HandleButtonClick(8)} style={{backgroundColor:buttonColor[8],color:buttonValCol}} disabled={buttonVal[8]}>{buttonVal[8]}</button></div>
                    </div>
                </div>
                <div className="Start_Reset">
                    <button className="Start" onClick={StartButtonHandler} disabled={startButton}>Start</button>
                    <button className="Reset" onClick={ResetButtonHandler}>Reset</button>
                </div>
                {/* {isPopupVisible && <Popup_Win/>} */}
            </div>
            <div>
                <table className="Y_ScoreBoard">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                SCORE[Y]
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="Main_Score"><td colSpan="2">{O_WinsCount}</td></tr>
                        <tr>
                            <td style={{backgroundColor:O_WinsCount_Color[0]}}>{O_WinsCount_Color[0] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:O_WinsCount_Color[5]}}>{O_WinsCount_Color[5] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:O_WinsCount_Color[1]}}>{O_WinsCount_Color[1] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:O_WinsCount_Color[6]}}>{O_WinsCount_Color[6] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:O_WinsCount_Color[2]}}>{O_WinsCount_Color[2] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:O_WinsCount_Color[7]}}>{O_WinsCount_Color[7] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:O_WinsCount_Color[3]}}>{O_WinsCount_Color[3] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:O_WinsCount_Color[8]}}>{O_WinsCount_Color[8] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:O_WinsCount_Color[4]}}>{O_WinsCount_Color[4] == "green" ? "Win" : "Lose"}</td>
                            <td style={{backgroundColor:O_WinsCount_Color[9]}}>{O_WinsCount_Color[9] == "green" ? "Win" : "Lose"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GameBoard;