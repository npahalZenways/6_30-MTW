import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    constructor() {
        
    }
    transform(array, query){
        if(query){
            let newarr;
            newarr = array.filter(function(item) {
                return item.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
            })
            return newarr;
        } else {
            return array;
        }
    }
}