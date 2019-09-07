export class ItemModel {


  public id: number;
  public deleted: boolean;
  public type: string;
  public by: string;
  public time: number;
  public text: string;
  public dead: boolean;
  public parent: ItemModel;
  public poll: ItemModel;
  public kids: Array<number>;
  public url: string;
  public score: number;
  public title: string;
  public parts: Array<ItemModel>;
  public descendants: number;
  public points: number;
}
