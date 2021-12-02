console.log("Welcome to Address Book System");

class Contacts {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    get firstName() {
        return this.firstName;
    }
    set firstName(firstName){
        this.firstName=firstName;
    }
    get lastName() {
        return this.lastName;
    }
    set lastName(lastName){
        this.lastName=lastName;
    }
    get address() {
        return this.address;
    }
    set address(address){
        this.address=address;
    }
    get city() {
        return this.city;
    }
    set city(city){
        this.city=city;
    }
    get state() {
        return this.state;
    }
    set state(state){
        this.state=state;
    }
    get zip() {
        return this.zip;
    }
    set zip(zip){
        this.zip=zip;
    }
    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(phoneNumber){
        this.phoneNumber=phoneNumber;
    }
    get email() {
        return this.email;
    }
    set email(email){
        this.email=email;
    }
}

let contactList = new Array;

function addContact(firstName,lastName,address,city,state,zip,phoneNumber,email) {
    let contact = new Contacts(firstName,lastName,address,city,state,zip,phoneNumber,email);
    contactList.push(contact);
}

addContact("shubham","verma","sdssdf","sdsd","sdsd","sdsd","sfsd","sdsdf");
console.log(contactList);