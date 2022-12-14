import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar/index.js";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;