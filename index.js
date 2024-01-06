const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "getById":
      const choosenContact = await getContactById(id);
      return console.log(choosenContact);

    case "delete":
      const contactDelete = await removeContact(id);
      return console.log(contactDelete);

    case "add": 
    const newContact = await addContact({name, email, phone});
    return console.log(newContact);
  }
};

// @ts-ignore
// invokeAction({ action: "getAll" });
// invokeAction({action: "getById", id: "drsAJ4SHPYqZeG-83QTVW"});
// invokeAction({action: "delete", id: "vza2RIzNGIwutCVCs4mCL"});
// invokeAction({action: 'add', name: 'Vladylsav', email: 'frederiko@gmail.com', phone: '+34678987098'});
