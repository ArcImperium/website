import './Head.css'

function Head({head, setHead}) {
    return(
        <>
        {head && (<>
        <div className="head">
            <button className="head-button a">Home</button>
            <button className="head-button b">Blog</button>
            <button className="head-button c">About</button>
        </div>
        <button className="close-head a" onClick={() => {setHead(prev => !prev)}}></button>
        <button className="close-head b" onClick={() => {setHead(prev => !prev)}}></button>
        </>)}
        {!head && (<>
        <div className="not-head"></div>
        <button className="close-head a" onClick={() => {setHead(prev => !prev)}}></button>
        <button className="close-head b" onClick={() => {setHead(prev => !prev)}}></button>
        </>)}
        </>
    )
}

export default Head