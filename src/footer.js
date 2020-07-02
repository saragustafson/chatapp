import React, {useState}  from 'react'

function Footer(){
    const [text,setText] = useState('')
    return(
        <footer class="footer">
            <input class="input" value={text}
                onChange={e=> setText(e.target.value)}
                placeholder="Type your message here!"
            />
            <button class="button"> ↑
            </button>
        </footer>
    )
}

export default Footer