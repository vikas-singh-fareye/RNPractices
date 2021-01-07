'use strict'
import Realm from 'realm';

export default class Items { }

//Properties are in chronological order.
//Default value for each property is mandatory
//Every Schema must have atleast 1 Primary key index
Items.schema = {
    name: 'Items',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        price: { type: 'string', default: 'pending' },
        timestamp: { type: 'int', default: Math.floor(Date.now()/1000) },
        available: { type: 'bool', default: false }
    }
}