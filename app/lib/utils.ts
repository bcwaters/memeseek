import yeschad from "../seed/templateDB/yeschad.json";
import twobuttons from "../seed/templateDB/twobuttons.json";
import expandingbrain from "../seed/templateDB/expandingbrain.json";

export const stubImageLocation = () => {
    return ([yeschad.location, twobuttons.location])
    }
export const mockGetTemplates = () => {
        return [yeschad, twobuttons, expandingbrain]
    }
//  async function convertStreamToJson(readable) {
//   const text = await readStream(readable);
//   console.log(text)
//   return JSON.parse(text);
// }
//
// async function readStream(readable) {
//   const reader = readable.getReader();
//   let chunks = [];
//
//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;
//     chunks.push(value);
//   }
//
//   return Buffer.concat(chunks).toString();
// }