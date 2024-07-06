import classes from './Button.module.css';

export default function Button({ children, squared, active, type, ...props }) {
    
    return (
        <button {...props} className={`${squared ? `${classes.button} ${classes.squared}` : classes.button} ${active ? classes.active : ''} ${type=='edit' && classes.edit} ${type=='delete' && classes.delete} ${type=='add' && classes.add}`}>{children}</button>
    )
}