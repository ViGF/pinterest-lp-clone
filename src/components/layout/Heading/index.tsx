import './style.css'

export function Heading() {
    return (
        <div className="heading">
            <span className="text">
                Encontre sua próxima
            </span>
            <div className="wrapper">
                <div className="offset">
                    <h2 className="text animate-before">ideia de look de verão</h2>
                </div>
                <div className="offset">
                    <h2 className="text animate-before">atividade para crianças</h2>
                </div>
                <div className="offset">
                    <h2 className="text animate-before">ideia para um jantar especial</h2>
                </div>
            </div>
            <div className="indicators">
                <button
                    className="indicator"
                    title='0'
                    type='button'
                    onClick={() => console.log('a')}
                />
                <button
                    className="indicator"
                    title='1'
                    type='button'
                    onClick={() => console.log('a')}
                />
                <button
                    className="indicator"
                    title='2'
                    type='button'
                    onClick={() => console.log('a')}
                />
            </div>
        </div>
    )
}