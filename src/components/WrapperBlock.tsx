import {FC, ReactNode} from "react";

type IProp = {
    id: string
    title: string
    children?: ReactNode
};

const WrapperBlock: FC<IProp> = (props) => {
    return <article className="block" id={props.id}>
        <div className="block__head">
            <h3 className="block__head--title">{props.title}</h3>
        </div>

        <fieldset className="block__body">
            {props.children}
        </fieldset>
    </article>
};

export default WrapperBlock;