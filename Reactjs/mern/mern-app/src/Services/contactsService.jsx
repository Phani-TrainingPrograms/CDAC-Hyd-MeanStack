import axios from 'axios'
//Is the library for developing Apps that interact with REST API

export class ContactService{
    static baseUrl = "http://localhost:1234/contacts"

    //3 Functions: getAll, getById, insert
    static getAllContacts(){
        return axios.get(this.baseUrl);
    }

    static getById(id){
        const idUrl = `${this.baseUrl}/${id}`
        return axios.get(idUrl)
    }

    static addContact(contact){
        return axios.post(this.baseUrl, contact)
    }

    static deleteContact(id){
        const idUrl = `${this.baseUrl}/${id}`
        return axios.delete(idUrl)
    }

    static updateContact(contact){
        const idUrl = `${this.baseUrl}/${contact.id}`
        return axios.put(idUrl, contact);
    }
}
