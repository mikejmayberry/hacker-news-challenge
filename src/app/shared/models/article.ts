export class Article {


  public id: number;
  public title: string;
  public points: number;
  public user: string;
  public time: number;
  public time_ago: number;
  //public type: FeedType;
  public url: string;
  public domain: string;
  //public comments: Comment[];
  public comments_count: number;
  //public poll: PollResult[];
  public poll_votes_count: number;
  public deleted: boolean;
  public dead: boolean;
}
