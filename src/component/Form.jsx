import React from 'react'
import './Header.css'

const Form = () => {
return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <form action="" className='form'>
                    <label htmlFor=""></label>
                    <input type="text" placeholder='Provide your name' style={{height:"30px"}} />
                    <label htmlFor=""></label>
                    <input type="number"  placeholder='Enter your age' style={{height:"30px"}}/>

                    <button>submit</button>

            </form>
    </div>
)
}

export default Form 