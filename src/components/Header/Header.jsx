import Button from '../Button/Button'
import classes from './Header.module.css'
import { useState } from 'react'

export default function Header({tab, setTab}) {
    
    return (
        <header className={classes.header}>
            <Button active={tab == 'app'} onClick={() => setTab('app')}>to-do app</Button>
            <Button active={tab == 'about'} onClick={() => setTab('about')}>about</Button>
        </header>
    )
}