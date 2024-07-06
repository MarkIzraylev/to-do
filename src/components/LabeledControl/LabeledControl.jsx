import classes from './LabeledControl.module.css';

export default function LabeledControl({ label, type, ...props }) {
    return (
        <>
            <label className={classes.labeledControl}>
                {label}
                <input {...props} name="" type={type} />
            </label>
        </>
    )
}