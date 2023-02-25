import Image from 'next/image'
import './style.css'

export function Header() {
    return (
        <header>
            <a href="#">
                <Image
                    alt='Logo do Pinterest'
                    src='/pinterest.svg'
                    width={32}
                    height={32}
                />
                <h1>Pinterest</h1>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Negócios</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
                <div className="buttons">
                    <button className="login">Entrar</button>
                    <button className="signup">Criar conta</button>
                </div>
            </nav>
        </header>
    )
}