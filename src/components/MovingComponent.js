import RenderingComponentItem from './RenderingComponentItem';

export default function MovingComponent({component}){
    const { top, left, zIndex, width, height } = component
    return <div className="moving-component" style={{top, left, zIndex, width, height}}>
        {
            <RenderingComponentItem component={component}/>
        }
    </div>
}