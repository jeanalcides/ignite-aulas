import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform';

const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'http://github.com/unform/unform'
}

export function RepositoryList(){
    return(
        <section className="respository-lisy">
            <h1>Lista de Repositórios</h1>

            <ul>
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}