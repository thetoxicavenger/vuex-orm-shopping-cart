import { Database } from '@vuex-orm/core'
import Item from '@/models/Item'
import items from './modules/items'

const database = new Database()

database.register(Item, items)

export default database