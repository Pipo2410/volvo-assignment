class Data {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;

  constructor(dataText: string) {
    this.id = dataText;
    this.modelName = dataText;
    this.bodyType = dataText;
    this.modelType = dataText;
    this.imageUrl = dataText;
  }
}

export default Data;
