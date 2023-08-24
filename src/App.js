import {useState} from 'react';
import LeftContainer from './components/LeftContainer'
import MovingComponent from './components/MovingComponent';
import Scene from './components/Scene';
import { leftContainerWidth } from './config';
import './App.css';



function App() {
    const [componentsInScene, setComponentsInScene] = useState([]);
    const [movingComponent, setMovingComponent] = useState(null);
    const [componentIndex, setComponentIndex] = useState(1);
    function handleAddComponent(component){
        const {defaultSize: {width, height} } = component;
        const newComponent = {
            ...component,
            width,
            height,
            zIndex: componentIndex
        };
        componentsInScene.push(newComponent);
        setMovingComponent(null);
        setComponentIndex(componentIndex+1);
    }
    console.log(componentsInScene)

    function onMouseMove(e) {
        if(movingComponent) {
            const {pageX,pageY} = e;
            movingComponent.left = pageX - leftContainerWidth;
            movingComponent.top = pageY;
            setMovingComponent(movingComponent);
        }
    }

    function onMouseUp(e) {
        if(movingComponent) {
            handleAddComponent(movingComponent)
        }
    }
    return (
        <div className="App" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
            <LeftContainer onAddComponent={handleAddComponent} onMovingComponent={setMovingComponent}/>
            <Scene componentsInScene={componentsInScene} sceneUpdate={setComponentsInScene} />
            { movingComponent && <MovingComponent component={movingComponent}  /> }
        </div>
    );
}

export default App;
