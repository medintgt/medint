import Export from "./Elements/Export";
import Filters from "./Elements/Filters";

const ShowAllTools = () => {
    return (
        <div className="flex justify-between items-center">
            <Export />
            <Filters />
        </div>
    );
};

export default ShowAllTools;