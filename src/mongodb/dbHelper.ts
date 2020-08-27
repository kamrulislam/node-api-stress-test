import {MongoClient} from 'mongodb';

class MongoDbHelper {
  private static db: any;
  // Connection URI
  private static uri = 'mongodb://root:password@192.168.1.8:27017/?poolSize=20&w=majority';
  private static DATABASE = 'MyDoktor';
  private static COLLECTION = 'Patients';

  static async init () {
    if(!!this.db) {
      return;
    }

    // Create a new MongoClient
    const client = new MongoClient(MongoDbHelper.uri);
    await client.connect();

    this.db = await client.db(MongoDbHelper.DATABASE);
  }

  static async getCollection (collectionName = MongoDbHelper.COLLECTION) {

    if(!this.db) {
      await this.init();
    }

    return this.db.collection(collectionName);
  }

}

export default MongoDbHelper;