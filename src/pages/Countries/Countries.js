import { Header } from "./components/Header"
import { Body } from "./components/Body"

export const Countries = ({ className }) => {
    return (
        <div className={className}>
            <Header />
            <Body />
        </div>
    )
}