import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.component.html',
  styleUrls: ['./data-structures.component.scss']
})
export class DataStructuresComponent implements OnInit {

  public array!: number[];

  public object!: Record<string, string>;

  public map = new Map()
  .set('first', 1)
  .set('second', 2)
  .set('third', 3)

  public set = new Set([1,2,3,2,1]);

  constructor() { }

  ngOnInit(): void {
  }

  public testArrayMethods() {
    this.array = [1,2,3,4,5,6,7,8,9,10];

    console.log('Testing array methods on array:', this.array)
    //Mapping 

    console.log('Testing mapping methods')

    const resultOfForEach = this.array.forEach((num: number)=>  num * 2);
    console.log('resultOfEach', resultOfForEach);

    const resultOfMap = this.array.map((num)=> num * 2)
    console.log('resultOfMap', resultOfMap);

    //Filtering

    console.log('Testing filtering methods')

    const resultOfFilter = this.array.filter((num)=> num % 2 === 0)
    console.log('resultOfFilter', resultOfFilter);

    const resultOfFind = this.array.find((num)=> num % 2 === 0)
    console.log('resultOfFind', resultOfFind);

    //Boolean 

    const resultOfEvery = this.array.every((num)=> num % 2 === 0)
    console.log('resultOfEvery', resultOfEvery);

    const resultOfSome = this.array.some((num)=> num % 2 === 0)
    console.log('resultOfSome', resultOfSome);

    const resultOfIncludes = this.array.includes(1)
    console.log('resultOfIncludes', resultOfIncludes);


  }

  public testObjectMethods() {
    this.object = {
      firstProperty: "first",
      secondProperty: "second",
      thirdProperty: "third"
    };

    console.log(this.object[0]);
    console.log(this.object.firstProperty)
    const ourDynamicProperty = 'thirdProperty'
    console.log(this.object?.[ourDynamicProperty])
    


  }
  public testMapMethods() {
    const mapResult = this.map.get('first');
    console.log('getMapProperty', mapResult)
    this.map.set('customProperty', 'ourCustomValue');
    console.log('getCustomProperty', this.map.get('customProperty'))
  }

  public testSetMethods() {
    const set = new Set([1,1,1,1,1,1,1,1,1,1,1,1]);
    console.log(set)
    set.add(1)
    console.log(set)
  }

}
