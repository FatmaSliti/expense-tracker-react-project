import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; //card is set by default and must accept any other class 
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
