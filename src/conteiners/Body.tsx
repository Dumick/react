import {FC, ReactNode} from "react";

type TProp = {
    children: ReactNode;
}

const Body: FC<TProp> = ({children}) => {
    return <main>
        {children}
    </main>
}

export default Body;