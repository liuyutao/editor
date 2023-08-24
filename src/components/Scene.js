import ComponentInSceneWrapper from './ComponentInSceneWrapper';
import {findOverLappingComponents } from '../utils/utils';
import './scene.css';
export default function Scene(props){
    const {componentsInScene, sceneUpdate } = props;

    function handleComponentUpdate(component,index) {
        componentsInScene[index] = component;
        sceneUpdate()
    }

    function handleSave(){
        const overlappings = findOverLappingComponents(componentsInScene);
        overlappings.forEach(item => item.highlight = true )
    }

    return <div className="scene">
        {
            componentsInScene.map((component) => {
                return <ComponentInSceneWrapper key={component.zIndex} component={component} onUpdate={handleComponentUpdate} />
            })
        }
        <div className="save-button" onClick={handleSave}>Save</div>
    </div>
}