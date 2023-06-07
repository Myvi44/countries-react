import { Input } from "../../../../../../components/Input";

export const Filters = () => {

    let nums = [6, 5, 10];

    let afterMapNums = nums.map(num => <div> {num} </div>);
    console.log(afterMapNums)

    return (
        <>
            <Input className="filters-input" />
        </>
    )
}