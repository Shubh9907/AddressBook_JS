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

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {

        let NAME_PATTERN = RegExp("^[A-Z][a-z]{2,}$");
        let ZIP_PATTERN = RegExp("^[0-9]{6}$");
        let NUM_PATTERN = RegExp("^[1-9][0-9]{9}$");
        let EMAIL_PATTERN = RegExp("^[a-zA-Z0-9]+([_+-.][a-zA-Z0-9]+)?[@][a-z]{2,}[.][a-z]{2,4}([.][a-z]{2,3})?$");
        this.flag = 0;

        if (NAME_PATTERN.test(firstName)) {
            this.firstName = firstName;
        } else {
            console.log("First name is incorrect");
        }

        if (NAME_PATTERN.test(lastName)) {
            this.lastName = lastName;
        } else {
            console.log("Last name is incorrect");
        }

        this.address = address;
        this.city = city;
        this.state = state;

        if (ZIP_PATTERN.test(zip)) {
            this.zip = zip;
        } else {
            console.log("Incorrect Zip");
        }

        if (NUM_PATTERN.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            console.log("incorrect phone Number");
        }

        if (EMAIL_PATTERN.test(email)) {
            this.email = email;
        } else {
            console.log("Incorrect email");
        }
    }

    get firstName() {
        return this.firstName;
    }

    set firstName(firstName) {
        let NAME_PATTERN = RegExp("^[A-Z][a-z]{3,}$");
        if (NAME_PATTERN.test(firstName)) {
            this.firstName = firstName;
        } else {
            console.log("First name is incorrect");
        }
    }

    get lastName() {
        return this.lastName;
    }
    set lastName(lastName) {
        if (NAME_PATTERN.test(lastName)) {
            this.lastName = lastName;
        } else {
            console.log("Last name is incorrect");
        }
    }

    get address() {
        return this.address;
    }

    set address(address) {
        this.address = address;
    }

    get city() {
        return this.city;
    }

    set city(city) {
        this.city = city;
    }

    get state() {
        return this.state;
    }

    set state(state) {
        this.state = state;
    }

    get zip() {
        return this.zip;
    }

    set zip(zip) {
        if (ZIP_PATTERN.test(zip)) {
            this.zip = zip;
        } else {
            console.log("Incorrect Zip");
        }
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        if (NUM_PATTERN.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            console.log("incorrect phone Number");
        }
    }

    get email() {
        return this.email;
    }
    set email(email) {
        if (EMAIL_PATTERN.test(email)) {
            this.email = email;
        } else {
            console.log("Incorrect email");
        }
    }
}

let contactList = new Array;

function addContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    let contact = new Contacts(firstName, lastName, address, city, state, zip, phoneNumber, email);
    if (Contacts.flag == 0) {
        contactList.push(contact);
    }
}

addContact("Shubham", "Verma", "sdssdf", "sdsd", "sdsd", "123456", "1234567890", "shubham@bridgelabz.com");
console.log(contactList);