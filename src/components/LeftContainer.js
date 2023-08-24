import './left-container.css';
import data from '../data/componentList.json';
import { leftContainerWidth } from '../config';

export default function LeftContainer(props){
    const {addComponentToScene, onMovingComponent} = props;
    // 点击时创建一个移动中的元素。
    function handleMouseDown(comp) {
        onMovingComponent(comp);
    }

    function handleMouseUp(event){
        console.log(event)
        addComponentToScene();
    }

    return <div className="left-container" style={{width: leftContainerWidth}}>
        {
            data.list.map((comp, index) => {
                return <div className="component-item" key={index} onMouseDown={() => handleMouseDown(comp)}>
                    <div className="component-icon" style={{background: comp.background}}></div>
                    <p>{comp.name}</p>
                </div>
            })
        }

    </div>
}