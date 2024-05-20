import {FC, ReactNode} from "react";

type IProp = {
    title: string
    children?: ReactNode
};

const WrapperBlock: FC<IProp> = (props) => {
    const {title, children} = props;

    return <article className="block">
        <div className="block__head">
            <h3 className="block__head--title">{title}</h3>
        </div>

        <fieldset className="block__body">
            {children}
        </fieldset>
    </article>
};

export default WrapperBlock;