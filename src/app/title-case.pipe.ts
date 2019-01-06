import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for(var index = 0; index < words.length; index++){
      let word = words[index];
      if(index > 0 && this.isPreposition(word)){
        words[index] = word.toLocaleLowerCase();      
      }
      else
        words[index] = this.toTitleCase(word);      
    }
    return words.join(' ');
    }


//#region private helpers
    private toTitleCase(word: string): string{
      return word.substr(0, 1).toLocaleUpperCase()
        + word.substr(1).toLocaleLowerCase();
    }

    private isPreposition(word: string): boolean{
      let prepositions = [
        'of',
        'the'
      ];

      return prepositions.includes(word.toLocaleLowerCase())
    }

  //#endregion
}
