import './BtnPart.css';
import './CSS\ Hovers/btnHover.css';
import './CSS Mods/Test-1.css';

function BtnPart(props) {
    
    const cont1 = document.querySelector('.MainDiv-Sub1');
    const cont2 = document.querySelector('.cont-btn');
    const btn1 = document.querySelector('#btn1');

    let DNMode = () => {
        cont1.classList.toggle('cont-1-bgcolor');
        cont2.classList.toggle('cont-2-bgcolor');
        btn1.classList.toggle('btn-bgcolor');
    }

    return(
        <div>
            <div className='cont-btn'>
                <button id="btn1" onClick={DNMode}> {props.infoButton} </button>
            </div>
        </div>
    )
}

export default BtnPart;