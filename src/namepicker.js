import React, {useState}  from 'react'

function NamePicker(props){
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState('')

    if (name.length >= 0){
        return (
            <namepicker className="namepicker">

                <div className="user-edit">
                    <input className="name-input" 
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        placeholder="Type a username"
                        onKeyPress={e=> {
                            if(e.key==='Enter' && name) {
                                setName(name)
                                console.log(name)
                            }
                        }}
                    />

                    <button className="add-button" 
                        onClick={()=> {
                            if(name.length>0) {
                                setName(name)
                                console.log(name)
                            }
                        }}>
                        +
                    </button>
                </div>
            </namepicker>
        )
    }

    else {
        return (

            <namepicker className="namepicker">
                <div className="user-show">
                    <div className="current-username">
                            {name}
                    </div>
    
                    <button className="edit-button" 
                        onClick={()=> {
                            if(name.length>0) {
                                setName(name='')
                                console.log(name)
                            }
                        }}>
                        <img src="https://image.flaticon.com/icons/svg/61/61456.svg"/>
                    </button>
    
                </div>
    
            </namepicker>
        )
    }
}


export default NamePicker