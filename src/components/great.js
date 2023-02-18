import react from 'react'

//funcation components
const Greet = (props)=>{ 
    console.log(props)
return <h1>Hello {props.name} as {props.heroName}</h1>
}
export default Greet;