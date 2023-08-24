import RenderingComponentItem from "./RenderingComponentItem";
export default function ComponentInSceneWrapper({component}){
    const {top, left, zIndex, width, height} = component;

    function activateComponent(){
        
    }
    
    return <div className="scene-component-wrap" style={{top, left, zIndex, width, height}} onClick={activateComponent}>
        <RenderingComponentItem component={component} />
    </div>
}