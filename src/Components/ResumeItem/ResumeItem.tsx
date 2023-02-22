import './ResumeItem.css'

type Props = {
    title : string,
    value : number,
    textColor : string
}

function ResumeItem({ title, value, textColor } : Props) {
  return(
    <div className='Container'>
        <p className='Title'>{title}</p>
        <p className='Value' style={{ color: value < 0 ? 'red' : textColor }}>R$ {Number(value)}</p>
    </div>
  );
}

export default ResumeItem;