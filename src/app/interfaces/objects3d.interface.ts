export interface object3d{
  id:number,
  name: string,
  type: string,
  path:string,
  positions: number[][],
  content: textForObject3d

}

interface textForObject3d{
  title:string,
  type:string,
  contentCard:string[]
}
