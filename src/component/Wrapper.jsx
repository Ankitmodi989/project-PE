import Usercard from './Usercard'

const Wrapper = ({title}) => {
  return (
    <div>
        {title.map((ele, index)=>{
            return <Usercard key={index} ele={ele}></Usercard>
        })}
        </div>
  )
}

export default Wrapper  
