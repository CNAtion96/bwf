import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routines from './routines';

class App extends Component {
  
  render() {
    let rr = Routines.RR;
    const RR = (
      <div>
        <h1>{rr.name}</h1>
        <br></br>
        <div>
          <h2>{rr.warmups.name}</h2>
          <h3>{rr.warmups.dynamicStretches.name}</h3>
          <ul>
            <li>{rr.warmups.dynamicStretches.exercises.dislocates.reps} {rr.warmups.dynamicStretches.exercises.dislocates.name}</li>
            <li>{rr.warmups.dynamicStretches.exercises.skyReaches.reps} {rr.warmups.dynamicStretches.exercises.skyReaches.name}</li>
            <li>
            {rr.warmups.dynamicStretches.exercises.wristPrep.reps} {rr.warmups.dynamicStretches.exercises.wristPrep.name}
              <br></br>
              <ul>
                <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[0]}</li>
                <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[1]}</li>
                <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[2]}</li>
                <li>
                  {rr.warmups.dynamicStretches.exercises.wristPrep.progression[3]}
                  <br></br>
                  <ul>
                    <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[4]}</li>
                    <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[5]}</li>
                    <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[6]}</li>
                  </ul>
                </li>
                <li>{rr.warmups.dynamicStretches.exercises.wristPrep.progression[7]}</li>
              </ul>
            </li>
            <li>{rr.warmups.dynamicStretches.exercises.skyReaches.reps} {rr.warmups.dynamicStretches.exercises.skyReaches.name}</li>
            <li>{rr.warmups.dynamicStretches.exercises.supportHold.reps} {rr.warmups.dynamicStretches.exercises.supportHold.name}</li>
          </ul>
          <h3>{rr.warmups.bodylineDrills.name}</h3>
          <ul>
            <li>{rr.warmups.bodylineDrills.exercises.plank.reps} {rr.warmups.bodylineDrills.exercises.plank.name}</li>
            <li>{rr.warmups.bodylineDrills.exercises.sidePlank.reps} {rr.warmups.bodylineDrills.exercises.sidePlank.name}</li>
            <li>{rr.warmups.bodylineDrills.exercises.reversePlank.reps} {rr.warmups.bodylineDrills.exercises.reversePlank.name}</li>
            <li>{rr.warmups.bodylineDrills.exercises.hollowHold.reps} {rr.warmups.bodylineDrills.exercises.hollowHold.name}</li>
            <li>{rr.warmups.bodylineDrills.exercises.archHold.reps} {rr.warmups.bodylineDrills.exercises.archHold.name}</li>
          </ul>
          <h2>{rr.stillWork.name}</h2>
          <ul>
            <li>
              {rr.stillWork.exercises.handstandProg.reps} {rr.stillWork.exercises.handstandProg.name}
              <br></br>
              <ul>
                <li>{rr.stillWork.exercises.handstandProg.progression[0]}</li>
                <li>{rr.stillWork.exercises.handstandProg.progression[1]}</li>
                <li>{rr.stillWork.exercises.handstandProg.progression[2]}</li>
              </ul>
            </li>
            <li>
              {rr.stillWork.exercises.skinTheCatProg.reps} {rr.stillWork.exercises.skinTheCatProg.name}
              <br></br>
              <ul>
                <li>{rr.stillWork.exercises.skinTheCatProg.progression[0]}</li>
                <li>{rr.stillWork.exercises.skinTheCatProg.progression[1]}</li>
                <li>{rr.stillWork.exercises.skinTheCatProg.progression[2]}</li>
              </ul>
            </li>
          </ul>
          <h2>{rr.strengthWork.name}</h2>
          <ul>
            <li>
              {rr.strengthWork.exercises.firstPair.name}
              <br></br>
              <ul>
                <li>
                  {rr.strengthWork.exercises.firstPair.exercises.pullupProg.reps} {rr.strengthWork.exercises.firstPair.exercises.pullupProg.name}
                  <br></br>
                  <ul>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.pullupProg.progression[0]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.pullupProg.progression[1]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.pullupProg.progression[2]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.pullupProg.progression[3]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.pullupProg.progression[4]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.pullupProg.progression[5]}</li>
                  </ul>
                </li>
                <li>
                  {rr.strengthWork.exercises.firstPair.exercises.dipProg.reps} {rr.strengthWork.exercises.firstPair.exercises.dipProg.name}
                  <br></br>
                  <ul>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.dipProg.progression[0]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.dipProg.progression[1]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.dipProg.progression[2]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.dipProg.progression[3]}</li>
                    <li>{rr.strengthWork.exercises.firstPair.exercises.dipProg.progression[4]}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {rr.strengthWork.exercises.secondPair.name}
              <br></br>
              <ul>
                <li>
                  {rr.strengthWork.exercises.secondPair.exercises.lsitProg.reps} {rr.strengthWork.exercises.secondPair.exercises.lsitProg.name}
                  <br></br>
                  <ul>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.lsitProg.progression[0]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.lsitProg.progression[1]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.lsitProg.progression[2]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.lsitProg.progression[3]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.lsitProg.progression[4]}</li>
                  </ul>
                </li>
                <li>
                  {rr.strengthWork.exercises.secondPair.exercises.squatProg.reps} {rr.strengthWork.exercises.secondPair.exercises.squatProg.name}
                  <br></br>
                  <ul>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.squatProg.progression[0]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.squatProg.progression[1]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.squatProg.progression[2]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.squatProg.progression[3]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.squatProg.progression[4]}</li>
                    <li>{rr.strengthWork.exercises.secondPair.exercises.squatProg.progression[5]}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {rr.strengthWork.exercises.thirdPair.name}
              <br></br>
              <ul>
                <li>
                  {rr.strengthWork.exercises.thirdPair.exercises.pushupProg.reps} {rr.strengthWork.exercises.thirdPair.exercises.pushupProg.name}
                  <br></br>
                  <ul>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[0]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[1]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[2]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[3]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[4]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[5]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[6]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.pushupProg.progression[7]}</li>
                  </ul>
                </li>
                <li>
                  {rr.strengthWork.exercises.thirdPair.exercises.rowProg.reps} {rr.strengthWork.exercises.thirdPair.exercises.rowProg.name}
                  <br></br>
                  <ul>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.rowProg.progression[0]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.rowProg.progression[1]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.rowProg.progression[2]}</li>
                    <li>{rr.strengthWork.exercises.thirdPair.exercises.rowProg.progression[3]}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>)
    ;
    return (
      <div className="App">
        <button onClick={console.log(Routines.RR.name)}>Console.log</button>
        <div>
          {RR}
        </div>
      </div>
    );
  }
}

export default App;
