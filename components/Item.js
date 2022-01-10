import Link from 'next/link'

export default function Item ({ item }) {
    return (
        <div className="card">
            <h3> Nome: {item.frontmatter.nome} </h3>
            <h3> Data agendada: {item.frontmatter.dataCompra} </h3>
            <h3> Repetir: {item.frontmatter.repetir} </h3>
        </div>
    )
}