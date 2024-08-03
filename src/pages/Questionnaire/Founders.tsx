import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {FounderInfoRoute} from "../../models/routes";
import {EFormPrefix} from "../../models";
import {useFieldArray, useFormContext} from "react-hook-form";

const Founders: FC = () => {
    const prefix = EFormPrefix.FOUNDERS + "." as EFormPrefix;

    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({control, name: EFormPrefix.FOUNDERS})

    const addFounder = () => {
        append({})
    }

    return <article className="block">
        <fieldset className="block-sub">

            <div className="block-sub__title">
                <h4>Информация об учредителе</h4>
            </div>

        </fieldset>
    </article>
}

export default observer(Founders);