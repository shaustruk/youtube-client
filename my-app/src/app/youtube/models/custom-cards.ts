export interface ICustomCard {
  id: string;
  properties: ICardCustomProperties;
}

export interface ICardCustomProperties {
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
}

export class CustomCard implements ICustomCard {
  public id: string;

  public properties: ICardCustomProperties;

  constructor(
    title: string,
    description: string,
    img: string,
    linkVideo: string
  ) {
    this.properties = {
      description,
      date: new Date().toString(),
      img: img,
      title,
      link: linkVideo,
    };
    this.id = `${Date.now()}`;
  }
}
