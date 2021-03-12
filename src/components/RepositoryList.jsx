import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'unform teste',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

    return (
        <section className="repo-list">
            <h1>Lista de repositório</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>

            </ul>
        </section>
    )
}