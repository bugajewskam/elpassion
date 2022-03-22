import { toLower } from "cypress/types/lodash";

export class TooLongSqueeze extends Error{}
export class NokiaTexter{
    text :string
    constructor(text: string){
        this.text = text
    }
    squeeze(){
        const words = this.text.split(" ").filter((part)=> part !== "");
        if(words.length === 1)
            return words[0];
        const squeeze = words.map((word, index)=> index % 2 === 0 ? word.toUpperCase() : word.toLowerCase()).join("")
        if (squeeze.length > 160){
            throw new TooLongSqueeze();
        }
        return squeeze;

        

    }
}
