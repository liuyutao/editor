
export default function RenderingComponentItem(props){
    console.log(props)

    const {width, height, background, text} = props.component;
    return (
        <div className="rendering-component-item" style={{width, height, background }} >
            {text}
        </div>
    )
}