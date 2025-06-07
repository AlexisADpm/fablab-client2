import { Pipe, PipeTransform } from '@angular/core';
import { Object3d } from '../interfaces/objects3d.interface';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
    transform(value: Object3d[], category?: string): Object3d[]{

        if(!value || !category){
            return [];
        }
        return value.filter((element)=>element.category === category);
    }        
}