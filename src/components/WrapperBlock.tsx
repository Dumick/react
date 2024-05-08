import {FC} from "react";

type IProp = {
    title: string
    subtitle?: string
    children?: React.ReactNode
};

const WrapperBlock: FC<IProp> = (props) => {
    const {subtitle, title, children} = props;

    return <section className="block">
        <div className="block__head">
            <h3 className="block__head--title">{title}</h3>
            {props.subtitle && <span className="block__head__subtitle">{subtitle}</span>}
        </div>

        <div className="block__body">
            {children}
        </div>
    </section>
};

export default WrapperBlock;