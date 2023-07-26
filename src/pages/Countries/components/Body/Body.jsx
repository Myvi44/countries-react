import { Outlet } from "react-router"

export const Body = () => {

    return (
        <div className="body-element">
            <Outlet />
        </div>
    )
}