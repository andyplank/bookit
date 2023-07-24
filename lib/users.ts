import 'server-only'
import { cache } from 'react'
import clientPromise from './mongodb';

const userCollection = cache(async () => {
	const client = await clientPromise
	const db = client.db(process.env.MONGODB_DBNAME)
	const collection = db.collection('Users');
	return collection;
})

export const getUserIds = cache(async () => {
	const collection = await userCollection();
	const findCursor = await collection.find({}, { projection: {sku : true}});
	const users = await findCursor.toArray()
	const userIds = users.map((doc) => { return {id: doc.sku}});
	return userIds;
});

export const preloadUser = (id: string) => {
	void getUser(id)
}
 
export const getUser = cache(async (id: string) => {
	const collection = await userCollection();
	const user = await collection.findOne({id: id}, { projection: {sku : true}});
	return user;
})