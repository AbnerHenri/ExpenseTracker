import './ResumeItem.css'

type Props = {
    title : String,
    value : Number,
}

function ResumeItem({ title, value } : Props) {
  return(
    <div className='Container'>
        <p className='Title'>{title}</p>
        <p className='Value'>R$ {Number(value)}</p>
    </div>
  );
}

export default ResumeItem;