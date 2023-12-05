import React, { useState } from 'react'
import { useGlobalState } from '../context/GlobalState'

export const DailySites = () => {

    const { addSite } = useGlobalState()

    const [site, setSite] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const [escenarios, setEscenarios] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()

        if (site.trim() === '') {
            alert('Sitio vacio')
            setSite('')
            return
        }

        addSite({
            id: window.crypto.randomUUID(),
            site,
            user,
            password
        })

        setSite('')
        setUser('')
        setPassword('')
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
                className='d-flex flex-column justify-content-center align-items-center gap-4 my-4'>
                <input
                    type="text"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                    placeholder='Add a new site ...'
                />
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder='Add a new user ...'
                />
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Add a new pass ...'
                />
                <button className='btn-save'>Save Task</button>
            </form>
            <div>
                {}
            </div>
        </>

    )
}
