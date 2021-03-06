import { useState, useEffect } from 'react'

import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'


interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    console.log(repositories)

    //parâmetros: função q será executada, array de dependências
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
    }, [])

    
    return (
        <section className="repo-list">
            <h1>Lista de repositório</h1>

            <ul>
                
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}