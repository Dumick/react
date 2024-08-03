import {FC} from "react";
import {Transition} from "@react-spring/web";

type TProp = {
    className?: string;
    isVisible: boolean;
    children: React.ReactNode;
}

const VisibleElement: FC<TProp> = ({isVisible, children, className}) => {

    return <Transition
        items={isVisible}
        enter={{opacity: 1, transform: "transformY(0)"}}
        from={{opacity: 0, transform: "transformY(-2em)"}}
        leave={{opacity: 0, transform: "transformY(-2em)"}}
    >
        {item => item && (props => (
            <div className={className} style={props}>
                {children}
            </div>
        ))}
    </Transition>
}

export default VisibleElement;