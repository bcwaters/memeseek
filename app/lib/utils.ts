import yeschad from "../../public/templateDB/yeschad.json";
import twobuttons from "../../public/templateDB/twobuttons.json";
import expandingbrain from "../../public/templateDB/expandingbrain.json";

export const stubImageLocation = () => {
    return ([yeschad.location, twobuttons.location])
    }
export const mockGetTemplates = () => {
        return [yeschad, twobuttons, expandingbrain]
    }
