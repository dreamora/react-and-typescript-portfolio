import {ChildAsFC} from "./Child"

const Parent = () => {
    return <ChildAsFC color="red and green" onClick={() => console.log("Clicked.")}>
        <p>This is some fun!</p>
    </ChildAsFC>
};

export default Parent;
