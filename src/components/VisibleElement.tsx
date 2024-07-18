import {FC} from "react";
import {animated, useSpring} from "@react-spring/web";

type TProp = {
    className?: string;
    isVisible: boolean;
    children: React.ReactNode;
}

const VisibleElement: FC<TProp> = (props) => {

    const springProps = useSpring({
        display: props?.isVisible ? 'block' : 'none',
    });

    return <animated.div style={springProps} className={props?.className}>
        {props.children}
    </animated.div>
}

export default VisibleElement;