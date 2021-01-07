import Realm from "realm"
import { Items } from './model'

const REALM_SCHEMA_VERSION = 0

const realm = new Realm({
    schemaVersion: REALM_SCHEMA_VERSION,
    schema: [ Items.schema ]
})

export function getRealmPath() {
    return realm.path
}

export function totalItemsInSchema({ schemaName }) {
    try {
        return realm.objects(schemaName).length
    } catch(error) {
        if(__DEV__) console.log(error.message)
    }
}
    
export function fetchObjectsFromSchema({ schemaName, filterString = '', file, sortKey, distinctKey }) {
    try {
        let result = realm.objects(schemaName)
        result = (filterString && filterString.length) ? result.filtered(filterString) : result
        result = (sortKey && sortKey.length) ? result.sorted(sortKey) : result
        if(distinctKey && distinctKey != '') result = result.filtered(`TRUEPREDICATE SORT(${distinctKey} ASC) DISTINCT(${distinctKey})`)

        if(__DEV__) {
            let realmFileName = `File: ${(file ? file.split('.')[0] : 'default')}.realm\n`
            let sortKeyLog = (sortKey && sortKey.length) ? `\nSort Key: ${sortKey}` : ''
            let filterLog = filterString.length > 0 ? `WHERE ${filterString}` : ''
            let distinctKeyLog = (distinctKey && distinctKey.length > 0) ? `\nDistinct Key: ${distinctKey}` : ''
            console.log(`[Database] ${realmFileName}>> ${result.length} item in ${schemaName} ${filterLog} ${sortKeyLog} ${distinctKeyLog}`)
        }
        return result
    } catch(error) {
        if(__DEV__) console.log(error.message)
    }
}

export function writeSchema({ schemaName, properties, update = true }) {
    if(!(properties instanceof Array)) realm.write(() => realm.create(schemaName, properties, update))
    else realm.write(() => properties.forEach(object => realm.create(schemaName, object, update)))
    // else properties.map(object => realm.write(() => realm.create(schemaName, object, update) ))
}

export function clearDatabase() {
    realm.write(() => realm.deleteAll())
}

export function deleteRealmRecord({ realmObjects }) {
    if(!(realmObjects instanceof Array)) realm.write(() => realm.delete(realmObjects))
    else realmObjects.map(realmObject => realm.write(() => realm.delete(realmObject)))
}

